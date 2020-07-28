type Vector2 = [number, number];
type Vector3 = [number, number, number];
export function calcForwardThree(
  l1: number,
  l2: number,
  theta1: number,
  theta2: number,
  theta3: number,
): Vector3 {
  const px = l1 * Math.sin(theta1) + l2 * Math.sin(theta2 + theta1) + 0;
  const pz = -l1 * Math.cos(theta1) - l2 * Math.cos(theta2 + theta1) + 0;
  const phiy = -theta1 - theta2 - theta3 + 0;
  return [px, pz, phiy];
}
