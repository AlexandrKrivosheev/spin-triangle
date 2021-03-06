export default class GameLoop {
  constructor({ ctx, fps }) {
    this.toUpdate = [];
    this.ctx = ctx;
    this.interval = 1000 / fps;
    this.lastTime = new Date().getTime();
    this.currentTime = 0;
    this.delta = 0;

    this.start = this.start.bind(this);
  }

  /**
   * Start game loop
   */
  start() {
    window.requestAnimationFrame(this.start);

    this.currentTime = new Date().getTime();
    this.delta = this.currentTime - this.lastTime;

    if (this.delta > this.interval) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      for (let i = 0; i < this.toUpdate.length; i += 1) {
        this.toUpdate[i]();
      }
      this.lastTime = this.currentTime - this.delta % this.interval;
    }
  }

  /**
   * Add function to update loop
   */
  addToUpdate($function) {
    this.toUpdate.push($function);
  }
}
