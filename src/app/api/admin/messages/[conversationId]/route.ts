import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    conversationId: string;
  }>;
};

export async function POST(
  request: Request,
  { params }: RouteContext,
) {
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

    const adminEmail =
      process.env.ADMIN_EMAIL
        ?.trim()
        .toLowerCase();

    const userEmail =
      session.user.email
        .trim()
        .toLowerCase();

    if (
      !adminEmail ||
      userEmail !== adminEmail
    ) {
      return NextResponse.json(
        {
          error: "Forbidden",
        },
        {
          status: 403,
        },
      );
    }

    const { conversationId } =
      await params;

    const body = await request.json();

    const content =
      typeof body.content === "string"
        ? body.content.trim()
        : "";

    if (!content) {
      return NextResponse.json(
        {
          error: "Reply cannot be empty",
        },
        {
          status: 400,
        },
      );
    }

    if (content.length > 2000) {
      return NextResponse.json(
        {
          error: "Reply is too long",
        },
        {
          status: 400,
        },
      );
    }

    const conversation =
      await prisma.conversation.findUnique({
        where: {
          id: conversationId,
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

    const adminUser =
      await prisma.user.upsert({
        where: {
          email: adminEmail,
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
          email: adminEmail,
          name: session.user.name,
          image: session.user.image,
        },
      });

    /*
     * This is a REAL Himesh message.
     *
     * Because isBot = false and senderId
     * belongs to the admin, the visitor API
     * will stop generating bot replies.
     */
    const message =
      await prisma.message.create({
        data: {
          conversationId,
          senderId: adminUser.id,
          content,
          isBot: false,
        },
      });

    await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error(
      "ADMIN_MESSAGE_POST_ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error: "Unable to send reply",
      },
      {
        status: 500,
      },
    );
  }
}