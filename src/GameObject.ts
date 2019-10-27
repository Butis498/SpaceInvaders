import GameContext from './GameContext';
import Engine from './Engine';
import Enemies from './Enemies';
abstract class GameObject {

    public static velocityX: number =4;
    public static lastVelocity: number = 4;

    public static getVelocity = ()=> {
        return GameObject.velocityX;
    }


    abstract render = (n: number) =>{

    }

    abstract update = (n: number) =>{

    }
    public static changeVelocity = (n: number) => {

        switch (n) {
            case 1:

                GameObject.velocityX = 4;
                GameObject.lastVelocity = 4;

                break;
            case 2:
                GameObject.velocityX = 8;
                GameObject.lastVelocity = 8;

                break;
            case 3:
                GameObject.velocityX = 15;
                GameObject.lastVelocity = 15;

                break;


            default:
                break;
        }
    }



    
}

export default  GameObject;