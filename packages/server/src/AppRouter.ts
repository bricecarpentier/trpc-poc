import { GetUserById } from "./procedures/GetUserById.js";
import { RuntimeConfig } from "./RuntimeConfig.js";

const t = RuntimeConfig();
const { router } = t;
export const AppRouter = () =>
  router({
    GetUserById: GetUserById(t),
  });

export type AppRouter = ReturnType<typeof AppRouter>;
