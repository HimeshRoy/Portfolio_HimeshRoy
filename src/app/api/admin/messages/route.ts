import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
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
        { error: "Forbidden" },
        { status: 403 },
      );
    }

    const conversations =
      await prisma.conversation.findMany({
        include: {
          user: true,
          messages: {
            orderBy: {
              createdAt: "desc",
            },
            take: 1,
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

    const adminUser =
      await prisma.user.findUnique({
        where: {
          email: adminEmail,
        },
      });

    const unreadCounts =
      adminUser
        ? await prisma.message.groupBy({
            by: ["conversationId"],
            where: {
              isRead: false,
              isBot: false,
              senderId: {
                not: adminUser.id,
              },
              conversation: {
                userId: {
                  not: adminUser.id,
                },
              },
            },
            _count: {
              id: true,
            },
          })
        : [];

    const unreadMap =
      new Map(
        unreadCounts.map((item) => [
          item.conversationId,
          item._count.id,
        ]),
      );

    const result =
      conversations.map(
        (conversation) => ({
          ...conversation,
          unreadCount:
            unreadMap.get(
              conversation.id,
            ) ?? 0,
        }),
      );

    return NextResponse.json({
      conversations: result,
    });
  } catch (error) {
    console.error(
      "ADMIN_MESSAGES_GET_ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Unable to load conversations",
      },
      {
        status: 500,
      },
    );
  }
}