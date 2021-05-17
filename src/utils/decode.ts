import * as t from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";

export function exhaustCheck(_unused: never): never {
  throw new Error("Exhause switch error");
}
export function decode<T>(
  value: any,
  type: t.Type<T>,
  errorMsg: string = "Decode error"
): Promise<T> {
  const validation = type.decode(value);

  switch (validation._tag) {
    case "Left":
      const errors = PathReporter.report(validation);
      console.warn(errors);
      return Promise.reject(new Error(errorMsg));

    case "Right":
      return Promise.resolve(validation.right);

    default:
      return exhaustCheck(validation);
  }
}
