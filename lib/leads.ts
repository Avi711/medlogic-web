import { desc, eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { leads, type Lead, type NewLead } from "@/lib/db/schema";

/**
 * All lead access. Server-only: these run with full database rights, so callers
 * must have verified the operator first (lib/admin-auth) for anything but the
 * insert, which is the public form's own write.
 */

export type { Lead };

const PAGE_SIZE = 300;

/** True when a database is configured at all. */
export function leadsConfigured(): boolean {
  return getDb() !== null;
}

export async function insertLead(lead: NewLead): Promise<void> {
  const db = getDb();
  if (!db) return;
  await db.insert(leads).values(lead);
}

export async function listLeads(): Promise<Lead[]> {
  const db = getDb();
  if (!db) return [];
  return db.select().from(leads).orderBy(desc(leads.createdAt)).limit(PAGE_SIZE);
}

export async function setLeadCalled(id: number, called: boolean): Promise<void> {
  const db = getDb();
  if (!db) return;
  await db.update(leads).set({ called }).where(eq(leads.id, id));
}
