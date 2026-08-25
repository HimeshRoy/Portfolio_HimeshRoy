"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  content: string;
  isBot: boolean;
  senderId: string | null;
  createdAt: string;
};

type Conversation = {
  id: string;
  userId: string;
  user: {
    name: string | null;
    email: string;
  };
  messages: Message[];
  updatedAt: string;
  unreadCount: number;
};

type Props = {
  initialConversations: Conversation[];
};

export function LiveAdminInbox({
  initialConversations,
}: Props) {
  const [conversations, setConversations] =
    useState(initialConversations);

  const previousLatestIds =
    useRef(
      new Map<string, string | undefined>(),
    );

  const [newConversationIds, setNewConversationIds] =
    useState<Set<string>>(new Set());

  useEffect(() => {
    initialConversations.forEach(
      (conversation) => {
        previousLatestIds.current.set(
          conversation.id,
          conversation.messages[0]?.id,
        );
      },
    );

    async function loadConversations() {
      try {
        const response =
          await fetch(
            "/api/admin/messages",
            {
              cache: "no-store",
            },
          );

        if (!response.ok) {
          return;
        }

        const data =
          await response.json();

        if (
          !Array.isArray(
            data.conversations,
          )
        ) {
          return;
        }

        setConversations(
          data.conversations,
        );

        setNewConversationIds(
          (current) => {
            const next =
              new Set(current);

            data.conversations.forEach(
              (
                conversation: Conversation,
              ) => {
                const latestId =
                  conversation
                    .messages[0]?.id;

                const previousId =
                  previousLatestIds.current.get(
                    conversation.id,
                  );

                if (
                  latestId &&
                  previousId &&
                  latestId !== previousId
                ) {
                  next.add(
                    conversation.id,
                  );
                }

                previousLatestIds.current.set(
                  conversation.id,
                  latestId,
                );
              },
            );

            return next;
          },
        );
      } catch {}
    }

    loadConversations();

    const interval = setInterval(
      loadConversations,
      2000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [initialConversations]);

  async function openConversation(
    conversationId: string,
  ) {
    setNewConversationIds(
      (current) => {
        const next =
          new Set(current);

        next.delete(
          conversationId,
        );

        return next;
      },
    );

    try {
      await fetch(
        `/api/admin/messages/${conversationId}/read`,
        {
          method: "POST",
        },
      );
    } catch {}
  }

  if (conversations.length === 0) {
    return (
      <div
        className="border px-6 py-12"
        style={{
          borderColor:
            "var(--border)",
        }}
      >
        <p
          className="text-sm"
          style={{
            color: "var(--muted)",
          }}
        >
          No messages yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      {conversations.map(
        (conversation) => {
          const latestMessage =
            conversation.messages[0];

          const hasNew =
            conversation.unreadCount > 0 ||
            newConversationIds.has(
              conversation.id,
            );

          return (
            <article
              key={conversation.id}
              className="group border-t py-8"
              style={{
                borderColor:
                  "var(--border)",
              }}
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr_auto] lg:items-center lg:gap-12">
                <div>
                  <h2
                    className="text-xl font-medium transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      color:
                        "var(--foreground)",
                    }}
                  >
                    {conversation.user
                      .name ??
                      "Unknown user"}
                  </h2>

                  <p
                    className="mt-2 text-sm"
                    style={{
                      color:
                        "var(--muted)",
                    }}
                  >
                    {
                      conversation.user
                        .email
                    }
                  </p>
                </div>

                <div className="min-w-0">
                  {latestMessage ? (
                    <>
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="text-[9px] uppercase tracking-[0.25em]"
                          style={{
                            color:
                              latestMessage.isBot
                                ? "var(--accent)"
                                : latestMessage.senderId ===
                                    conversation.userId
                                  ? "var(--muted)"
                                  : "var(--primary)",
                          }}
                        >
                          {latestMessage.isBot
                            ? "Bot"
                            : latestMessage.senderId ===
                                conversation.userId
                              ? "Visitor"
                              : "Himesh"}
                        </span>

                        {conversation.unreadCount >
                          0 && (
                          <span
                            className="rounded-full px-2 py-1 text-[8px] uppercase tracking-[0.18em]"
                            style={{
                              backgroundColor:
                                "var(--accent)",
                              color:
                                "var(--background)",
                            }}
                          >
                            {conversation.unreadCount}{" "}
                            unread
                          </span>
                        )}

                        {hasNew &&
                          conversation.unreadCount ===
                            0 && (
                            <span
                              className="rounded-full px-2 py-1 text-[8px] uppercase tracking-[0.18em]"
                              style={{
                                backgroundColor:
                                  "var(--accent)",
                                color:
                                  "var(--background)",
                              }}
                            >
                              New
                            </span>
                          )}
                      </div>

                      <p
                        className="mt-2 line-clamp-2 text-sm leading-7"
                        style={{
                          color:
                            "var(--foreground)",
                        }}
                      >
                        {
                          latestMessage.content
                        }
                      </p>

                      <p
                        className="mt-2 text-[8px] uppercase tracking-[0.15em]"
                        style={{
                          color:
                            "var(--muted)",
                        }}
                      >
                        {new Date(
                          latestMessage.createdAt,
                        ).toLocaleString(
                          "en-IN",
                          {
                            timeZone:
                              "Asia/Kolkata",
                            day: "2-digit",
                            month:
                              "2-digit",
                            year:
                              "numeric",
                            hour:
                              "2-digit",
                            minute:
                              "2-digit",
                            hour12:
                              true,
                          },
                        )}
                      </p>
                    </>
                  ) : (
                    <span
                      className="text-sm"
                      style={{
                        color:
                          "var(--muted)",
                      }}
                    >
                      No messages
                    </span>
                  )}
                </div>

                <Link
                  href={`/admin/messages/${conversation.id}`}
                  onClick={() =>
                    openConversation(
                      conversation.id,
                    )
                  }
                  className="inline-flex w-fit items-center gap-3 border-b pb-2 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
                  style={{
                    borderColor:
                      "var(--border)",
                    color:
                      "var(--foreground)",
                  }}
                >
                  Open

                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          );
        },
      )}
    </div>
  );
}