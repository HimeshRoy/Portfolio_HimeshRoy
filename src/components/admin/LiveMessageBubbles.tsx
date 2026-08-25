"use client";

import { useEffect, useRef, useState } from "react";

import { MessageBubbles } from "@/components/admin/MessageBubbles";

type Message = {
  id: string;
  content: string;
  isBot: boolean;
  senderId: string | null;
  createdAt: string;
  displayTime: string;
};

type Props = {
  conversationId: string;
  initialMessages: Message[];
  visitorId: string;
};

export function LiveMessageBubbles({
  conversationId,
  initialMessages,
  visitorId,
}: Props) {
  const [messages, setMessages] =
    useState<Message[]>(initialMessages);

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
    shouldScrollRef.current = true;

    async function loadMessages() {
      try {
        const response = await fetch(
          `/api/admin/messages/${conversationId}`,
          {
            cache: "no-store",
          },
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (!Array.isArray(data.messages)) {
          return;
        }

        setMessages((current) => {
          if (
            data.messages.length ===
            current.length
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

          return data.messages;
        });
      } catch {}
    }

    loadMessages();

    const interval = setInterval(
      loadMessages,
      2000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [conversationId]);

  function handleScroll() {
    if (isNearBottom()) {
      setShowNewMessage(false);
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="max-h-[600px] overflow-y-auto scroll-smooth pr-1"
      >
        <MessageBubbles
          messages={messages}
          visitorId={visitorId}
        />

        <div
          ref={messagesEndRef}
          aria-hidden="true"
          className="h-px"
        />
      </div>

      {showNewMessage && (
        <button
          type="button"
          onClick={scrollToBottom}
          className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border px-4 py-2 text-[9px] uppercase tracking-[0.2em] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
          style={{
            borderColor: "var(--accent)",
            background:
              "color-mix(in srgb, var(--surface) 92%, var(--background))",
            color: "var(--foreground)",
          }}
        >
          New message ↓
        </button>
      )}
    </div>
  );
}