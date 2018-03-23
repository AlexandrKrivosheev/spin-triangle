let PointerInstance = null;

export default class Pointer {
  constructor(ctx) {
    this.x = 0;
    this.y = 0;
    this.ctx = ctx;
    this.lastCoordinates = [[this.x, this.y]];
  }

  static getInstance(ctx) {
    if (!PointerInstance) {
      PointerInstance = new this(ctx);
    }
    return PointerInstance;
  }

  setCoordinates(event) {
    this.x = event.clientX;
    this.y = event.clientY;

    if (this.lastCoordinates.length >= 2) {
      this.lastCoordinates.shift();
    }
    this.lastCoordinates.push([this.x, this.y]);
  }

  /**
   * Return true if Pointer moves clockwise
   * or false if not
   */
  isMoveClockwise() {
    const centerX = this.ctx.canvas.width / 2;
    const centerY = this.ctx.canvas.height / 2;
    // 1st quarter
    if (centerX < this.x && centerY > this.y) {
      if (this.x < this.lastCoordinates[0][0]) {
        return false;
      } else if (this.y < this.lastCoordinates[0][1]) {
        return false;
      } else {
        return true;
      }
      // 2nd quater
    } else if (centerX < this.x && centerY < this.y) {
      if (this.x > this.lastCoordinates[0][0]) {
        return false;
      } else if (this.y < this.lastCoordinates[0][1]) {
        return false;
      } else {
        return true;
      }
      // 3rd quater
    } else if (centerX > this.x && centerY < this.y) {
      if (this.x > this.lastCoordinates[0][0]) {
        return false;
      } else if (this.y > this.lastCoordinates[0][1]) {
        return false;
      } else {
        return true;
      }
      // 4th quater
    } else if (centerX > this.x && centerY > this.y) {
      if (this.x < this.lastCoordinates[0][0]) {
        return false;
      } else if (this.y > this.lastCoordinates[0][1]) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}
