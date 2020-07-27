import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import type { TestData } from "../lib/test.ts";
import { forwardKinematicsTwo, backwardKinematicsTwo } from "./two-links.ts";

const testDatas: TestData<typeof forwardKinematicsTwo>[] = [
  {
    args: [0, 0, Math.PI, Math.PI],
    expected: [0, 0],
  },
  { args: [1, 1, 0, 0], expected: [2, 0] },
  { args: [1, 1, Math.PI / 2, 0], expected: [0, 2] },
  { args: [1, 1, Math.PI / 2, -Math.PI / 2], expected: [1, 1] },
  { args: [1, 1, Math.PI, -Math.PI / 2], expected: [-1, 1] },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(forwardKinematicsTwo(...t.args), t.expected);
    },
  });
});

const testDatas2: TestData<typeof backwardKinematicsTwo>[] = [
  {
    args: [0, 0, 0, 0],
    expected: [Math.PI, Math.PI],
  },
  { args: [1, 1, 2, 0], expected: [0, 0] },
];

testDatas2.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(backwardKinematicsTwo(...t.args), t.expected);
    },
  });
});