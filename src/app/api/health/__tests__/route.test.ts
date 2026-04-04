import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("@/lib/db", () => ({
  db: {
    execute: vi.fn(),
  },
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("GET /api/health", () => {
  it("returns { ok: true } and 200 when the DB is reachable", async () => {
    const { db } = await import("@/lib/db");
    vi.mocked(db.execute).mockResolvedValueOnce([{ "?column?": 1 }] as any);

    const { GET } = await import("../route");
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ ok: true });
  });

  it("returns { ok: false } and 500 when the DB throws", async () => {
    const { db } = await import("@/lib/db");
    vi.mocked(db.execute).mockRejectedValueOnce(
      new Error("connection refused")
    );

    const { GET } = await import("../route");
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({ ok: false, error: "connection refused" });
  });
});
