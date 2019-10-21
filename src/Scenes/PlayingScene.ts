import Scene from "./../Scene";
import Engine from './../Engine';
import MainMenuScene from './MainMenuScene';
import GameObject from '../GameObject';
import GameContext from '../GameContext';
import Enemies from '../Enemies';

class PlayingScene extends Scene{

    private enemies: Enemies[];
    private numberOfEnemies: number = 30;


    public  render = () => {

        const {context} = GameContext;
        const {width , height} = GameContext.context.canvas;

        

        for (let index = 0; index < this.enemies.length; index++) {
            const element = this.enemies[index];
            this.enemies.push(new Enemies());
            
        }



        context.save();
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0,0, width , height);
        context.closePath();
        context.restore();




    };
    public enter = () =>{
    };
    public  update = () => {
    };
    public  keyUpHandler = (event: KeyboardEvent) => {
        const {key} = event;

    };
    public  keyDownHandler = (event: KeyboardEvent , engine: Engine) => {
        const {key} = event;

    };

}

export default PlayingScene;