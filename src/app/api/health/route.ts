import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sql } from "drizzle-orm";

export async function GET() {
  try {
    await db.execute(sql`SELECT 1`);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
