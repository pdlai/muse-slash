import Menu from "./menu";

class GameView {
    constructor(game, ctx){
        // loading and saving everything so runtime has less delay
        this.game = game;
        this.ctx = ctx;
        this.topNote = new Image();
        this.topNote.src = './assets/enemies/ghost.png';
        this.botNote = new Image();
        this.botNote.src = './assets/enemies/frog.png';
        this.setup();
        this.topNote.addEventListener('load', () => {
            this.ctx.drawImage(this.topNote, 120, 120);
        });
    }

    setup(){
        this.setWindowResize();
        this.setClickAction();
    }

    // resize erases canvas, will have to call redraw after
    setWindowResize(){
        window.addEventListener('resize', () => {
            // turn off for now
            // this.canvas.width = window.innerWidth;
            // this.canvas.height = window.innerHeight;
        });
    }

    setClickAction(){
        window.addEventListener('click', (e) =>{
            let action = Menu.eventHandler(e);
            if (action === "play and render level"){
                this.game.play("test_song");
                // this.gameLoop();
            }
            // console.log(e);
        });
    }

    gameLoop(){
        console.log("yo")
        requestAnimationFrame(this.gameLoop());
    }


}

export default GameView;