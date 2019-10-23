import Scene from '../Scene';
import GameContext from '../GameContext';
import Engine from '../Engine';
import MainMenuScene from './MainMenuScene';
import SettingsScene from './SettingsScene';
import Enemies from '../Enemies';
import GameObject from '../GameObject';


class DIficultyScene extends Scene {

    private options  = [ "DIFICULTY" , "EASY" , "MEDIUM" , "HARD" , "BACK" ];
    private currentOption : number = 1;
    private width = GameContext.context.canvas.width;
    private height = GameContext.context.canvas.height;
    private enemies = Enemies;

    public enter = () =>{

    }

    public keyDownHandler = (event: KeyboardEvent , engine :Engine) => {
        const {key} = event;

        switch (key) {
            case "ArrowUp":

                this.currentOption = (this.currentOption - 1 + this.options.length) % this.options.length;
                if (this.currentOption === 0) {
                    this.currentOption =this.options.length - 1;
                }

                break;

            case "ArrowDown":

                this.currentOption = (this.currentOption + 1) % this.options.length;
                if (this.currentOption === 0) {
                    this.currentOption ++;
                }


                break;
            case "Enter":
                
                

                if (this.currentOption === 4) {
                    
                    engine.changeScene(new SettingsScene());
                }else{

                    GameObject.changeVelocity(this.currentOption);
                    engine.changeScene(new MainMenuScene());
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


        const {context} = GameContext;

        context.save();
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0 , 0 , context.canvas.width , context.canvas.height);
        context.closePath();
        context.restore();

        context.save();
        context.beginPath();
        context.textAlign = "center";
        context.fillStyle = "red";
        context.strokeStyle = "red";
        context.font = "45px STARWARS";


        context.fillText(this.options[0], this.width / 2, this.height / 3 + 0 * 30 + 50)
        
        context.closePath();
        context.restore();


        context.save();
        context.beginPath();
        context.textAlign = "center";
        context.fillStyle = "white";
        context.strokeStyle = "red";
        context.font = "25px STARWARS";
        context.lineWidth = 5;


        for (let i = 1; i < this.options.length - 1 ; i++) {

            if (i === this.currentOption) {
                context.strokeText(this.options[i],this.width / 2, this.height / 3 + i * 30 + 100)


            }
            if (this.currentOption ===4 ) {
                context.strokeText(this.options[4], this.width / 2, 385)

            }
            context.fillText(this.options[i], this.width / 2, this.height / 3 + i * 30 + 100)
            context.fillText(this.options[4], this.width / 2, 385);


        }

        context.closePath();
        context.restore();

    }

    public update = () =>{

    }
}

export default DIficultyScene;