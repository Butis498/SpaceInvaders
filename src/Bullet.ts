import Player from "./Scenes/Player";
import GameContext from './GameContext';

 class Bullet {

    private posX: number;
    private posY: number;
    private width:number = 3;
    private height:number = 25;
    private velocity: number =  - 5;
    private up : number;
    private down :number;
    private right: number;
    private left: number;

     constructor(player : Player) {

        this.posX = player.getPosition() + player.getWidth()/2;
        this.posY = 400 * 0.75 ;
        this.up = this.posY;
        this.down = this.posY + this.height;
        this.left = this.posX;
        this.right = this.posX + this.width;

         
     }

     public getLimits(){

      return [this.up , this.down , this.right , this.left];
     }

     public getPosY = () => {
        return this.posY;
     }

     public render (){


        const {context} = GameContext;

        context.save()
        context.beginPath();

        context.fillStyle = "lime";

        context.fillRect(this.posX , this.posY , this.width , this.height);
    


     }

     public update (){

        this.posY += this.velocity;
        this.up = this.posY;
        this.down = this.posY + this.height;
        this.right = this.posX + this.width;


     }





 }


 export default Bullet;