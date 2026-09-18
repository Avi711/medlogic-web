import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

/*
  Hit daily by the Vercel cron in vercel.json. A Supabase free-tier project
  pauses after seven days without traffic, and a paused one silently fails
  every lead insert and the whole of /admin. One trivial query a day keeps
  it awake.

  Vercel sends `Authorization: Bearer $CRON_SECRET` with each cron call;
  anything else is rejected so the route is not a free public DB ping.
*/

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ ok: false, error: "no-database" }, { status: 503 });
  }

  try {
    await db.execute(sql`select 1`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("keepalive: database ping failed", error);
    return NextResponse.json({ ok: false, error: "db-unreachable" }, { status: 503 });
  }
}
