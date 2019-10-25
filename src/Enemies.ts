import GameObject from './GameObject';
import Enemie1 from './../assets/hola.png'
import GameContext from './GameContext';
class Enemies extends GameObject {

    private static direction: number;
    private static EnemiesWidth: number = 20;
    private static EnemiesHeight: number = 20;
    private static posX: number ;
    private static posY: number ;
    private right :number;
    private left: number;
    private up:number;
    private down:number;
    private imageEnemie = new Image();

    constructor(index: number) {
        super();
        this.imageEnemie.src = Enemie1;
        Enemies.direction = 1;
        Enemies.posX = 50;
        Enemies.posY = 40;
    }



    update = () => {
        const {context} = GameContext;


        if (Enemies.posX + 290 >= context.canvas.width - Enemies.EnemiesWidth) {
            Enemies.direction = -1
            Enemies.posY += 5;
        }

        if (Enemies.posX <= 10) {
            Enemies.direction = 1;
            Enemies.posY += 5;
        }
        Enemies.posX +=0.002 * Enemies.direction * GameObject.getVelocity();
        this.right = Enemies.posX + Enemies.EnemiesWidth;
        this.left = Enemies.posX;
        

    }
    render = (n: number) => {

        const { context } = GameContext;
        let x: number;

        if (n * Enemies.EnemiesWidth >= 300 ) {
            
            x = Enemies.posX +(n * Enemies.EnemiesWidth)  % 300 ;
            
        }else{

            x = Enemies.posX + n * Enemies.EnemiesWidth;
        }

        let y = Enemies.posY + Math.floor(n/(300/Enemies.EnemiesWidth))* Enemies.EnemiesHeight;
        this.up = y;
        this.down = y + Enemies.EnemiesHeight;

        context.drawImage(this.imageEnemie, x, y, Enemies.EnemiesWidth, Enemies.EnemiesHeight)

    }

    


}


export default Enemies;