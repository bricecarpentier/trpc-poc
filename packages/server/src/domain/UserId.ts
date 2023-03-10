import { imap, string } from "io-ts/lib/Codec.js";
import { pipe } from "fp-ts/lib/function.js";

export interface UserIdBrand {
  readonly _brand: unique symbol;
}
export type UserId = string & UserIdBrand;

export const UserId = (v: string) => v as UserId;
export const UserIdCodec = pipe(string, imap(UserId, String));
