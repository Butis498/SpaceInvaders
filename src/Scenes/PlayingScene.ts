import Scene from "./../Scene";
import Engine from './../Engine';
import MainMenuScene from './MainMenuScene';

class PlayingScene extends Scene{


    public  render = () => {
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