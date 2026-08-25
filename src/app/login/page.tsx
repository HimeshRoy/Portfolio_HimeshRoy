import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center">
          <div
            className="text-xs uppercase tracking-[0.3em]"
            style={{
              color: "var(--muted)",
            }}
          >
            Loading...
          </div>
        </main>
      }
    >
      <LoginClient />
    </Suspense>
  );
}