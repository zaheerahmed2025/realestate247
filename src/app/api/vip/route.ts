import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * VIP Buyer's List lead capture endpoint.
 * Validates input, stores the lead in SQLite via Prisma.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const phone = String(body?.phone ?? "").trim();
    const buyerType = String(body?.buyerType ?? "").trim();
    const areasRaw = Array.isArray(body?.areas) ? body.areas : [];
    const areas = areasRaw.map((a: unknown) => String(a)).filter(Boolean);

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid name and email." },
        { status: 400 }
      );
    }

    // Persist to SQLite so the lead is never lost.
    const { db } = await import("@/lib/db");
    const lead = await db.vipLead.create({
      data: { name, email, phone, buyerType, areas: areas.join(", ") },
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error("[api/vip] lead capture failed", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
