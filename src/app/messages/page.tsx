import { redirect } from "next/navigation";

import { auth } from "@/auth";
import MessagesClient from "./MessagesClient";

export default async function MessagesPage() {
  const session = await auth();

  /*
   * User must be logged in.
   */
  if (!session?.user?.email) {
    redirect("/login?callbackUrl=/messages");
  }

  const adminEmail =
    process.env.ADMIN_EMAIL
      ?.trim()
      .toLowerCase();

  const userEmail =
    session.user.email
      .trim()
      .toLowerCase();

  /*
   * Admin must never see the visitor
   * messaging interface.
   */
  if (
    adminEmail &&
    userEmail === adminEmail
  ) {
    redirect("/admin/messages");
  }

  /*
   * Normal visitor.
   */
  return <MessagesClient />;
}