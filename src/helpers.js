export function resizeCanvas(canvasEl) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvasEl.style.width = `${width}px`;
  canvasEl.style.height = `${height}px`;
}
