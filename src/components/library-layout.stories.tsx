import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "@use-nyte/nyte-ui/web";
import type { JSX } from "solid-js";

function LibraryLayout(): JSX.Element {
  return (
    <section class="min-h-screen bg-slate-950 p-8 text-white">
      <header class="mb-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold">Media Library</h1>
        <Button label="Add media" />
      </header>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <article class="rounded-lg bg-slate-800 p-6">Movie A</article>
        <article class="rounded-lg bg-slate-800 p-6">Movie B</article>
      </div>
    </section>
  );
}

const meta = {
  title: "Layouts/Media Library",
  component: LibraryLayout
} satisfies Meta<typeof LibraryLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
