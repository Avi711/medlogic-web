import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Single-operator authentication for /admin.
 *
 * Stateless: the cookie carries an expiry plus an HMAC of that expiry keyed by
 * ADMIN_PASSWORD itself. Nothing is stored server-side, and changing the
 * password invalidates every existing session for free.
 *
 * The admin area holds customers' names and phone numbers, so if ADMIN_PASSWORD
 * is unset the whole area is treated as disabled rather than open — an
 * unconfigured deployment must never serve the lead list.
 */

const COOKIE = "medlogic_admin";
const SESSION_HOURS = 12;

/** Constant-time compare of two UTF-8 strings of any length. */
function safeEqual(a: string, b: string): boolean {
  // Hashing first gives both sides a fixed 32-byte length, so timingSafeEqual
  // never throws on a length mismatch and length itself is not a side channel.
  const ha = createHmac("sha256", "cmp").update(a).digest();
  const hb = createHmac("sha256", "cmp").update(b).digest();
  return timingSafeEqual(ha, hb);
}

function sign(expiresAt: number, secret: string): string {
  return createHmac("sha256", secret).update(String(expiresAt)).digest("hex");
}

/** The configured password, or null when the admin area is disabled. */
export function adminPassword(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  return password && password.length > 0 ? password : null;
}

export function verifyPassword(candidate: string): boolean {
  const password = adminPassword();
  return password !== null && safeEqual(candidate, password);
}

export async function createAdminSession(): Promise<void> {
  const password = adminPassword();
  if (!password) return;

  const expiresAt = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
  const store = await cookies();
  store.set(COOKIE, `${expiresAt}.${sign(expiresAt, password)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: SESSION_HOURS * 60 * 60,
  });
}

export async function destroyAdminSession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}

/**
 * True only for a live, correctly signed session. Every server action must call
 * this itself: an action is a POST endpoint reachable by anyone who knows its
 * id, so guarding only the page that renders it protects nothing.
 */
export async function isAdmin(): Promise<boolean> {
  const password = adminPassword();
  if (!password) return false;

  const raw = (await cookies()).get(COOKIE)?.value;
  if (!raw) return false;

  const [expiresAt, signature] = raw.split(".");
  const expiry = Number(expiresAt);
  if (!Number.isFinite(expiry) || expiry < Date.now()) return false;
  if (!signature) return false;

  return safeEqual(signature, sign(expiry, password));
}
