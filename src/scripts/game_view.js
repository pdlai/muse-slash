

class GameView {
    constructor(game, canvas){
        this.game = game;
        this.canvas = canvas;
        this.setup();
    }

    setup(){
        this.setWindowResize();
    }


    // resize erases canvas, will have to call redraw after
    setWindowResize(){
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        })
    }
}

export default GameView;