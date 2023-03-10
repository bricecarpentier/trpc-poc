import { findFirst } from "fp-ts/lib/Array.js";
import { pipe } from "fp-ts/lib/function.js";
import { User, UserId, UserIdCodec } from "../domain/index.js";
import { InputFromDecoder as ifc } from "../InputFromDecoder.js";
import { RuntimeConfig } from "../RuntimeConfig.js";

const users = [
  User({ id: UserId("user-1"), name: "Brice" }),
  User({ id: UserId("user-2"), name: "Marine" }),
];

export const GetUserById = (t: RuntimeConfig) =>
  t.procedure.input(ifc(UserIdCodec)).query((req) =>
    pipe(
      users,
      findFirst((u) => u.id === req.input)
    )
  );
