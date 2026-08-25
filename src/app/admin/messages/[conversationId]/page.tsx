import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { LiveMessageBubbles } from "@/components/admin/LiveMessageBubbles";
import { ReplyBox } from "@/components/admin/ReplyBox";

type ConversationPageProps = {
  params: Promise<{
    conversationId: string;
  }>;
};

export default async function AdminConversationPage({
  params,
}: ConversationPageProps) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  const userEmail = session.user.email.trim().toLowerCase();

  if (!adminEmail || userEmail !== adminEmail) {
    redirect("/messages");
  }

  const { conversationId } = await params;

  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
    include: {
      user: true,
      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!conversation) {
    notFound();
  }

  const messages = conversation.messages.map((message) => ({
    id: message.id,
    content: message.content,
    isBot: message.isBot,
    senderId: message.senderId,
    createdAt: message.createdAt.toISOString(),
    displayTime: message.createdAt.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  }));

  return (
    <main
      className="min-h-screen px-6 pb-24 pt-32 sm:px-10 sm:pb-32 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/admin/messages"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] transition-transform duration-300 hover:-translate-x-1"
            style={{
              color: "var(--muted)",
            }}
          >
            <span>←</span>
            <span>Back to inbox</span>
          </Link>

          <LogoutButton />
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: "var(--accent)",
              }}
            />

            <span
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Conversation
            </span>
          </div>

          <div className="mt-8">
            <h1
              className="text-5xl font-semibold tracking-[-0.06em] sm:text-6xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              {conversation.user.name ?? "Unknown user"}
            </h1>

            <p
              className="mt-3 text-sm"
              style={{
                color: "var(--muted)",
              }}
            >
              {conversation.user.email}
            </p>
          </div>
        </div>

        <div
          className="mt-14 overflow-hidden rounded-xl border backdrop-blur-xl"
          style={{
            borderColor: "var(--border)",
            background:
              "color-mix(in srgb, var(--surface) 86%, var(--background))",
          }}
        >
          <div
            className="flex items-center justify-between border-b px-6 py-5"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <span
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Messages
            </span>

            <span
              className="text-[9px] uppercase tracking-[0.25em]"
              style={{
                color: "var(--muted)",
              }}
            >
              {conversation.messages.length} messages
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {messages.length === 0 ? (
              <div
                className="py-12 text-center text-sm"
                style={{
                  color: "var(--muted)",
                }}
              >
                No messages yet.
              </div>
            ) : (
              <LiveMessageBubbles
                conversationId={conversation.id}
                initialMessages={messages}
                visitorId={conversation.userId}
              />
            )}

            <div
              className="mt-8 border-t pt-8"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <ReplyBox conversationId={conversation.id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
