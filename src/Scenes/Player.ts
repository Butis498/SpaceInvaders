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
  }
  
  public update = () => {
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