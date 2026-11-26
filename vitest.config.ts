import { defineConfig } from "vitest/config";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    conditions: ["browser", "development"]
  },
  test: {
    environment: "jsdom",
    include: ["tests/**/*.{test,spec}.{ts,tsx}"],
    server: {
      deps: {
        inline: ["@use-nyte/nyte-ui", "@use-nyte/ui-web"]
      }
    },
    restoreMocks: true
  }
});
