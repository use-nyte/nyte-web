import { fireEvent, render, screen } from "@solidjs/testing-library";
import { Button } from "@use-nyte/nyte-ui/web";
import type { JSX } from "solid-js";
import { expect, test, vi } from "vitest";

test("shared UI button responds to clicks", (): void => {
  const onClick = vi.fn();

  render((): JSX.Element => <Button label="Open library" onClick={onClick} />);

  const button = screen.getByRole("button", {
    name: "Open library"
  });

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledOnce();
});
