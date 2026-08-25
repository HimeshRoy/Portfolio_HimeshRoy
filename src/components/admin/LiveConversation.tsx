"use client";

import { useEffect, useState } from "react";

import { MessageBubbles } from "@/components/admin/MessageBubbles";
import { ReplyBox } from "@/components/admin/ReplyBox";

type Message = {
  id: string;
  content: string;
  isBot: boolean;
  senderId: string | null;
  createdAt: string;
  displayTime: string;
};

type LiveConversationProps = {
  conversationId: string;
  visitorId: string;
  initialMessages: Message[];
};

export function LiveConversation({
  conversationId,
  visitorId,
  initialMessages,
}: LiveConversationProps) {
  const [messages, setMessages] =
    useState<Message[]>(initialMessages);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch(
          `/api/messages?conversationId=${conversationId}`,
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

        const updatedMessages: Message[] =
          data.messages.map(
            (message: Message) => ({
              id: message.id,
              content: message.content,
              isBot: message.isBot,
              senderId: message.senderId,
              createdAt: message.createdAt,
              displayTime:
                message.displayTime ??
                new Date(
                  message.createdAt,
                ).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }),
            }),
          );

        setMessages((current) => {
          const currentIds = new Set(
            current.map(
              (message) => message.id,
            ),
          );

          const hasNewMessages =
            updatedMessages.some(
              (message) =>
                !currentIds.has(message.id),
            );

          if (!hasNewMessages) {
            return current;
          }

          return updatedMessages;
        });
      } catch {
        // Ignore temporary polling errors.
      }
    };

    const interval = setInterval(
      loadMessages,
      2000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [conversationId]);

  return (
    <>
      {/* Messages */}

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
        <MessageBubbles
          messages={messages}
          visitorId={visitorId}
        />
      )}

      {/* Reply */}

      <div
        className="mt-8 border-t pt-8"
        style={{
          borderColor: "var(--border)",
        }}
      >
        <div
          className="mb-4 text-[9px] uppercase tracking-[0.25em]"
          style={{
            color: "var(--accent)",
          }}
        >
          Reply as Himesh
        </div>

        <ReplyBox
          conversationId={conversationId}
        />
      </div>
    </>
  );
}