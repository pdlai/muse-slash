import Menu from "./menu";
import Background from "./background";
import Game from "./game";

// throttle to 60 fps
const FPS = 60;

class GameView {
    constructor(game, ctx, canvas){
        this.game = game;
        this.ctx = ctx;
        this.canvas = canvas;

        this.setup();
    }

    // 928x793
    // 1392x793 1.5x width
    setup(){
        this.background = new Background(this.ctx, this.canvas);
        this.setClickEvent();
    }

    setClickEvent(){
        window.addEventListener('click', (e) =>{
            let action = Menu.eventHandler(e);
            if (action === "play-level"){
                this.game.play("brain_power");
                this.setKeyEvent();
                this.startGameLoop();
                this.game.music.play();
            }
            if (action === "pause"){
                this.removeKeyEvent();
                this.stopGameLoop();
                this.game.music.pause();
            }
            if (action === "resume"){
                this.setKeyEvent();
                this.startGameLoop();
                this.game.music.play();
            }
            if (action === "main-menu"){
                this.removeKeyEvent();
                this.stopGameLoop();
                this.game = new Game();
                this.drawNewGame();
            }
            if (action === "restart-level"){
                this.game = new Game();
                this.drawNewGame();
                this.game.play("brain_power");
                this.setKeyEvent();
                this.startGameLoop();
                this.game.music.play();
            }
        });
    }

    startGameLoop(){
        this.fpsInterval = 1000 / FPS;
        this.then = Date.now();
        this.startTime = this.then;
        this.gameLoop();
    }
    
    gameLoop(){
        this.requestId = requestAnimationFrame(this.gameLoop.bind(this));

        this.now = Date.now();
        this.elapsed = this.now - this.then;

        if (this.elapsed > this.fpsInterval){
            this.then = this.now - (this.elapsed % this.fpsInterval);

            if (this.gameLose()){
                this.removeKeyEvent();
                Menu.hidePauseButton();
                Menu.showLoseMenu();
                Menu.stopBackground();
                this.game.music.pause();
                this.game.movePlayer();
                this.drawDeath();
            } else {
                if (this.gameWin()){
                    this.removeKeyEvent();
                    Menu.hidePauseButton();
                    Menu.showWinMenu();
                    this.game.music.pause();
                }
                this.updateStep();
                this.draw();
            }
        }
    }

    stopGameLoop(){
        cancelAnimationFrame(this.requestId);
    }

    gameWin(){
        let last_note_index = this.game.songMap.length-1;
        let last_note = this.game.songMap[last_note_index];
        if (last_note.x <= -last_note.scaledWidth * 20){
            return true;
        }
        return false;
    }

    gameLose(){
        if (this.game.lives <= 0) {
            if ( this.game.player.state !== "death" ){
                this.game.player.changeState("death");
            }
            return true;
        }
        return false;
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

    updateStep(){
        this.game.moveNotes();
        this.game.movePlayer();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw(this.ctx);
        this.game.songMap.forEach( note => {
            note.draw(this.ctx);
        })
        this.game.player.draw(this.ctx);
        this.game.drawScore(this.ctx);
    }

    drawDeath(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw(this.ctx);
        this.game.player.draw(this.ctx);
        this.game.drawScore(this.ctx);
    }

    drawNewGame(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw(this.ctx);
    }

}

export default GameView;