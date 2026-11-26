import { fireEvent, render, screen } from "@solidjs/testing-library";
import type { JSX } from "solid-js";
import { afterEach, expect, test, vi } from "vitest";
import { Route } from "../src/routes/index";

afterEach((): void => {
  vi.unstubAllGlobals();
});

test("shows the server connection status and recovers after a retry", async (): Promise<void> => {
  const fetchMock = vi
    .fn()
    .mockRejectedValueOnce(new TypeError("Failed to fetch"))
    .mockResolvedValueOnce(new Response(JSON.stringify({ status: "ok" })));
  vi.stubGlobal("fetch", fetchMock);

  const Home = Route.options.component;
  if (!Home) throw new Error("The home route has no component");

  render((): JSX.Element => <Home />);

  expect(screen.getByRole("status").textContent).toBe("Checking Nyte Server...");
  expect(await screen.findByRole("alert")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Retry connection" }));

  expect(await screen.findByText("Nyte Server is online.")).toBeTruthy();
  expect(screen.queryByRole("alert")).toBeNull();
  expect(fetchMock).toHaveBeenCalledTimes(2);

  fireEvent.click(screen.getByRole("button", { name: "Test UI component" }));
  expect(screen.getByText("Button clicks: 1")).toBeTruthy();
});
