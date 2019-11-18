import Engine from './Engine';
import GameContext from "./GameContext";
import Music from "./../assets/sound.mp3"
import { async } from 'q';
import MenuMusic from './../assets/haloMenu.mp3'
import Scene from './Scene';
import PlayingScene from './Scenes/PlayingScene';
import MainMenuScene from './Scenes/MainMenuScene';

//  Nota: No es necesario escribir código nuevo en este archivo.

let sound: boolean = true
let menuSound: boolean = true

const music = document.createElement("audio");
music.src = Music;
music.loop = true;


const MenuSound = document.createElement('audio');
MenuSound.src = MenuMusic;
MenuSound.loop = true;


let changeSound = async(n: number , scene:Scene) => {
    if (n === 1) {

        if (scene.sceneType() === 1) {
            await MenuSound.play()
            await music.pause();
        }else{
            await music.play();
            await MenuSound.pause()

        }
        sound = true; 

        
    }
    if (n === 2) {
        if (scene.sceneType() === 1) {
            await MenuSound.pause()
        }else{
            await music.pause();
        }

        sound = false;

    }

}



const canvas = document.getElementById("game-area") as HTMLCanvasElement;
const context = canvas.getContext("2d");

GameContext.context = context;

const engine = new Engine();
changeSound(1 , new MainMenuScene());
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