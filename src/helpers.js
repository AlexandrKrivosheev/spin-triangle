export function resizeCanvas(canvasEl) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  /* eslint-disable no-param-reassign */
  canvasEl.width = width;
  canvasEl.height = height;
  /* eslint-enable */
}

/**
 * Determine cathetus by Piphagor theory
 */
export function calcCathetus(hypotenuse, cathetus) {
  return Math.sqrt(hypotenuse ** 2 - cathetus ** 2);
}

/**
 * Determine x2y2 turn by angle relatively to x1y1
 *
 * $angle angle between lines
 * $x1, $y1 coordinates of lines start
 * $x2, $y2 end coordinates of known line
 */
export function calcTurnCoordinatesByAngle(angle, { x1, y1 }, { x2, y2 }) {
  const rx = x2 - x1;
  const ry = y2 - y1;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const x = x1 + rx * cos - ry * sin;
  const y = y1 + rx * sin + ry * cos;

  return { x, y };
}

/**
 * Determine angle by cosine theory
 *
 * $oppositeSide side oposite to angle to find
 */
export function calcAngleByCosTheory(oppositeSide, a, b) {
  const cos = (a ** 2 + b ** 2 - oppositeSide ** 2) / (2 * a * b);

  return Math.acos(cos);
}

/**
 * Determine side by cosine theory
 *
 * $oppositeAngle angle oposite to side to find
 */
export function calcSideByCosTheory(oppositeAngle, a, b) {
  const side = Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(oppositeAngle));

  return side;
}
