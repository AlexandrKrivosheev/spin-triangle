let PointerInstance = null;

export default class Pointer {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  static getInstance() {
    if (!PointerInstance) {
      PointerInstance = new this();
    }
    return PointerInstance;
  }

  setCoordinates(event) {
    this.x = event.clientX;
    this.y = event.clientY;
  }
}
