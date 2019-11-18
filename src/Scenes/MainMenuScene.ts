import Scene from "../Scene";
import GameContext from '../GameContext';
import Engine from '../Engine';
import PlayingScene from './PlayingScene';
import titleImg from './../../assets/imageedit_2_7701798241.jpg'
import GameOverScene from "./GameOverScene";
import SettingsScene from "./SettingsScene";
import PauseScene from "./PauseScene";

class MainMenuScene extends Scene {

    private currentOption: number = 0;
    private options = ["PLAY", "SETTINGS"];
    private width = GameContext.context.canvas.width;
    private height = GameContext.context.canvas.height;
    private image = new Image;
    sceneTypeN = 1;


    public render = () => {

        this.image.src = titleImg;
        const context = GameContext.context;


        context.save();
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0 , 0 , context.canvas.width , context.canvas.height);
        context.closePath();
        context.restore();

        context.drawImage(this.image ,-72,0 );


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
        }
        context.closePath();
        context.restore();
    };
    public update = () => { };
    public keyUpHandler = (event: KeyboardEvent) => { };
    public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {

        const key = event.key;

        switch (key) {
            case "ArrowUp":

                this.currentOption = (this.currentOption - 1 + this.options.length) % this.options.length;

                break;

            case "ArrowDown":

                this.currentOption = (this.currentOption + 1) % this.options.length;

                break;
            case "Enter":
                
                if (this.currentOption === 0) {
                    
                    engine.changeScene(new PlayingScene(engine));
                }

                if (this.currentOption === 1) {
                    engine.changeScene(new SettingsScene());
                }





                break;

            default:
                break;
        }

    };
    public enter = () => { };

    public  sceneType = () =>{


        return this.sceneTypeN;
    }



}

export default MainMenuScene;