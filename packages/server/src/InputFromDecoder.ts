import type { Decoder } from "io-ts/lib/Decoder.js";
import { isRight } from "fp-ts/lib/Either.js";

export const InputFromDecoder =
  <A extends any>(decoder: Decoder<unknown, A>) =>
  (input: unknown) => {
    const decoded = decoder.decode(input);
    if (isRight(decoded)) {
      return decoded.right;
    }
    throw decoded.left;
  };
