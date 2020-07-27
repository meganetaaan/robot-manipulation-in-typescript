type Vector2 = [number, number];

/**
 * Returns 
 * @param l1: length of link1
 * @param l2: length of link2
 * @param theta1: radian between x axis and link1
 * @param theta2: radian between link1 and link2
 */
export function forwardKinematicsTwo(
  l1: number,
  l2: number,
  theta1: number,
  theta2: number,
): Vector2 {
  return [
    Math.round(
      1000 * (l1 * Math.cos(theta1) + l2 * Math.cos(theta1 + theta2)),
    ) /
    1000,
    Math.round(
      1000 * (l1 * Math.sin(theta1) + l2 * Math.sin(theta1 + theta2)),
    ) /
    1000,
  ];
}

export function backwardKinematicsTwo(
  l1: number,
  l2: number,
  x: number,
  y: number,
): Vector2 {
  const c2 = 
    (Math.pow(x, 2) + Math.pow(y, 2) - Math.pow(l1, 2) -
      Math.pow(l2, 2)) / (2 * l1 * l2);
  const theta2 = Math.acos(c2)
  const s2 = Math.sin(theta2);
  console.log(`theta2: ${theta2}, c2: ${c2}, s2: ${s2}`)
  const theta1 = Math.atan2(
    -l2 * s2 * x + (l1 + l2 * c2) * y,
    (l1 + l2 * c2) * x + l2 * s2 * y,
  );
  return [theta1, theta2];
}