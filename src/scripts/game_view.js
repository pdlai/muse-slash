import Menu from "./menu";

class GameView {
    constructor(game, ctx){
        // loading and saving everything so runtime has less delay
        this.game = game;
        this.ctx = ctx;
        this.topNote = new Image();
        this.topNote.src = '../../assets/enemies/ghost.png'
        this.setup();
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
            }
            // console.log(e);
        });
    }

}

export default GameView;