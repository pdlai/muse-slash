import Menu from "./menu";
import Background from "./background";
import Game from "./game";
import Display from "./display";

class GameView {
    constructor(game, ctx, canvas){
        this.game = game;
        this.ctx = ctx;
        this.canvas = canvas;

        this.setup();
    }

    // 928x793
    setup(){
        this.setWindowResize();
        this.background = new Background(this.ctx, this.canvas);
        this.setClickEvent();
        Display.arrangeDisplay();
    }

    // resize erases canvas, will have to call redraw after
    setWindowResize(){
        window.addEventListener('resize', () => {
            // turn off for now
            // this.canvas.width = window.innerWidth;
            // this.canvas.height = window.innerHeight;
        });
    }

    setClickEvent(){
        window.addEventListener('click', (e) =>{
            let action = Menu.eventHandler(e);
            if (action === "play-level"){
                this.game.play("test_song");
                this.setKeyEvent();
                this.gameLoop();
            }
            if (action === "pause"){
                this.removeKeyEvent();
                this.stopGameLoop();
            }
            if (action === "resume"){
                this.setKeyEvent();
                this.gameLoop();
            }
            if (action === "main-menu"){
                this.removeKeyEvent();
                this.game = new Game();
                this.draw();
            }
        });
    }

    setKeyEvent(){
        this.keyListener = this.game.checkKeyEvent.bind(this.game);
        document.addEventListener('keydown', this.keyListener);
        document.addEventListener('keyup', this.keyListener);
    }

    removeKeyEvent(){
        document.removeEventListener('keydown', this.keyListener);
        document.removeEventListener('keyup', this.keyListener);
    }

    gameLoop(){
        this.updateStep();
        this.draw();
        this.requestId = requestAnimationFrame(this.gameLoop.bind(this));
    }

    stopGameLoop(){
        cancelAnimationFrame(this.requestId);
    }

    updateStep(){
        this.background.move();
        this.game.moveNotes();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw(this.ctx);
        this.game.songMap.forEach( note => {
            note.draw(this.ctx);
        })
    }

}

export default GameView;