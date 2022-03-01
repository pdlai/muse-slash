import Game from "./scripts/game";
import GameView from "./scripts/game_view"

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    document.getElementById("test2").onclick = function(){
      document.getElementById("test2").style.display  = 'none';
    }

    let game = new Game();
    let gameView = new GameView(game, ctx, canvas);

});