import { createFileRoute } from "@tanstack/solid-router";
import { Button } from "@use-nyte/nyte-ui/web";
import { createResource, createSignal, Match, Switch } from "solid-js";
import type { JSX } from "solid-js";
import { getServerLiveness } from "../api/health";

function Home(): JSX.Element {
  const [count, setCount] = createSignal(0);
  const [health, { refetch }] = createResource(getServerLiveness);

  return (
    <main class="mx-auto flex max-w-3xl flex-col gap-6 p-6">
      <h1 class="text-4xl font-bold">nyte</h1>

      <p>SolidJS, TanStack Router, and nyte-ui are connected.</p>

      <p>Button clicks: {count()}</p>

      <Button label="Test UI component" onClick={() => setCount((previous) => previous + 1)} />

      <section aria-label="Server connection">
        <h2 class="text-xl font-semibold">Server connection</h2>

        <Switch fallback={<p>Connection status unavailable.</p>}>
          <Match when={health.loading}>
            <p role="status">Checking Nyte Server...</p>
          </Match>
          <Match when={health.error}>
            <p role="alert">Nyte Server is unreachable or returned an invalid response.</p>
            <Button label="Retry connection" onClick={() => void refetch()} />
          </Match>
          <Match when={health()?.status === "ok"}>
            <p role="status">Nyte Server is online.</p>
          </Match>
        </Switch>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/")({
  component: Home
});
