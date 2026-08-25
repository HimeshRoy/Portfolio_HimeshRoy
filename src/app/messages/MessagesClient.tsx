"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { LogoutButton } from "@/components/auth/LogoutButton";

type Message = {
  id: string;
  content: string;
  isBot: boolean;
  senderId: string | null;
  createdAt: string;
};

export default function MessagesClient() {
  const [messages, setMessages] =
    useState<Message[]>([]);

  const [currentUserId, setCurrentUserId] =
    useState<string | null>(null);

  const [content, setContent] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [sending, setSending] =
    useState(false);

  const [error, setError] =
    useState("");

  const [showNewMessage, setShowNewMessage] =
    useState(false);

  const scrollContainerRef =
    useRef<HTMLDivElement>(null);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const shouldScrollRef =
    useRef(true);

  function isNearBottom() {
    const element =
      scrollContainerRef.current;

    if (!element) {
      return true;
    }

    return (
      element.scrollHeight -
        element.scrollTop -
        element.clientHeight <
      100
    );
  }

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

    setShowNewMessage(false);
  }

  useEffect(() => {
    if (shouldScrollRef.current) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });

      setShowNewMessage(false);
      shouldScrollRef.current = false;
    }
  }, [messages]);

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch(
          "/api/messages",
          {
            cache: "no-store",
          },
        );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ??
              "Failed to load messages",
          );
        }

        shouldScrollRef.current = true;

        setMessages(
          data.messages ?? [],
        );

        setCurrentUserId(
          data.currentUserId ?? null,
        );
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Unable to load messages.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  useEffect(() => {
    if (!currentUserId) {
      return;
    }

    const interval = setInterval(
      async () => {
        try {
          const response =
            await fetch(
              "/api/messages",
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
              data.messages,
            )
          ) {
            return;
          }

          setMessages((current) => {
            const existingIds =
              new Set(
                current.map(
                  (message) =>
                    message.id,
                ),
              );

            const newMessages =
              data.messages.filter(
                (message: Message) =>
                  !existingIds.has(
                    message.id,
                  ),
              );

            if (
              newMessages.length === 0
            ) {
              return current;
            }

            const nearBottom =
              isNearBottom();

            shouldScrollRef.current =
              nearBottom;

            if (!nearBottom) {
              setShowNewMessage(true);
            }

            return [
              ...current,
              ...newMessages,
            ];
          });
        } catch {}
      },
      2000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentUserId]);

  async function sendMessage() {
    const trimmed =
      content.trim();

    if (!trimmed || sending) {
      return;
    }

    setSending(true);
    setError("");

    shouldScrollRef.current =
      true;

    try {
      const response =
        await fetch(
          "/api/messages",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              content: trimmed,
            }),
          },
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Failed to send message",
        );
      }

      setMessages((current) => [
        ...current,
        {
          id: data.message.id,
          content:
            data.message.content,
          isBot:
            data.message.isBot,
          senderId:
            data.message.senderId,
          createdAt:
            data.message.createdAt,
        },
        ...(data.botMessage
          ? [
              {
                id:
                  data.botMessage.id,
                content:
                  data.botMessage
                    .content,
                isBot:
                  data.botMessage
                    .isBot,
                senderId:
                  data.botMessage
                    .senderId,
                createdAt:
                  data.botMessage
                    .createdAt,
              },
            ]
          : []),
      ]);

      setContent("");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to send message.",
      );
    } finally {
      setSending(false);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }
  }

  function handleScroll() {
    if (isNearBottom()) {
      setShowNewMessage(false);
    }
  }

  return (
    <main
      className="min-h-screen px-6 pb-24 pt-32 sm:px-10 sm:pb-32 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor:
                  "var(--accent)",
              }}
            />

            <span
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Messages
            </span>
          </div>

          <LogoutButton />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <span
              className="text-sm uppercase tracking-[0.25em]"
              style={{
                color: "var(--muted)",
              }}
            >
              Private conversation
            </span>

            <h1
              className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Let&apos;s
              <br />

              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                talk.
              </span>
            </h1>

            <p
              className="mt-8 max-w-sm text-sm leading-7"
              style={{
                color: "var(--muted)",
              }}
            >
              Send me a message directly
              through the portfolio. I&apos;ll
              be able to see it and reply from
              my side.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-xl border backdrop-blur-xl"
            style={{
              borderColor: "var(--border)",
              background:
                "color-mix(in srgb, var(--surface) 82%, var(--background))",
            }}
          >
            <div
              className="flex items-center justify-between border-b px-6 py-5"
              style={{
                borderColor:
                  "var(--border)",
              }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                Conversation
              </span>

              <span
                className="text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                {messages.length} messages
              </span>
            </div>

            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="relative max-h-[600px] min-h-[360px] overflow-y-auto scroll-smooth p-6"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 animate-pulse rounded-full"
                    style={{
                      backgroundColor:
                        "var(--accent)",
                    }}
                  />

                  <p
                    className="text-sm"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    Loading conversation...
                  </p>
                </div>
              ) : messages.length ===
                0 ? (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="text-sm"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Start the conversation.
                </motion.p>
              ) : (
                <div className="space-y-5">
                  {messages.map(
                    (
                      message,
                      index,
                    ) => {
                      const isVisitor =
                        !message.isBot &&
                        message.senderId ===
                          currentUserId;

                      const isAdmin =
                        !message.isBot &&
                        message.senderId !==
                          currentUserId;

                      return (
                        <motion.div
                          key={
                            message.id
                          }
                          initial={{
                            opacity: 0,
                            y: 14,
                            scale: 0.96,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 22,
                            delay:
                              Math.min(
                                index *
                                  0.04,
                                0.2,
                              ),
                          }}
                          className={`flex ${
                            isVisitor
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`flex max-w-[85%] flex-col sm:max-w-[75%] ${
                              isVisitor
                                ? "items-end"
                                : "items-start"
                            }`}
                          >
                            <div
                              className={`mb-1.5 px-2 text-[8px] uppercase tracking-[0.22em] ${
                                isVisitor
                                  ? "text-right"
                                  : "text-left"
                              }`}
                              style={{
                                color:
                                  message.isBot
                                    ? "var(--accent)"
                                    : isAdmin
                                      ? "var(--primary)"
                                      : "var(--muted)",
                              }}
                            >
                              {message.isBot
                                ? "Himesh's Assistant"
                                : isAdmin
                                  ? "Himesh"
                                  : "You"}
                            </div>

                            <motion.div
                              whileHover={{
                                y: -1,
                                scale: 1.01,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className={`relative px-5 py-3.5 ${
                                isVisitor
                                  ? "rounded-[22px] rounded-br-[6px]"
                                  : "rounded-[22px] rounded-bl-[6px]"
                              }`}
                              style={{
                                background:
                                  message.isBot
                                    ? "color-mix(in srgb, var(--surface) 90%, var(--accent))"
                                    : isVisitor
                                      ? "var(--accent)"
                                      : "var(--surface)",

                                border:
                                  message.isBot
                                    ? "1px solid color-mix(in srgb, var(--accent) 35%, transparent)"
                                    : isVisitor
                                      ? "1px solid color-mix(in srgb, var(--accent) 80%, transparent)"
                                      : "1px solid var(--border)",

                                boxShadow:
                                  isVisitor
                                    ? "0 8px 30px color-mix(in srgb, var(--accent) 18%, transparent)"
                                    : "0 6px 24px color-mix(in srgb, var(--background) 12%, transparent)",
                              }}
                            >
                              <span
                                aria-hidden="true"
                                className={`absolute bottom-0 h-3 w-3 ${
                                  isVisitor
                                    ? "right-[-5px]"
                                    : "left-[-5px]"
                                }`}
                                style={{
                                  background:
                                    message.isBot
                                      ? "var(--surface)"
                                      : isVisitor
                                        ? "var(--accent)"
                                        : "var(--surface)",

                                  clipPath:
                                    isVisitor
                                      ? "polygon(0 0, 100% 100%, 0 100%)"
                                      : "polygon(0 100%, 100% 0, 100% 100%)",
                                }}
                              />

                              <p
                                className="text-sm leading-6"
                                style={{
                                  color:
                                    isVisitor
                                      ? "var(--background)"
                                      : "var(--foreground)",
                                }}
                              >
                                {
                                  message.content
                                }
                              </p>
                            </motion.div>

                            <div
                              className={`mt-1.5 px-2 text-[8px] ${
                                isVisitor
                                  ? "text-right"
                                  : "text-left"
                              }`}
                              style={{
                                color:
                                  "var(--muted)",
                              }}
                            >
                              {new Date(
                                message.createdAt,
                              ).toLocaleTimeString(
                                "en-IN",
                                {
                                  hour: "2-digit",
                                  minute:
                                    "2-digit",
                                  hour12:
                                    true,
                                  timeZone:
                                    "Asia/Kolkata",
                                },
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    },
                  )}
                </div>
              )}

              <div
                ref={messagesEndRef}
                aria-hidden="true"
                className="h-px"
              />

              {showNewMessage && (
                <button
                  type="button"
                  onClick={
                    scrollToBottom
                  }
                  className="sticky bottom-4 left-1/2 z-10 mt-4 -translate-x-1/2 rounded-full border px-4 py-2 text-[9px] uppercase tracking-[0.2em] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor:
                      "var(--accent)",
                    background:
                      "color-mix(in srgb, var(--surface) 92%, var(--background))",
                    color:
                      "var(--foreground)",
                  }}
                >
                  New message ↓
                </button>
              )}
            </div>

            <div
              className="border-t p-6"
              style={{
                borderColor:
                  "var(--border)",
              }}
            >
              <textarea
                value={content}
                onChange={(event) =>
                  setContent(
                    event.target.value,
                  )
                }
                onKeyDown={
                  handleKeyDown
                }
                disabled={sending}
                maxLength={2000}
                rows={4}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border p-4 text-sm outline-none transition-colors"
                style={{
                  borderColor:
                    "var(--border)",
                  backgroundColor:
                    "var(--background)",
                  color:
                    "var(--foreground)",
                }}
              />

              <div className="mt-3 flex items-center justify-between gap-4">
                <span
                  className="text-[9px] uppercase tracking-[0.2em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  {content.length}/2000
                </span>

                <button
                  type="button"
                  onClick={
                    sendMessage
                  }
                  disabled={
                    sending ||
                    !content.trim()
                  }
                  className="inline-flex items-center gap-4 rounded-lg border px-5 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:translate-x-1 disabled:cursor-not-allowed disabled:opacity-40"
                  style={{
                    borderColor:
                      "var(--border)",
                    color:
                      "var(--foreground)",
                  }}
                >
                  <span>
                    {sending
                      ? "Sending..."
                      : "Send message"}
                  </span>

                  <span
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    →
                  </span>
                </button>
              </div>

              {error && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: -4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-4 text-xs"
                  style={{
                    color:
                      "var(--accent)",
                  }}
                >
                  {error}
                </motion.p>
              )}

              <p
                className="mt-4 text-[9px] uppercase tracking-[0.2em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Press Enter to send ·
                Shift + Enter for a new line
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 border-t pt-8"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-x-1"
            style={{
              color: "var(--muted)",
            }}
          >
            <span>←</span>
            <span>Back to contact</span>
          </Link>
        </div>
      </div>
    </main>
  );
}