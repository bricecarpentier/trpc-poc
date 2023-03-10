import { identity } from "fp-ts/lib/function.js";
import { string, struct } from "io-ts/lib/Codec.js";
import { UserId, UserIdCodec } from "./UserId.js";

export type User = {
  id: UserId;
  name: string;
};
export const User = identity<User>;
export const UserCodec = struct({
  id: UserIdCodec,
  name: string,
});
