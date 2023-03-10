import { initTRPC } from "@trpc/server";

export const RuntimeConfig = () => initTRPC.create();
export type RuntimeConfig = ReturnType<typeof RuntimeConfig>;
