import { createFileRoute } from "@tanstack/solid-router";
import { Button } from "@use-nyte/nyte-ui/web";
import { createSignal } from "solid-js";
import type { JSX } from "solid-js";

function Home(): JSX.Element {
  const [count, setCount] = createSignal(0);

  return (
    <main class="mx-auto flex max-w-3xl flex-col gap-6 p-6">
      <h1 class="text-4xl font-bold">nyte</h1>

      <p>SolidJS, TanStack Router, and nyte-ui are connected.</p>

      <p>Button clicks: {count()}</p>

      <Button label="Test UI component" onClick={() => setCount((previous) => previous + 1)} />
    </main>
  );
}

export const Route = createFileRoute("/")({
  component: Home
});
