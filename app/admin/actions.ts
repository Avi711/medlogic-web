"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createAdminSession,
  destroyAdminSession,
  isAdmin,
  verifyPassword,
} from "@/lib/admin-auth";
import { setLeadCalled } from "@/lib/leads";

/**
 * Every action here is a POST endpoint reachable by anyone who can replay its
 * id — the page guard does not protect them. Each one re-checks the session.
 */

/** Slows naive password guessing. Real rate limiting belongs at the edge/WAF. */
const FAILED_LOGIN_DELAY_MS = 600;

export type LoginState = { error?: string };

export async function login(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");

  if (!verifyPassword(password)) {
    await new Promise((resolve) => setTimeout(resolve, FAILED_LOGIN_DELAY_MS));
    return { error: "סיסמה שגויה" };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await destroyAdminSession();
  redirect("/admin/login");
}

export async function toggleCalled(formData: FormData): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");

  const id = Number(formData.get("id"));
  const called = formData.get("called") === "true";
  if (!Number.isInteger(id)) return;

  await setLeadCalled(id, called);
  revalidatePath("/admin");
}
