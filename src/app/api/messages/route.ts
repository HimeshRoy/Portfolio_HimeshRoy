import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const BOT_MESSAGE =
  "Thanks for reaching out 👋 Your message has been received. Himesh will get back to you as soon as possible.";

function getAdminEmail() {
  return process.env.ADMIN_EMAIL
    ?.trim()
    .toLowerCase();
}

/**
 * GET
 *
 * Visitor:
 *   GET /api/messages
 *   → returns their own conversation
 *
 * Admin:
 *   GET /api/messages?conversationId=...
 *   → returns the requested conversation
 */
export async function GET(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const sessionEmail =
      session.user.email
        .trim()
        .toLowerCase();

    const adminEmail = getAdminEmail();

    const isAdmin =
      Boolean(adminEmail) &&
      sessionEmail === adminEmail;

    const url = new URL(request.url);

    const conversationId =
      url.searchParams.get(
        "conversationId",
      );

    /*
     * --------------------------------------------------
     * ADMIN REQUEST
     * --------------------------------------------------
     *
     * Admin is allowed to request a specific
     * conversation.
     */
    if (conversationId) {
      if (!isAdmin) {
        return NextResponse.json(
          {
            error: "Forbidden",
          },
          {
            status: 403,
          },
        );
      }

      const conversation =
        await prisma.conversation.findUnique({
          where: {
            id: conversationId,
          },
          include: {
            messages: {
              orderBy: {
                createdAt: "asc",
              },
            },
          },
        });

      if (!conversation) {
        return NextResponse.json(
          {
            error:
              "Conversation not found",
          },
          {
            status: 404,
          },
        );
      }

      /*
       * Format timestamps on the server so
       * the client doesn't get hydration
       * mismatches from different locales.
       */
      const messages =
        conversation.messages.map(
          (message) => ({
            id: message.id,
            content: message.content,
            isBot: message.isBot,
            senderId: message.senderId,
            createdAt:
              message.createdAt.toISOString(),

            displayTime:
              message.createdAt.toLocaleString(
                "en-IN",
                {
                  timeZone:
                    "Asia/Kolkata",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                },
              ),
          }),
        );

      return NextResponse.json({
        conversationId:
          conversation.id,
        currentUserId:
          conversation.userId,
        messages,
      });
    }

    /*
     * --------------------------------------------------
     * VISITOR REQUEST
     * --------------------------------------------------
     *
     * Visitors can ONLY retrieve their own
     * conversation.
     */
    const user =
      await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

    if (!user) {
      return NextResponse.json({
        messages: [],
        currentUserId: null,
      });
    }

    const conversation =
      await prisma.conversation.findFirst({
        where: {
          userId: user.id,
        },
        include: {
          messages: {
            orderBy: {
              createdAt: "asc",
            },
          },
        },
      });

    const messages =
      conversation?.messages.map(
        (message) => ({
          id: message.id,
          content: message.content,
          isBot: message.isBot,
          senderId: message.senderId,
          createdAt:
            message.createdAt.toISOString(),

          displayTime:
            message.createdAt.toLocaleString(
              "en-IN",
              {
                timeZone:
                  "Asia/Kolkata",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              },
            ),
        }),
      ) ?? [];

    return NextResponse.json({
      currentUserId: user.id,
      conversationId:
        conversation?.id ?? null,
      messages,
    });
  } catch (error) {
    console.error(
      "MESSAGE_GET_ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error: "Unable to load messages",
      },
      {
        status: 500,
      },
    );
  }
}

/**
 * POST
 *
 * Visitor sends a message.
 */
export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const body = await request.json();

    const content =
      typeof body.content === "string"
        ? body.content.trim()
        : "";

    if (!content) {
      return NextResponse.json(
        {
          error:
            "Message cannot be empty",
        },
        {
          status: 400,
        },
      );
    }

    if (content.length > 2000) {
      return NextResponse.json(
        {
          error: "Message is too long",
        },
        {
          status: 400,
        },
      );
    }

    const user =
      await prisma.user.upsert({
        where: {
          email: session.user.email,
        },
        update: {
          name:
            session.user.name ??
            undefined,
          image:
            session.user.image ??
            undefined,
        },
        create: {
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
        },
      });

    let conversation =
      await prisma.conversation.findFirst({
        where: {
          userId: user.id,
        },
      });

    if (!conversation) {
      conversation =
        await prisma.conversation.create({
          data: {
            userId: user.id,
          },
        });
    }

    /*
     * Check whether Himesh has already
     * replied.
     *
     * Bot messages don't count.
     */
    const adminHasReplied =
      await prisma.message.findFirst({
        where: {
          conversationId:
            conversation.id,
          isBot: false,
          senderId: {
            not: user.id,
          },
        },
      });

    /*
     * Save visitor message.
     */
    const visitorMessage =
      await prisma.message.create({
        data: {
          conversationId:
            conversation.id,
          senderId: user.id,
          content,
          isBot: false,
        },
      });

    /*
     * Bot responds only until Himesh
     * sends the first real reply.
     */
    let botMessage = null;

    if (!adminHasReplied) {
      botMessage =
        await prisma.message.create({
          data: {
            conversationId:
              conversation.id,
            senderId: null,
            content: BOT_MESSAGE,
            isBot: true,
          },
        });
    }

    await prisma.conversation.update({
      where: {
        id: conversation.id,
      },
      data: {
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: visitorMessage,
      botMessage,
    });
  } catch (error) {
    console.error(
      "MESSAGE_POST_ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error: "Unable to send message",
      },
      {
        status: 500,
      },
    );
  }
}