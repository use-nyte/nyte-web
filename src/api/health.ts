/**
 * Response returned by Nyte Server's unversioned liveness endpoint.
 */
export interface ServerLiveness {
  status: "ok";
}

/**
 * Checks whether the Nyte Server process is running.
 *
 * Development requests are forwarded by the Vite proxy. This is a bootstrap
 * connectivity check, not the final versioned client API or a readiness test.
 */
export async function getServerLiveness(): Promise<ServerLiveness> {
  const response = await fetch("/health/live", {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Nyte Server liveness request failed with HTTP ${response.status}`);
  }

  const data: unknown = await response.json();

  if (typeof data !== "object" || data === null || !("status" in data) || data.status !== "ok") {
    throw new Error("Nyte Server returned an invalid liveness response");
  }

  return { status: "ok" };
}
