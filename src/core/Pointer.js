let PointerInstance = null;

export default class Pointer {
  constructor(ctx) {
    this.x = 0;
    this.y = 0;
    this.ctx = ctx;
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
  }
}
