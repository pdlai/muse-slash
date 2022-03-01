const Menu = {

    eventHandler: function(e){
        if( e.target === document.getElementById("play-button") ){
            this.hideMainMenu();
            this.showPauseButton();
            this.startPlayer();
            this.startBackground();
            return "play-level";
        }
        if ( e.target === document.getElementById("pause-button") ){
            this.showPauseMenu();
            this.stopBackground();
            this.stopPlayer();
            return "pause";
        }
        if ( e.target === document.getElementById("resume-button") ){
            // something to pause the game here
            this.hidePauseMenu();
            this.startBackground();
            this.startPlayer();
            return "resume";
        }
        if ( e.target === document.getElementById("main-menu-button") ){
            // something to pause the game here
            this.hidePauseMenu();
            this.hidePauseButton();
            this.showMainMenu();
            this.hidePlayer();
            return "main-menu";
        }
    },

    startBackground(){
        const background = document.getElementById("game-canvas");
        background.className = "game-canvas start";
    },

    stopBackground(){
        const background = document.getElementById("game-canvas");
        background.className = "game-canvas stopped";
    },

    startPlayer: function(){
        const game = document.getElementById("user-player");
        game.className = "user-player run";
    },

    stopPlayer: function(){
        const game = document.getElementById("user-player");
        game.className = "user-player stopped";
    },

    hidePlayer: function(){
        const game = document.getElementById("user-player");
        game.className = "user-player hidden";
    },

    showMainMenu: function(){
        const mainMenu = document.getElementById("main-menu");
        mainMenu.className = "main-menu";
    },

    hideMainMenu: function(){
        const mainMenu = document.getElementById("main-menu");
        mainMenu.className = "main-menu hidden";
    },

    showPauseMenu: function(){
        const pauseMenu = document.getElementById("pause-menu");
        pauseMenu.className = "pause-menu";
    },

    hidePauseMenu: function(){
        const pauseMenu = document.getElementById("pause-menu");
        pauseMenu.className = "pause-menu hidden";
    },

    showPauseButton: function(){
        const pauseButton = document.getElementById("pause-button");
        pauseButton.className = "pause-button";
    },

    hidePauseButton: function(){
        const pauseButton = document.getElementById("pause-button");
        pauseButton.className = "pause-button hidden";
    }
}

export default Menu;