import { describe, it, expect, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";

vi.mock("@/lib/auth/server", () => ({
  auth: {
    api: {
      getSession: vi.fn(),
    },
  },
}));

afterEach(() => {
  vi.clearAllMocks();
  vi.resetModules();
});

describe("proxy", () => {
  it("redirects unauthenticated /dashboard to /sign-in", async () => {
    const { auth } = await import("@/lib/auth/server");
    vi.mocked(auth.api.getSession).mockResolvedValueOnce(null);

    const { proxy } = await import("../../proxy");
    const request = new NextRequest("http://localhost:3000/dashboard");
    const response = await proxy(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "http://localhost:3000/sign-in"
    );
  });

  it("redirects authenticated /sign-in to /dashboard", async () => {
    const { auth } = await import("@/lib/auth/server");
    vi.mocked(auth.api.getSession).mockResolvedValueOnce({
      user: { id: "u1", email: "test@example.com" },
      session: { id: "s1" },
    } as any);

    const { proxy } = await import("../../proxy");
    const request = new NextRequest("http://localhost:3000/sign-in");
    const response = await proxy(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "http://localhost:3000/dashboard"
    );
  });

  it("allows unauthenticated access to /sign-in", async () => {
    const { auth } = await import("@/lib/auth/server");
    vi.mocked(auth.api.getSession).mockResolvedValueOnce(null);

    const { proxy } = await import("../../proxy");
    const request = new NextRequest("http://localhost:3000/sign-in");
    const response = await proxy(request);

    expect(response.headers.get("location")).toBeNull();
  });

  it("allows authenticated access to /dashboard", async () => {
    const { auth } = await import("@/lib/auth/server");
    vi.mocked(auth.api.getSession).mockResolvedValueOnce({
      user: { id: "u1", email: "test@example.com" },
      session: { id: "s1" },
    } as any);

    const { proxy } = await import("../../proxy");
    const request = new NextRequest("http://localhost:3000/dashboard");
    const response = await proxy(request);

    expect(response.headers.get("location")).toBeNull();
  });
});
