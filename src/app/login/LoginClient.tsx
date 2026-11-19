"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginClient() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    try {
      setLoading(true);
      setError("");

      await signIn("google", {
        callbackUrl: callbackUrl || "/messages",
      });
    } catch (err) {
      console.error("LOGIN_ERROR:", err);
      setError("Unable to sign in. Please try again.");
      setLoading(false);
    }
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 pb-20 pt-28 text-white sm:px-10 lg:px-16">
      {/* Subtle ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e] transition-colors hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Contact</span>
          </Link>
        </div>

        {/* Auth Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] p-7 sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Welcome · Direct Inbox
            </p>

            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl">
              LET&apos;S
              <br />
              CONNECT.
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#8a8a8e]">
              Sign in with Google to start a private conversation and receive
              replies directly in your inbox.
            </p>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="mt-8 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#050505] border-t-transparent" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.24-.92 2.29-1.96 3v2.49h3.17c1.86-1.71 2.93-4.23 2.93-7.21 0-.42-.04-.85-.11-1.26h-.12Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.17 22c2.65 0 4.88-.88 6.51-2.38l-3.17-2.49c-.88.59-2 .94-3.34.94-2.57 0-4.74-1.73-5.52-4.06H3.38v2.57A9.83 9.83 0 0 0 12.17 22Z"
                    />
                    <path
                      fill="currentColor"
                      d="M6.65 14.01a5.9 5.9 0 0 1 0-4.02V7.42H3.38a9.84 9.84 0 0 0 0 9.16l3.27-2.57Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.17 5.93c1.44 0 2.74.5 3.76 1.47l2.82-2.82C17.04 2.99 14.82 2 12.17 2a9.83 9.83 0 0 0-8.79 5.42l3.27 2.57c.78-2.33 2.95-4.06 5.52-4.06Z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            {error && (
              <div
                role="alert"
                className="mt-4 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-xs text-red-300"
              >
                {error}
              </div>
            )}

            <p className="mt-6 border-t border-white/10 pt-5 text-[11px] leading-5 text-[#71717a]">
              Your account is only used to identify your private conversation.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
