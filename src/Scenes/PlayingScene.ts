import Scene from "./../Scene";
import Engine from './../Engine';
import MainMenuScene from './MainMenuScene';
import GameObject from '../GameObject';
import GameContext from '../GameContext';
import Enemies from '../Enemies';
import PauseScene from "./PauseScene";
import index from './../index';
import Player from './Player';
import Bullet from '../Bullet';

class PlayingScene extends Scene {

    private enemies: Enemies[] = [];
    private numberOfEnemies: number = 60;
    private player: Player = null;
    private bullets: Bullet[] = [];

    constructor() {
        super();
        for (let index = 0; index < this.numberOfEnemies; index++) {
            this.enemies.push(new Enemies(index));

        }

        this.player = new Player();
    }


    public colicion = (enemie: Enemies, bullet: Bullet) => {


        const bUp = bullet.getLimits()[0];
        const bDown = bullet.getLimits()[1];
        const bRight = bullet.getLimits()[2];
        const bleft = bullet.getLimits()[3];

        const eUp = enemie.getLimits()[0];
        const eDown = enemie.getLimits()[1];
        const eRight = enemie.getLimits()[2];
        const eLeft = enemie.getLimits()[3];


        //console.log(bleft, "<", eRight, "  ", bRight, ">", eLeft, "  ", bUp, " > ", eDown, "  ", bDown, " < ", eUp);




        if (bleft < eRight && bRight > eLeft && bUp < eDown && bDown > eUp) {

            console.log(true)
            return true

        }




        return false;

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

            if (element.getState()) {
                element.render(index);

            }
            element.update(index);
        }


        this.player.render();


        for (let index = 0; index < this.bullets.length; index++) {
            const element = this.bullets[index];
            element.render();

        }




    };
    public enter = () => {
    };
    public update = () => {
        this.player.update();

        for (let index = 0; index < this.bullets.length; index++) {
            const element = this.bullets[index];
            element.update();
        }


        this.bullets = this.bullets.filter((ele) => {
            if (ele.getPosY() != 0) {
                return ele;
            }
        });




        for (let index = 0; index < this.enemies.length; index++) {
            const element = this.enemies[index];

            if (element.getState()) {

                this.bullets = this.bullets.filter((bul) => {

                    if (!this.colicion(element, bul)) {


                        return bul;

                    } else element.setState(false);
                });

            }

        }






    };


    public keyUpHandler = (event: KeyboardEvent) => {
        const { key } = event;

    };
    public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {
        const { key } = event;

        if (key === 'p') {


            engine.changeScene(new PauseScene(this, index.getSoundState()));
            index.changeSound(2);
        }

    };

    public mouseHandler = (event: MouseEvent) => {

        this.player.moving(event);
    }

    public clickHandler = (event: MouseEvent) => {


        this.bullets.push(new Bullet(this.player));
    }

}

export default PlayingScene;