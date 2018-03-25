import { resizeCanvas } from './helpers';
import { fps } from './config';
import GameLoop from './core/GameLoop';
import Pointer from './core/Pointer';
import Triangle from './components/Triangle';

const canvasEl = document.querySelector('#canvas');
const ctx = canvasEl.getContext('2d');
const Poiner = Pointer.getInstance();

resizeCanvas(canvasEl);
window.addEventListener('resize', () => resizeCanvas(canvasEl));
window.addEventListener('mousemove', event => Poiner.setCoordinates(event));

const gameLoop = new GameLoop({ ctx, fps });
gameLoop.start();

const triangle = new Triangle({ ctx });
gameLoop.addToUpdate(triangle.update);
