import { createFileRoute } from "@tanstack/solid-router";
import type { JSX } from "solid-js";

function About(): JSX.Element {
  return (
    <main class="p-6">
      <h1 class="text-3xl font-bold">About Nyte</h1>
      <p>TanStack Router is working.</p>
    </main>
  );
}

export const Route = createFileRoute("/about")({
  component: About
});
