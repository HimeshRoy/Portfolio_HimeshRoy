"use client";

import { useState } from "react";

type ReplyBoxProps = {
  conversationId: string;
};

export function ReplyBox({
  conversationId,
}: ReplyBoxProps) {
  const [content, setContent] =
    useState("");

  const [sending, setSending] =
    useState(false);

  const [error, setError] =
    useState("");

  async function sendReply() {
    const trimmed =
      content.trim();

    if (!trimmed || sending) {
      return;
    }

    setSending(true);
    setError("");

    try {
      const response =
        await fetch(
          `/api/admin/messages/${conversationId}`,
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
            "Failed to send reply",
        );
      }

      setContent("");

      /*
       * Reload so the new Himesh message
       * appears immediately and the server
       * gives us the latest conversation.
       */
      window.location.reload();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to send reply.",
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

      sendReply();
    }
  }

  return (
    <div
      className="border-t pt-8"
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
        Reply as Himesh
      </span>

      <textarea
        value={content}
        onChange={(event) =>
          setContent(event.target.value)
        }
        onKeyDown={handleKeyDown}
        disabled={sending}
        maxLength={2000}
        rows={5}
        placeholder="Write your reply..."
        className="mt-5 w-full resize-none rounded-lg border p-4 text-sm outline-none"
        style={{
          borderColor: "var(--border)",
          backgroundColor:
            "var(--background)",
          color: "var(--foreground)",
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
          onClick={sendReply}
          disabled={
            sending || !content.trim()
          }
          className="inline-flex items-center gap-4 rounded-lg border px-5 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:translate-x-1 disabled:cursor-not-allowed disabled:opacity-40"
          style={{
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        >
          <span>
            {sending
              ? "Sending..."
              : "Send reply"}
          </span>

          <span
            style={{
              color: "var(--accent)",
            }}
          >
            →
          </span>
        </button>
      </div>

      {error && (
        <p
          className="mt-4 text-xs"
          style={{
            color: "var(--accent)",
          }}
        >
          {error}
        </p>
      )}

      <p
        className="mt-4 text-[9px] uppercase tracking-[0.2em]"
        style={{
          color: "var(--muted)",
        }}
      >
        Enter to send · Shift + Enter for
        new line
      </p>
    </div>
  );
}