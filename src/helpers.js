export function resizeCanvas(canvasEl) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvasEl.width = `${width}`;
  canvasEl.height = `${height}`;
}

export function getPointerCoordinates() {
  if (!window.pointerPositionY) {
    window.pointerPositionY = 0;
    window.pointerPositionX = 0;
  }
  return { x: window.pointerPositionX, y: window.pointerPositionY };
}

export function setPointerCoordinates(event) {
  window.pointerPositionX = event.pageX;
  window.pointerPositionY = event.pageY;
}
