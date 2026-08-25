import { redirect } from "next/navigation";
import { auth } from "@/auth";

type RedirectPageProps = {
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
};

export default async function AuthRedirectPage({
  searchParams,
}: RedirectPageProps) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const adminEmail =
    process.env.ADMIN_EMAIL?.trim().toLowerCase();

  const userEmail =
    session.user.email.trim().toLowerCase();

  if (adminEmail && userEmail === adminEmail) {
    redirect("/admin/messages");
  }

  const { callbackUrl } = await searchParams;

  if (
    callbackUrl &&
    callbackUrl.startsWith("/") &&
    !callbackUrl.startsWith("//")
  ) {
    redirect(callbackUrl);
  }

  redirect("/messages");
}