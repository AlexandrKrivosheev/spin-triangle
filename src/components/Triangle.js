export default class Triangle {
  constructor({ ctx }) {
    this.ctx = ctx;
    this.height = 100;
    this.sideWidth = 110;
    this.topPoint = { x: 0, y: 0 };
    this.leftPoint = { x: 0, y: 0 };
    this.rigthPoint = { x: 0, y: 0 };
    this._calcCoordinates();
    this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.topPoint.x, this.topPoint.y);
    this.ctx.lineTo(this.leftPoint.x, this.leftPoint.y);
    this.ctx.lineTo(this.rigthPoint.x, this.rigthPoint.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  _calcCoordinates() {
    let centerX = this.ctx.canvas.width / 2;
    let centerY = this.ctx.canvas.height / 2;

    this.topPoint.x = centerX;
    this.topPoint.y = centerY - this.height / 3 * 2;

    let cathetus = this.height;
    let hypotenuse = this.sideWidth;
    let cathetus2 = Math.sqrt(hypotenuse ** 2 - cathetus ** 2);

    this.leftPoint.x = this.topPoint.x - cathetus2;
    this.leftPoint.y = this.topPoint.y + hypotenuse;

    this.rigthPoint.x = this.topPoint.x + cathetus2;
    this.rigthPoint.y = this.topPoint.y + hypotenuse;
  }
}
