/** Israeli phone number: mobile (05x/07x) or landline area codes. */
export const ISRAELI_PHONE_RE = /^0(5\d|7\d|[2-4]|[8-9])\d{7}$/;

/** Strips spaces and dashes so "050-123-4567" validates like "0501234567". */
export function normalizePhone(raw: string): string {
  return raw.replace(/[\s-]/g, "");
}
