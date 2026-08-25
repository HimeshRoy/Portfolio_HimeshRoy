"use client";

import { motion } from "framer-motion";

type AdminMessage = {
  id: string;
  content: string;
  isBot: boolean;
  senderId: string | null;
  createdAt: string;
  displayTime: string;
};

type MessageBubblesProps = {
  messages: AdminMessage[];
  visitorId: string;
};

export function MessageBubbles({
  messages,
  visitorId,
}: MessageBubblesProps) {
  return (
    <div className="space-y-5">
      {messages.map((message, index) => {
        const isVisitor =
          !message.isBot &&
          message.senderId === visitorId;

        const isHimesh =
          !message.isBot &&
          message.senderId !== visitorId;

        return (
          <motion.div
            key={message.id}
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
              delay: Math.min(index * 0.04, 0.2),
            }}
            className={`flex ${
              isHimesh
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-[85%] flex-col sm:max-w-[70%] ${
                isHimesh
                  ? "items-end"
                  : "items-start"
              }`}
            >
              {/* Sender */}

              <div
                className={`mb-1.5 px-2 text-[8px] uppercase tracking-[0.22em] ${
                  isHimesh
                    ? "text-right"
                    : "text-left"
                }`}
                style={{
                  color: message.isBot
                    ? "var(--accent)"
                    : isHimesh
                    ? "var(--primary)"
                    : "var(--muted)",
                }}
              >
                {message.isBot
                  ? "Himesh's Assistant"
                  : isHimesh
                  ? "Himesh"
                  : "Visitor"}
              </div>

              {/* Chat bubble */}

              <motion.div
                whileHover={{
                  y: -1,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`relative px-5 py-3.5 ${
                  isHimesh
                    ? "rounded-[22px] rounded-br-[6px]"
                    : "rounded-[22px] rounded-bl-[6px]"
                }`}
                style={{
                  background: message.isBot
                    ? "color-mix(in srgb, var(--surface) 90%, var(--accent))"
                    : isHimesh
                    ? "var(--accent)"
                    : "var(--surface)",

                  border: message.isBot
                    ? "1px solid color-mix(in srgb, var(--accent) 35%, transparent)"
                    : isHimesh
                    ? "1px solid color-mix(in srgb, var(--accent) 80%, transparent)"
                    : "1px solid var(--border)",

                  boxShadow: isHimesh
                    ? "0 8px 30px color-mix(in srgb, var(--accent) 18%, transparent)"
                    : "0 6px 24px color-mix(in srgb, var(--background) 12%, transparent)",
                }}
              >
                {/* Bubble tail */}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 h-3 w-3 ${
                    isHimesh
                      ? "right-[-5px]"
                      : "left-[-5px]"
                  }`}
                  style={{
                    background:
                      message.isBot
                        ? "var(--surface)"
                        : isHimesh
                        ? "var(--accent)"
                        : "var(--surface)",

                    clipPath: isHimesh
                      ? "polygon(0 0, 100% 100%, 0 100%)"
                      : "polygon(0 100%, 100% 0, 100% 100%)",
                  }}
                />

                <p
                  className="text-sm leading-6"
                  style={{
                    color: isHimesh
                      ? "var(--background)"
                      : "var(--foreground)",
                  }}
                >
                  {message.content}
                </p>
              </motion.div>

              {/* Time */}

              <div
                className={`mt-1.5 px-2 text-[8px] ${
                  isHimesh
                    ? "text-right"
                    : "text-left"
                }`}
                style={{
                  color: "var(--muted)",
                }}
              >
                {message.displayTime}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}