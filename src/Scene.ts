import Engine from './Engine';
abstract class Scene {
    public abstract sceneTypeN:number
    public abstract render = () => {};
    public abstract update = () => {};
    public abstract enter = () => {};
    public abstract keyUpHandler = (event: KeyboardEvent ) => {};
    public abstract keyDownHandler = (event: KeyboardEvent, engine:Engine) => {
        
    };

    public  mouseHandler = (event:MouseEvent) => {

    }
    public clickHandler = (event:MouseEvent)=> {
        
    }


    public abstract sceneType=() =>{
        
        return this.sceneTypeN
    }


}

export default  Scene;