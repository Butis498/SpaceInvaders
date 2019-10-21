import Scene from '../Scene';
import GameContext from '../GameContext';
import Engine from '../Engine';
import MainMenuScene from './MainMenuScene';
import SettingsScene from './SettingsScene';


class PauseScene extends Scene {

    private options  = [ "PAUSE" , "MENU" , "RESUME"  ];
    private currentOption : number = 0;
    private width = GameContext.context.canvas.width;
    private height = GameContext.context.canvas.height;

    public enter = () =>{

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
        context.lineWidth = 5;
        context.strokeStyle = "red";
        context.font = "25px STARWARS";


        for (let i = 1; i < this.options.length ; i++) {

            if (i === this.currentOption) {
                context.strokeText(this.options[i],this.width / 2, this.height / 3 + i * 30 + 100)


            }
        
            context.fillText(this.options[i], this.width / 2, this.height / 3 + i * 30 + 100)


        }

        context.closePath();
        context.restore();

    }

    public update = () =>{

    }
}

export default PauseScene;