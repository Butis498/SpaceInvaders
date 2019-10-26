import GameContext from "./GameContext";
import Time from "./Time";
import Scene from "./Scene";
import PlayingScene from './Scenes/PlayingScene';
import MainMenuScene from './Scenes/MainMenuScene';
import PauseScene from "./Scenes/PauseScene";
import index from './index';

class Engine {

  

  private curretScene: Scene = null;
  // Iniciar el motor del juego.

 public changeScene = (scene: Scene) =>{
   this.curretScene = scene;
   this.curretScene.enter();
 }

  public start = () => {
    this.init();
    requestAnimationFrame(this.tick);
  };

  public keydownHandler = (event: KeyboardEvent) => {
    this.curretScene.keyDownHandler(event , this);
  };

  public keyupHandler = (event: KeyboardEvent) => {
    this.curretScene.keyUpHandler(event);
  };

  // Limpiar pantalla y dibujar fondo.
  private clearScreen = () => {
    const context = GameContext.context;
    const canvas = context.canvas;
    const width = canvas.width;
    const height = canvas.height;

    context.save();
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.closePath();
    context.restore();
  };

  public init = () => {
    this.curretScene = new MainMenuScene();
    this.curretScene.enter();
  };

  // Método que se ejecuta en cada frame del juego.
  public tick = () => {
    this.clearScreen();
    Time.update();
    this.curretScene.update();
    this.curretScene.render();

    requestAnimationFrame(this.tick);
  };

  public mouseHandler = (event: MouseEvent) =>{
      this.curretScene.mouseHandler(event);
  }

  public clickHandler = (event: MouseEvent) => {
    this.curretScene.clickHandler(event);
  }
}

export default Engine;
