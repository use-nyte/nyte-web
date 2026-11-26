---
title: Nyte Web
sidebar_position: 1
slug: /
---

# Nyte Web

Nyte Web is the web application for the Nyte media platform.

The application uses SolidJS, TanStack Router, Vite, and the shared `nyte-ui` web components.

## Local development

Start Nyte Server on its default address, `127.0.0.1:52470`. In the web checkout, install dependencies with
`pnpm install --frozen-lockfile` and start the development server with `pnpm dev`. Open `http://localhost:52471`.

The home page checks `/health/live` through the Vite development proxy. To exercise recovery, stop Nyte Server,
reload the home page, then restart Nyte Server and select **Retry connection**. The online state indicates that
the server process responds to HTTP requests.

[View source on GitHub](https://github.com/use-nyte/nyte-web).
