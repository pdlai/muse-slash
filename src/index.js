import Game from "./scripts/game";
import GameView from "./scripts/game_view"

document.addEventListener("DOMContentLoaded", () => {
    // // make a new game
    // let game = new Game();
    // // use DOM selector to find element in the view in dist/index/html
    // const ttt = document.querySelector('.ttt')
    // const view = new View(game, ttt);
    // view.bindEvents();
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    // testing stuff delete later
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
    document.getElementById("test2").onclick = function(){
      document.getElementById("test2").style.display  = 'none';
    }

    let game = new Game();
    let gameView = new GameView(game, ctx);
  });