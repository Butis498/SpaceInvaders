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
import pew from './../../assets/pew.mp3'
import GameOverScene from "./GameOverScene";
import sound from '../../assets/explosion.mp3'
import nextLevel from '../../assets/next.mp3'
import GG from '../../assets/Game-over-sound.mp3'


class PlayingScene extends Scene {
    public score: number = 0;

    private enemies: Enemies[] = [];
    private numberOfEnemies: number = 60;
    private player: Player = null;
    private bullets: Bullet[] = [];
    private engine: Engine;
    public finalScore: number = 0;

    sceneTypeN = 0;


    constructor(engine: Engine) {
        super();
        for (let index = 0; index < this.numberOfEnemies; index++) {
            this.enemies.push(new Enemies(index));

        }

        this.player = new Player();
        this.engine = engine

        if (index.getSoundState()) {
            index.changeSound(1, this);
        }




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
            this.score += 10;

            return true

        }




        return false;

    }

    public colicionPlayer = (enemie: Enemies, player: Player) => {


        const bUp = player.getLimits()[0];
        const bDown = player.getLimits()[1];
        const bRight = player.getLimits()[2];
        const bleft = player.getLimits()[3];

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


        context.fillText(this.score.toString(), 10, 50);

    };
    public enter = () => {
    };
    public update = async () => {
        const { context } = GameContext;

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

                    } else {

                        let soundM = document.createElement('audio');
                        soundM.src =  sound;
                        soundM.play();
                        element.setState(false);


                    }
                });

            }

        }

        for (let index = 0; index < this.enemies.length; index++) {
            const element = this.enemies[index];

            if (!element.getState()) {

                GameObject.velocityX += 0.001;
            }
        }
        let bool = false;

        for (let index = 0; index < this.enemies.length; index++) {
            const element = this.enemies[index];
            let aux = await element.getState()

            if (!aux) {
                bool = true;
            } else {

                bool = false
                break;
            };




        }

        if (bool) {
            this.enemies = [];
            let nextLevelSound  = document.createElement('audio');
            nextLevelSound.src = nextLevel;
            
            if (index.getSoundState() ) {
                nextLevelSound.play();
            }
            this.numberOfEnemies += 10;
            GameObject.velocityX = GameObject.lastVelocity;
            this.bullets = []

            for (let index = 0; index < this.numberOfEnemies; index++) {
                this.enemies.push(new Enemies(index));

            }

        }


        for (let inde = 0; inde < this.enemies.length; inde++) {
            const element = this.enemies[inde];

            if (element.getLimits()[1] >= context.canvas.height || (this.colicionPlayer(element, this.player) && element.getState())) {

                let GGSound  = document.createElement('audio');
                GGSound.src = GG;
                
                if (index.getSoundState() ) {
                    GGSound.play();
                }

                this.engine.changeScene(new GameOverScene());
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
            index.changeSound(2, this);
        }

    };

    public mouseHandler = (event: MouseEvent) => {

        this.player.moving(event);
    }

    public clickHandler = async (event: MouseEvent) => {

        const audio = document.createElement('audio');
        audio.src = pew;
        await audio.play();


        this.bullets.push(new Bullet(this.player));



    }


    public sceneType = () => {


        return this.sceneTypeN;
    }


}

export default PlayingScene;