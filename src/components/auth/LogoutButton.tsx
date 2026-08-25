"use client";

import { signOut } from "next-auth/react";

type LogoutButtonProps = {
  label?: string;
};

export function LogoutButton({
  label = "Log out",
}: LogoutButtonProps) {
  return (
    <button
      type="button"
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
      className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] transition-all duration-300 hover:translate-x-1"
      style={{
        color: "var(--muted)",
      }}
    >
      <span>{label}</span>

      <span
        style={{
          color: "var(--accent)",
        }}
      >
        ↗
      </span>
    </button>
  );
}