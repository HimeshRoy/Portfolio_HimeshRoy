"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginClient() {
  const searchParams = useSearchParams();

  const callbackUrl =
    searchParams.get("callbackUrl");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    try {
      setLoading(true);
      setError("");

      await signIn("google", {
        callbackUrl: callbackUrl || "/messages",
      });
    } catch (error) {
      console.error("LOGIN_ERROR:", error);

      setError(
        "Unable to sign in. Please try again.",
      );

      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen px-6 pb-24 pt-32 sm:px-10 sm:pb-32 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: "var(--accent)",
              }}
            />

            <span
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Welcome
            </span>
          </div>

          <h1
            className="mt-8 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl"
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
              connect.
            </span>
          </h1>

          <p
            className="mt-6 max-w-md text-sm leading-7"
            style={{
              color: "var(--muted)",
            }}
          >
            Sign in to start a private
            conversation with me.
          </p>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="mt-10 flex w-full items-center justify-center gap-4 rounded-xl border px-6 py-5 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
              backgroundColor: "var(--surface)",
            }}
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Continue with Google</span>
                <span
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  →
                </span>
              </>
            )}
          </button>

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
            className="mt-6 text-[9px] uppercase tracking-[0.2em]"
            style={{
              color: "var(--muted)",
            }}
          >
            Your account is only used to
            identify your conversation.
          </p>
        </div>
      </div>
    </main>
  );
}