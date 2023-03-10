import { findFirst } from "fp-ts/lib/Array.js";
import { pipe } from "fp-ts/lib/function.js";
import { string } from "io-ts/lib/Decoder.js";
import { User, UserId } from "../domain";
import { InputFromDecoder } from "../InputFromDecoder.js";
import { RuntimeConfig } from "../RuntimeConfig.js";

const users = [
  User({ id: UserId("user-1"), name: "Brice" }),
  User({ id: UserId("user-2"), name: "Marine" }),
];

export const GetUserById = (t: RuntimeConfig) =>
  t.procedure.input(InputFromDecoder(string)).query((req) =>
    pipe(
      users,
      findFirst((u) => u.id === req.input)
    )
  );
