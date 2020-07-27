import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
// import { someFunction } from "./some-function.ts";

function target(arg: number): boolean {
  return arg > 0;
}
type Target = typeof target;
type TestData = [Parameters<Target>[0], ReturnType<Target>];
const testDatas: TestData[] = [
  [1, true],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(target(t[0]), t[1]);
    },
  });
});