"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogoutButton } from "@/components/auth/LogoutButton";

type Message = {
  id: string;
  content: string;
  isBot: boolean;
  senderId: string | null;
  createdAt: string;
};

export default function MessagesClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [showNewMessage, setShowNewMessage] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(true);

  function isNearBottom() {
    const element = scrollContainerRef.current;
    if (!element) return true;

    return (
      element.scrollHeight - element.scrollTop - element.clientHeight < 100
    );
  }

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowNewMessage(false);
  }

  useEffect(() => {
    if (shouldScrollRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setShowNewMessage(false);
      shouldScrollRef.current = false;
    }
  }, [messages]);

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch("/api/messages", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? "Failed to load messages");
        }

        shouldScrollRef.current = true;
        setMessages(data.messages ?? []);
        setCurrentUserId(data.currentUserId ?? null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Unable to load messages.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  useEffect(() => {
    if (!currentUserId) return;

    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/messages", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();
        if (!Array.isArray(data.messages)) return;

        setMessages((current) => {
          const existingIds = new Set(current.map((message) => message.id));
          const newMessages = data.messages.filter(
            (message: Message) => !existingIds.has(message.id),
          );

          if (newMessages.length === 0) return current;

          const nearBottom = isNearBottom();
          shouldScrollRef.current = nearBottom;

          if (!nearBottom) {
            setShowNewMessage(true);
          }

          return [...current, ...newMessages];
        });
      } catch {}
    }, 2000);

    return () => clearInterval(interval);
  }, [currentUserId]);

  async function sendMessage() {
    const trimmed = content.trim();
    if (!trimmed || sending) return;

    setSending(true);
    setError("");
    shouldScrollRef.current = true;

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: trimmed }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setMessages((current) => [
        ...current,
        {
          id: data.message.id,
          content: data.message.content,
          isBot: data.message.isBot,
          senderId: data.message.senderId,
          createdAt: data.message.createdAt,
        },
        ...(data.botMessage
          ? [
              {
                id: data.botMessage.id,
                content: data.botMessage.content,
                isBot: data.botMessage.isBot,
                senderId: data.botMessage.senderId,
                createdAt: data.botMessage.createdAt,
              },
            ]
          : []),
      ]);

      setContent("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send message.");
    } finally {
      setSending(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
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
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-28 text-white sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e] transition-colors hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Contact</span>
          </Link>

          <LogoutButton />
        </div>

        {/* Main Split Layout */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Editorial Intro */}
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Private Conversation
            </p>

            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl">
              LET&apos;S
              <br />
              TALK.
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#8a8a8e]">
              Send me a message directly through the portfolio. I&apos;ll see it
              in my inbox and reply right here.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#111113] p-5">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                  Live Thread
                </span>
              </div>
              <p className="mt-2.5 text-xs leading-6 text-[#8a8a8e]">
                Messages refresh automatically every few seconds—no need to
                reload the page.
              </p>
            </div>
          </div>

          {/* Right Chat Window */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] lg:col-span-8">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#16161a] font-display text-xs font-bold text-white">
                  HR
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    Himesh Roy
                  </div>
                  <div className="text-[11px] text-[#8a8a8e]">
                    Direct Inbox
                  </div>
                </div>
              </div>

              <span className="rounded-full border border-white/10 bg-[#050505] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#a1a1aa]">
                {messages.length} {messages.length === 1 ? "msg" : "msgs"}
              </span>
            </div>

            {/* Scrollable Messages */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="relative max-h-[540px] min-h-[360px] overflow-y-auto scroll-smooth p-5 sm:p-6"
            >
              {loading ? (
                <div className="flex h-[300px] items-center justify-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  <p className="text-sm text-[#8a8a8e]">
                    Loading conversation...
                  </p>
                </div>
              ) : messages.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-[300px] flex-col items-center justify-center text-center"
                >
                  <p className="font-display text-base font-bold text-white">
                    No messages yet
                  </p>
                  <p className="mt-1.5 max-w-xs text-xs leading-6 text-[#8a8a8e]">
                    Say hello or share what you&apos;re working on to start the
                    conversation.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => {
                    const isVisitor =
                      !message.isBot && message.senderId === currentUserId;
                    const isAdmin =
                      !message.isBot && message.senderId !== currentUserId;

                    return (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 24,
                          delay: Math.min(index * 0.03, 0.18),
                        }}
                        className={`flex ${
                          isVisitor ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`flex max-w-[85%] flex-col sm:max-w-[75%] ${
                            isVisitor ? "items-end" : "items-start"
                          }`}
                        >
                          <span className="mb-1 px-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a8a8e]">
                            {message.isBot
                              ? "Himesh's Assistant"
                              : isAdmin
                                ? "Himesh"
                                : "You"}
                          </span>

                          <div
                            className={`rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap break-words ${
                              isVisitor
                                ? "rounded-br-sm bg-white text-[#050505]"
                                : message.isBot
                                  ? "rounded-bl-sm border border-dashed border-white/20 bg-[#141418] text-[#e4e4e7]"
                                  : "rounded-bl-sm border border-white/15 bg-[#16161a] text-white"
                            }`}
                          >
                            {message.content}
                          </div>

                          <span className="mt-1 px-1 font-mono text-[10px] text-[#71717a]">
                            {new Date(message.createdAt).toLocaleTimeString(
                              "en-IN",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                                timeZone: "Asia/Kolkata",
                              },
                            )}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              <div ref={messagesEndRef} aria-hidden="true" className="h-px" />

              {showNewMessage && (
                <div className="sticky bottom-3 mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={scrollToBottom}
                    className="rounded-full border border-white/20 bg-[#111113]/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md transition-transform hover:-translate-y-0.5"
                  >
                    New message ↓
                  </button>
                </div>
              )}
            </div>

            {/* Composer */}
            <div className="border-t border-white/10 bg-[#0a0a0c] p-5 sm:p-6">
              <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={sending}
                maxLength={2000}
                rows={3}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#111113] p-4 text-sm text-white placeholder-[#71717a] outline-none transition-colors focus:border-white/30 disabled:opacity-50"
              />

              <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-[11px] text-[#71717a]">
                  <span className="font-mono">{content.length}/2000</span>
                  <span className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline">
                    Enter to send · Shift + Enter for new line
                  </span>
                </div>

                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={sending || !content.trim()}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span>{sending ? "Sending..." : "Send"}</span>
                  <span>→</span>
                </button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="mt-4 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-xs text-red-300"
                >
                  {error}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}