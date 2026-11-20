"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const quickPrompts = [
  "What projects has Himesh built?",
  "What is his tech stack?",
  "Tell me about his experience",
  "How can I contact him?",
];

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hi! I'm Himesh's AI assistant. Ask me anything about his projects, skills, experience, or how to get in touch.",
  },
];

function AiMascotIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Antenna */}
      <line
        x1="16"
        y1="4"
        x2="16"
        y2="8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="3.5" r="1.8" fill="currentColor" />

      {/* Side Ears */}
      <rect x="3" y="13.5" width="2.5" height="6" rx="1.25" fill="currentColor" />
      <rect
        x="26.5"
        y="13.5"
        width="2.5"
        height="6"
        rx="1.25"
        fill="currentColor"
      />

      {/* Head */}
      <rect
        x="6.5"
        y="8.5"
        width="19"
        height="16.5"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* Visor */}
      <rect
        x="9.5"
        y="12.5"
        width="13"
        height="7"
        rx="3.5"
        fill="currentColor"
        fillOpacity="0.14"
      />

      {/* Eyes */}
      <circle cx="13" cy="16" r="1.6" fill="currentColor" />
      <circle cx="19" cy="16" r="1.6" fill="currentColor" />

      {/* Smile */}
      <path
        d="M13.5 21.8C14.3 22.5 17.7 22.5 18.5 21.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PortfolioChatbot() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Hide on private messaging / auth / admin routes
  const hidden =
    pathname.startsWith("/messages") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login");

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when clicking anywhere outside the chatbot widget
  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", handleOutsideClick);
  }, [open]);

  if (hidden) return null;

  async function sendMessage(textOverride?: string) {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    if (!textOverride) setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I couldn't process that right now. Try reaching Himesh at /contact.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          role: "assistant",
          content:
            "Connection issue—please try again or email himeshroy.cse@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end sm:bottom-6 sm:right-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 flex h-[480px] max-h-[75dvh] w-[calc(100vw-2.5rem)] max-w-[370px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#0d0d0f] shadow-[0_24px_80px_rgba(0,0,0,0.85)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#111113] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#050505] text-white">
                  <AiMascotIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    AI Buddy
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#8a8a8e]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Online
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#8a8a8e] transition-colors hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Messages (scrollbar hidden) */}
            <div className="flex-1 space-y-3.5 overflow-y-auto p-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {messages.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-xs leading-6 whitespace-pre-wrap break-words sm:text-[13px] ${
                        isUser
                          ? "rounded-br-sm bg-white text-[#050505]"
                          : "rounded-bl-sm border border-white/10 bg-[#16161a] text-[#e4e4e7]"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {/* Quick Prompts (only before first user message) */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="cursor-pointer rounded-full border border-white/15 bg-[#111113] px-3 py-1.5 text-left text-[11px] text-[#d4d4d8] transition-colors hover:border-white/35 hover:text-white"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/10 bg-[#16161a] px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70 [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70 [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70" />
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-[#0a0a0c] p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                maxLength={500}
                placeholder="Ask about Himesh..."
                className="flex-1 rounded-full border border-white/10 bg-[#111113] px-4 py-2.5 text-xs text-white placeholder-[#71717a] outline-none transition-colors focus:border-white/30 sm:text-sm"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-sm font-bold text-[#050505] transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
              >
                →
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Circular AI Mascot Button */}
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={open}
        className={`group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border shadow-[0_12px_40px_rgba(0,0,0,0.75)] transition-colors duration-200 ${
          open
            ? "border-white/20 bg-[#141418] text-white hover:border-white/40"
            : "border-white/25 bg-white text-[#050505] hover:bg-[#f4f4f5]"
        }`}
      >
        {/* Subtle online pulse dot when closed */}
        {!open && (
          <span className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-emerald-400" />
          </span>
        )}

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="text-base font-semibold leading-none"
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="mascot"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              <AiMascotIcon className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}