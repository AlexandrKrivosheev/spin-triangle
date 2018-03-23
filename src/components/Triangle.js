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
    const { newLeftPointX, newLeftPointY } = this._calcLeftPoint(angle);
    const { newRightPointX, newRightPointY } = this._calcRightPoint(angle);

    this.topPoint.x = newTopPointX;
    this.topPoint.y = newTopPointY;

    this.leftPoint.x = newLeftPointX;
    this.leftPoint.y = newLeftPointY;

    this.rightPoint.x = newRightPointX;
    this.rightPoint.y = newRightPointY;
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

  _getTopPointVector() {
    const x1 = this.ctx.canvas.width / 2;
    const y1 = this.ctx.canvas.height / 2;

    const topPointVectorX = this.topPoint.x - x1;
    const topPointVectorY = this.topPoint.y - y1;

    return { topPointVectorX, topPointVectorY };
  }

  _getPointerVector() {
    const x1 = this.ctx.canvas.width / 2;
    const y1 = this.ctx.canvas.height / 2;

    const { x, y } = getPointerCoordinates();

    const pointerVectorX = x - x1;
    const pointerVectorY = y - y1;
    return { pointerVectorX, pointerVectorY };
  }

  // return angle between top point and pointer from canvas center
  _getAngle() {
    const { topPointVectorX, topPointVectorY } = this._getTopPointVector();
    const { pointerVectorX, pointerVectorY } = this._getPointerVector();

    const dotProduct =
      topPointVectorX * pointerVectorX + topPointVectorY * pointerVectorY;

    const topPointVectorMagnitude = Math.sqrt(
      topPointVectorX ** 2 + topPointVectorY ** 2
    );
    const pointerVectorMagnitude = Math.sqrt(
      pointerVectorX ** 2 + pointerVectorY ** 2
    );

    const cosAngle =
      dotProduct / (topPointVectorMagnitude * pointerVectorMagnitude);

    console.log(Math.acos(cosAngle).toFixed(2));
    return Math.acos(cosAngle).toFixed(2);
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
