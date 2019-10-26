import Engine from "./Engine";
import GameContext from "./GameContext";
import Music from "./../assets/sound.mp3"

//  Nota: No es necesario escribir código nuevo en este archivo.

let sound: boolean = true

const music = document.createElement("audio");
music.src = Music;
music.loop = true;


let changeSound = (n: number) => {
    if (n === 1) {
        music.play();
        sound = true;
    }
    if (n === 2) {
        music.pause();
        sound = false;
    }

}



const canvas = document.getElementById("game-area") as HTMLCanvasElement;
const context = canvas.getContext("2d");

GameContext.context = context;

const engine = new Engine();
changeSound(1);
let getSoundState = () => {
    return sound;
}
engine.start();
canvas.addEventListener("keydown", engine.keydownHandler);
canvas.addEventListener("keyup", engine.keyupHandler);
canvas.addEventListener('mousemove' , engine.mouseHandler);
canvas.addEventListener('mousedown' , engine.clickHandler);

//hola

export default { changeSound , getSoundState }