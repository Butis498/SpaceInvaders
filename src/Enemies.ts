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
    public state : boolean;
    private x: number;
    private y :number

    constructor(index: number) {
        super();
        this.imageEnemie.src = Enemie1;
        Enemies.direction = 1;
        Enemies.posX = 50;
        Enemies.posY = 40;
        this.state = true;
    }

    public getState = () =>{
        return this.state;
    }


    public setState = (b : boolean) => {

        this.state = b;
    }

    public getLimits = () => {
        return[this.up , this.down , this.right , this.left];
    }



    update = (n : number) => {
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
        

        if (n * Enemies.EnemiesWidth >= 300 ) {
            
            this.x = Enemies.posX +(n * Enemies.EnemiesWidth)  % 300 ;
            
        }else{

            this.x = Enemies.posX + n * Enemies.EnemiesWidth;
        }

        this.y = Enemies.posY + Math.floor(n/(300/Enemies.EnemiesWidth))* Enemies.EnemiesHeight;
        this.up = this.y;
        this.down = this.y + Enemies.EnemiesHeight;
        this.right = this.x + Enemies.EnemiesWidth;
        this.left = this.x;

        
        

    }
    render = (n: number) => {

        
        const {context} = GameContext;

        context.drawImage(this.imageEnemie, this.x, this.y, Enemies.EnemiesWidth, Enemies.EnemiesHeight)

    }

    


}


export default Enemies;