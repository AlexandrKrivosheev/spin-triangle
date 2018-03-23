import { getPointerCoordinates } from "../helpers";

export default class Triangle {
  constructor({ ctx }) {
    this.ctx = ctx;
    this.height = 100;
    this.sideWidth = 110;
    this.topPoint = { x: 0, y: 0 };
    this.leftPoint = { x: 0, y: 0 };
    this.rightPoint = { x: 0, y: 0 };

    this._calcCoordinates();

    this.update = this.update.bind(this);
  }

  update() {
    this._calcPoints();
    this._draw();
  }

  _draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.topPoint.x, this.topPoint.y);
    this.ctx.lineTo(this.leftPoint.x, this.leftPoint.y);
    this.ctx.lineTo(this.rightPoint.x, this.rightPoint.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  _calcPoints() {
    const angle = this._getAngle();
    const { newTopPointX, newTopPointY } = this._calcTopPoint(angle);
    // const { newLeftPointX, newLeftPointY } = this._calcLeftPoint(angle);
    // const { newRightPointX, newRightPointY } = this._calcRightPoint(angle);

    this.topPoint.x = newTopPointX;
    this.topPoint.y = newTopPointY;

    // this.leftPoint.x = newLeftPointX;
    // this.leftPoint.y = newLeftPointY;

    // this.rightPoint.x = newRightPointX;
    // this.rightPoint.y = newRightPointY;
  }

  _calcRightPoint(alpha) {
    const centerX = this.ctx.canvas.width / 2;
    const centerY = this.ctx.canvas.height / 2;

    let rx = this.rightPoint.x - centerX;
    let ry = this.rightPoint.y - centerY;

    let newRightPointX = centerX + rx * Math.cos(alpha) - ry * Math.sin(alpha);
    let newRightPointY = centerY + rx * Math.sin(alpha) + ry * Math.cos(alpha);

    return { newRightPointX, newRightPointY };
  }
  _calcLeftPoint(alpha) {
    const centerX = this.ctx.canvas.width / 2;
    const centerY = this.ctx.canvas.height / 2;

    let rx = this.leftPoint.x - centerX;
    let ry = this.leftPoint.y - centerY;

    let newLeftPointX = centerX + rx * Math.cos(alpha) - ry * Math.sin(alpha);
    let newLeftPointY = centerY + rx * Math.sin(alpha) + ry * Math.cos(alpha);

    return { newLeftPointX, newLeftPointY };
  }

  _calcTopPoint(alpha) {
    const centerX = this.ctx.canvas.width / 2;
    const centerY = this.ctx.canvas.height / 2;

    let rx = this.topPoint.x - centerX;
    let ry = this.topPoint.y - centerY;

    let newTopPointX = centerX + rx * Math.cos(alpha) - ry * Math.sin(alpha);
    let newTopPointY = centerY + rx * Math.sin(alpha) + ry * Math.cos(alpha);

    return { newTopPointX, newTopPointY };
  }

  // return angle between top point and pointer from canvas center
  _getAngle() {
    const { x, y } = getPointerCoordinates();

    const centerX = this.ctx.canvas.width / 2;
    const centerY = this.ctx.canvas.height / 2;

    const vectorSum = x * centerX + y * centerY;
    const vectorsMagnitude1 = Math.sqrt(x ** 2 + y ** 2);
    const vectorsMagnitude2 = Math.sqrt(centerX ** 2 + centerY ** 2);
    let angleCos = vectorSum / (vectorsMagnitude1 * vectorsMagnitude2);

    return Math.acos(angleCos).toFixed(2);
  }

  _calcCoordinates() {
    let centerX = this.ctx.canvas.width / 2;
    let centerY = this.ctx.canvas.height / 2;

    this.topPoint.x = centerX;
    this.topPoint.y = centerY - this.height / 3 * 2;
    // Piphagor theory
    let cathetus = this.height;
    let hypotenuse = this.sideWidth;
    let cathetus2 = Math.sqrt(hypotenuse ** 2 - cathetus ** 2);

    this.leftPoint.x = this.topPoint.x - cathetus2;
    this.leftPoint.y = this.topPoint.y + hypotenuse;

    this.rightPoint.x = this.topPoint.x + cathetus2;
    this.rightPoint.y = this.topPoint.y + hypotenuse;
  }
}
