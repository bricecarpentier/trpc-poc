import { createHTTPServer } from "@trpc/server/adapters/standalone";
import type { AppRouter } from "./AppRouter.js";

export const Server = (router: AppRouter) => createHTTPServer({ router });
