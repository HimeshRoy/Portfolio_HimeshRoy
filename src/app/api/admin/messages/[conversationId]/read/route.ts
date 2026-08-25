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

    const { conversationId } =
      await params;

    const adminUser =
      await prisma.user.findUnique({
        where: {
          email: adminEmail,
        },
      });

    if (!adminUser) {
      return NextResponse.json(
        { error: "Admin not found" },
        { status: 404 },
      );
    }

    await prisma.message.updateMany({
      where: {
        conversationId,
        isRead: false,
        isBot: false,
        senderId: {
          not: adminUser.id,
        },
      },
      data: {
        isRead: true,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "ADMIN_MESSAGE_READ_ERROR:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Unable to mark messages as read",
      },
      {
        status: 500,
      },
    );
  }
}