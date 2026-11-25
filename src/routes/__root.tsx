import { createRootRoute, Link, Outlet } from "@tanstack/solid-router";
import type { JSX } from "solid-js";

function RootLayout(): JSX.Element {
  return (
    <div class="min-h-screen">
      <header class="flex gap-6 border-b p-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>

      <Outlet />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout
});
