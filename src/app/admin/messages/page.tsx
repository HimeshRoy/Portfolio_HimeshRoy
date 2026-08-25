import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { LiveAdminInbox } from "@/components/admin/LiveAdminInbox";

export default async function AdminMessagesPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login?callbackUrl=/admin/messages");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  const userEmail = session.user.email.trim().toLowerCase();

  if (!adminEmail || userEmail !== adminEmail) {
    redirect("/messages");
  }

  const conversations = await prisma.conversation.findMany({
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

  const serializedConversations = conversations.map((conversation) => ({
    id: conversation.id,
    userId: conversation.userId,
    updatedAt: conversation.updatedAt.toISOString(),
    user: {
      name: conversation.user.name,
      email: conversation.user.email,
    },
    messages: conversation.messages.map((message) => ({
      id: message.id,
      content: message.content,
      isBot: message.isBot,
      senderId: message.senderId,
      createdAt: message.createdAt.toISOString(),
    })),
    unreadCount: 0,
  }));

  return (
    <main
      className="min-h-screen px-6 pb-24 pt-32 sm:px-10 sm:pb-32 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between gap-6">
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
              Admin
            </span>
          </div>

          <LogoutButton />
        </div>

        <div className="mt-12 flex items-end justify-between gap-8">
          <div>
            <p
              className="text-sm uppercase tracking-[0.25em]"
              style={{
                color: "var(--muted)",
              }}
            >
              Private inbox
            </p>

            <h1
              className="mt-4 text-6xl font-semibold leading-[0.85] tracking-[-0.06em] sm:text-7xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Messages
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                .
              </span>
            </h1>
          </div>

          <span
            className="hidden text-xs uppercase tracking-[0.25em] sm:block"
            style={{
              color: "var(--muted)",
            }}
          >
            {conversations.length}{" "}
            {conversations.length === 1 ? "conversation" : "conversations"}
          </span>
        </div>

        <div className="mt-16">
          <LiveAdminInbox initialConversations={serializedConversations} />
        </div>
      </div>
    </main>
  );
}
