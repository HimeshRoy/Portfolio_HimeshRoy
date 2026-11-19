"use client";

import { signOut } from "next-auth/react";

type LogoutButtonProps = {
  label?: string;
};

export function LogoutButton({ label = "Log out" }: LogoutButtonProps) {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a1a1aa] transition-all duration-200 hover:border-white/35 hover:text-white"
    >
      <span>{label}</span>
      <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        ↗
      </span>
    </button>
  );
}
