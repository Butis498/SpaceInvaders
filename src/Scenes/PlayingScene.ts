import Scene from "./../Scene";
import Engine from './../Engine';
import MainMenuScene from './MainMenuScene';
import GameObject from '../GameObject';
import GameContext from '../GameContext';
import Enemies from '../Enemies';
import PauseScene from "./PauseScene";
import index from './../index';
import Player from './Player';

class PlayingScene extends Scene {

    private enemies: Enemies[] = [];
    private numberOfEnemies: number = 105;
    private player : Player = null;

    constructor() {
        super();
        for (let index = 0; index < this.numberOfEnemies; index++) {
            this.enemies.push(new Enemies(index));

        }

        this.player = new Player();
    }


  


    render = () => {

        const { context } = GameContext;
        const { width, height } = GameContext.context.canvas;

        context.save();
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);
        context.closePath();
        context.restore();

        for (let index = 0; index < this.enemies.length; index++) {
            const element = this.enemies[index];
            element.render(index);
            element.update();
        }


        this.player.render();
        



    };
    public enter = () => {
    };
    public update = () => {
        this.player.update();
    };
    public keyUpHandler = (event: KeyboardEvent) => {
        const { key } = event;

    };
    public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {
        const { key } = event;

        if (key === 'p') {

            
            engine.changeScene(new PauseScene(this ,index.getSoundState() ) );
            index.changeSound(2);
        }

    };

    public mouseHandler = (event: MouseEvent) => {

        this.player.moving(event);
    }

}

export default PlayingScene;