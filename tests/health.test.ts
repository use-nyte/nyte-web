import { afterEach, expect, test, vi } from "vitest";
import { getServerLiveness } from "../src/api/health";

afterEach((): void => {
  vi.unstubAllGlobals();
});

test("returns a typed liveness response", async (): Promise<void> => {
  const fetchMock = vi.fn().mockResolvedValue(
    new Response(JSON.stringify({ status: "ok" }), {
      status: 200,
      headers: { "content-type": "application/json" }
    })
  );

  vi.stubGlobal("fetch", fetchMock);

  await expect(getServerLiveness()).resolves.toEqual({ status: "ok" });
  expect(fetchMock).toHaveBeenCalledWith("/health/live", { cache: "no-store" });
});

test("rejects non-successful HTTP responses", async (): Promise<void> => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 503 })));

  await expect(getServerLiveness()).rejects.toThrow("HTTP 503");
});

test("rejects when the server cannot be reached", async (): Promise<void> => {
  const error = new TypeError("Failed to fetch");
  vi.stubGlobal("fetch", vi.fn().mockRejectedValue(error));

  await expect(getServerLiveness()).rejects.toBe(error);
});

test("rejects responses that do not match the expected contract", async (): Promise<void> => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ status: "unknown" }))));

  await expect(getServerLiveness()).rejects.toThrow("invalid liveness response");
});
