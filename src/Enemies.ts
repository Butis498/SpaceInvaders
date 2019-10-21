import GameObject from './GameObject';
class Enemies extends GameObject {
    constructor() {
        super();
    }

    private static velocityX: number;
    private static velocityY: number;

    update = () => {

    }
    render = () => {

    }

    public changeVelocity = (n: number) => {

        switch (n) {
            case 1:

                Enemies.velocityX = 2;
                Enemies.velocityY = 2;

                break;
            case 2:
                Enemies.velocityX = 2;
                Enemies.velocityY = 2;

                break;
            case 3:
                Enemies.velocityX = 2;
                Enemies.velocityY = 2;

                break;


            default:
                break;
        }
    }



}


export default Enemies;