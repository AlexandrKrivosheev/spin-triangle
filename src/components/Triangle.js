import Pointer from "../core/Pointer";
import {
  calcCathetus,
  calcTurnCoordinatesByAngle,
  calcAngleByCosTheory,
  calcSideByCosTheory
} from "../helpers";

export default class Triangle {
  constructor({ ctx }) {
    this.ctx = ctx;
    this.pointer = Pointer.getInstance(ctx);
    this.sideWidth = 110;
    this.bottomWidth = 50;
    this.topPoint = { x: 0, y: 0 };
    this.leftPoint = { x: 0, y: 0 };
    this.rightPoint = { x: 0, y: 0 };
    this.center = {
      x: this.ctx.canvas.width / 2,
      y: this.ctx.canvas.height / 2
    };

    this.height = calcCathetus(this.sideWidth, this.bottomWidth / 2);
    // Angle between 2/3 height and 2/3 small median
    this.medianAngle = this._calcMedianAngle();

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
    this._calcTopPoint();
    this._calcLeftPoint();
    this._calcRightPoint();
  }

  _calcTopPoint() {
    const x1 = this.center.x;
    const y1 = this.center.y;
    const x2 = this.pointer.x;
    const y2 = this.pointer.y;
    // width from triangle center to pointer
    const toPointerWidth = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    // 2/3 median  is radius
    const radius = this.height / 3 * 2;
    const delta = radius / (toPointerWidth - radius);
    // calculate top point coordinates
    this.topPoint.x = (x1 + delta * x2) / (1 + delta);
    this.topPoint.y = (y1 + delta * y2) / (1 + delta);
  }

  _calcLeftPoint() {
    const angle360InRad = 6.28319;

    const turnAngle = angle360InRad - this.medianAngle;

    const x1 = this.center.x;
    const y1 = this.center.y;
    const x2 = this.topPoint.x;
    const y2 = this.topPoint.y;

    const { x, y } = calcTurnCoordinatesByAngle(
      turnAngle,
      { x1, y1 },
      { x2, y2 }
    );

    this.leftPoint.x = x;
    this.leftPoint.y = y;
  }

  _calcRightPoint() {
    const turnAngle = this.medianAngle;
    const x1 = this.center.x;
    const y1 = this.center.y;
    const x2 = this.topPoint.x;
    const y2 = this.topPoint.y;

    const { x, y } = calcTurnCoordinatesByAngle(
      turnAngle,
      { x1, y1 },
      { x2, y2 }
    );

    this.rightPoint.x = x;
    this.rightPoint.y = y;
  }

  /**
   * Angle between 2/3 height and 2/3 small median
   */
  _calcMedianAngle() {
    const topAngle =
      calcAngleByCosTheory(this.bottomWidth, this.sideWidth, this.sideWidth) /
      2;

    // 2/3 small median  is small radius
    const smallRadius = calcSideByCosTheory(
      topAngle,
      this.height / 3 * 2,
      this.sideWidth
    );

    return calcAngleByCosTheory(
      this.sideWidth,
      this.height / 3 * 2,
      smallRadius
    );
  }
}
