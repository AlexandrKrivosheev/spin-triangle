export function resizeCanvas(canvasEl) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvasEl.width = `${width}`;
  canvasEl.height = `${height}`;
}
