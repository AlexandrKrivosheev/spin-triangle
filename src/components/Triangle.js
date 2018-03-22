export default class Triangle {
  constructor({ ctx }) {
    this.ctx = ctx;

    this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    this.ctx.moveTo(110, 75);
    this.ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    this.ctx.moveTo(65, 65);
    this.ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    this.ctx.moveTo(95, 65);
    this.ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    this.ctx.stroke();
  }
}
