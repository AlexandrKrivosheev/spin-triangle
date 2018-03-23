import { resizeCanvas, setPointerCoordinates } from "./helpers";
import { fps } from "./config";
import GameLoop from "./core/GameLoop";
import Triangle from "./components/Triangle";

const canvasEl = document.querySelector("#canvas");
resizeCanvas(canvasEl);
window.addEventListener("resize", () => resizeCanvas(canvasEl));
window.addEventListener("mousemove", event => setPointerCoordinates(event));

const ctx = canvas.getContext("2d");
const gameLoop = new GameLoop({ ctx, fps });
gameLoop.start();

const triangle = new Triangle({ ctx });
gameLoop.addToUpdate(triangle.update);
