import playerImage from './../../assets/ship3.png';
import GameContext from './../GameContext';
import Time from "./../Time";

const sWidth = 50;
const sHeight = 50;
const posY = 400 * 0.75;

class Player{

private posX = 0;
private speed = 200;
private characterImage = new Image();
private up : number;
private down: number;
private right: number;
private left : number;


public getLimits = () => {

    return [this.up , this.down , this.right , this.left];
}

public moving(event:MouseEvent) {
  var xOffset = event.offsetX;
  this.posX = xOffset - sWidth / 2;
}


  public getPosition() {
    return this.posX;
  }

  public getWidth() {
    return sWidth;
  }

  constructor() {
    this.characterImage.src = playerImage;
    const { context } = GameContext;
    const { width, height } = context.canvas;
    this.posX = 
      (width - sWidth) / 2;
      this.up = posY;
      this.down = posY + sHeight
      this.right = this.posX + sWidth;
      this.left = this.posX
  }
  
  public update = () => {

      this.down = posY + sHeight
      this.right = this.posX + sWidth;
      this.left = this.posX
  };

  public render = () => {
    const { context } = GameContext;
    context.save();
    context.beginPath();
    context.drawImage(
      this.characterImage,
      this.posX,
      posY,
      sWidth,
      sHeight
    );
    context.closePath();
    context.restore();
  };
}



export default Player;