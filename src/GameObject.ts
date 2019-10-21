import GameContext from './GameContext';
abstract class GameObject {

    private static posX: number;
    private static posY: number;




    abstract render = () =>{

    }

    abstract update = () =>{

    }


    
}

export default  GameObject;