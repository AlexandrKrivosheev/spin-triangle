export default class GameLoop {
  constructor({ ctx, fps }) {
    this.toUpdate = [];
    this.ctx = ctx;
    this.interval = 1000 / fps;
    this.lastTime = new Date().getTime();
    this.currentTime = 0;
    this.delta = 0;
  }

  /**
   * Start game loop
   */
  start() {
    window.requestAnimationFrame(this.start);

    this.currentTime = new Date().getTime();
    this.delta = this.currentTime - this.lastTime;

    if (this.delta > this.interval) {
      for (let i = this.toUpdate.length; i >= 0; i--) {
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
