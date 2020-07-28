import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";

export type TestData<T extends (...args: any) => any> = {
  args: Parameters<T>;
  argsAfter?: Parameters<T>[0];
  expected: ReturnType<T>;
};
function round(n: number, sigDigit: number): number {
  return Math.round(n * sigDigit) / sigDigit;
}
export function assertNearlyEquals(
  a: number | number[],
  b: typeof a,
  sigDigit: number,
) {
  if (typeof a === "number") {
    return assertEquals(round(a, sigDigit), round(b as number, sigDigit));
  } else {
    b = b as number[];
    return assertEquals(
      a.map((aa) => round(aa, sigDigit)),
      b.map((bb) => round(bb, sigDigit)),
    );
  }
}