import Scene from './../Scene';
import GameContext from './../GameContext';
import GOIMG from './../../assets/10.jpg'
import Engine from './../Engine';
import MainMenuScene from './MainMenuScene';
import PlayingScene from './PlayingScene';
import GameObject from '../GameObject';


class GameOverScene extends Scene {

    private options  = ["RESTART" , "MENU"];
    private currentOption : number = 0;
    private width = GameContext.context.canvas.width;
    private height = GameContext.context.canvas.height;
    private image = new Image;
    sceneTypeN = 1;

    public enter = () =>{

    }

    public  sceneType = () =>{


        return this.sceneTypeN;
    }



    public keyDownHandler = (event: KeyboardEvent , engine :Engine) => {
        const {key} = event;

        switch (key) {
            case "ArrowUp":

                this.currentOption = (this.currentOption - 1 + this.options.length) % this.options.length;

                break;

            case "ArrowDown":

                this.currentOption = (this.currentOption + 1) % this.options.length;

                break;
            case "Enter":
                
                if (this.currentOption === 1) {
                    GameObject.velocityX = GameObject.lastVelocity;
                    engine.changeScene(new MainMenuScene());
                }

                if (this.currentOption === 0) {
                    GameObject.velocityX = GameObject.lastVelocity;
                    engine.changeScene(new PlayingScene(engine));
                }


                break;

            default:
                break;
        }
    }

    public keyUpHandler = (event : KeyboardEvent) =>{
        const {key} = event;

    }

    public render = () =>{

        this.image.src = GOIMG;

        const {context} = GameContext;

        context.save();
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0 , 0 , context.canvas.width , context.canvas.height);
        context.closePath();
        context.restore();

        context.drawImage(this.image ,-220,-100 );

        context.save();
        context.beginPath();
        context.textAlign = "center";
        context.fillStyle = "white";
        context.strokeStyle = "red";
        context.font = "25px STARWARS";
        context.lineWidth = 5;



        for (let i = 0; i < this.options.length; i++) {

            if (i === this.currentOption) {
                context.strokeText(this.options[i],this.width / 2, this.height / 2 + i * 30 + 130)
            }
            context.fillText(this.options[i], this.width / 2, this.height / 2 + i * 30 + 130)
            //context.fillText(play.score.toString(), 150, 150);
        }
        context.closePath();
        context.restore();
        
      
    }

    public update = () =>{

    }
}

export default GameOverScene;