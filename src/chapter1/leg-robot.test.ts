import { TestData, assertNearlyEquals } from "../../lib/test.ts";
import { calcForwardThree } from "./leg-robot.ts";

const SIGNIFICANT_DIGIT = 4;

const testDatas: TestData<typeof calcForwardThree>[] = [
  {
    args: [1, 1, 0, 0, 0],
    expected: [0, -2, 0],
  },
  { args: [1, 1, Math.PI / 2, -Math.PI / 2, 0], expected: [1, -1, 0] },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertNearlyEquals(
        calcForwardThree(...t.args),
        t.expected,
        SIGNIFICANT_DIGIT,
      );
    },
  });
});