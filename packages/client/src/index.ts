import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { type AppRouter, UserId } from "@brice/trpc-test-server";
import { pipe } from "fp-ts/lib/function.js";
import {
  tryCatch,
  map as teMap,
  toUnion as teToUnion,
} from "fp-ts/lib/TaskEither.js";
import { fold as oFold } from "fp-ts/lib/Option.js";
// Notice the <AppRouter> generic here.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

const msg = await pipe(
  tryCatch(
    () => trpc.GetUserById.query(UserId("user-1")),
    (reason) => `something bad occured: ${reason}`
  ),
  teMap(
    oFold(
      () => "no user found",
      (user) => `found user with name ${user.name} [${user.id}]`
    )
  ),
  teToUnion
)();
console.log(msg);
