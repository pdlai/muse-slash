import Menu from "./menu";
import Background from "./background";
import Game from "./game";

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
        this.setClickEvent();
        this.background = new Background(this.ctx, this.canvas);
    
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
            // console.log(e);
        });
    }

    setKeyEvent(){
        document.addEventListener('keydown', this.game.checkHitBoxes);
        document.addEventListener('keyup', this.game.checkHitBoxes);
    }

    removeKeyEvent(){
        document.removeEventListener('keydown', this.game.checkHitBoxes);
        document.removeEventListener('keyup', this.game.checkHitBoxes);
    }

    // remember to break out of gameloop on restart or main menu
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