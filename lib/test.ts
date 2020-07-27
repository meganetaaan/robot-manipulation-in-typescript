export type TestData<T extends (...args: any) => any> = {
  args: Parameters<T>,
  argsAfter?: Parameters<T>[0],
  expected: ReturnType<T>,
};