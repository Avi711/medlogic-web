import { notFound, redirect } from "next/navigation";
import { adminPassword, isAdmin } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";

export default async function AdminLoginPage() {
  // With no password configured the admin area does not exist at all, rather
  // than existing with an empty password.
  if (!adminPassword()) notFound();
  if (await isAdmin()) redirect("/admin");

  return (
    <main className="flex min-h-dvh items-center justify-center p-5">
      <LoginForm />
    </main>
  );
}
