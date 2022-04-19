const Menu = {

    eventHandler: function(e){
        if( e.target === document.getElementById("play-button") ){
            this.hideMainMenu();
            this.showPauseButton();
            this.startBackground();
            return "play-level";
        }
        if ( e.target === document.getElementById("pause-button") ){
            this.showPauseMenu();
            this.stopBackground();
            return "pause";
        }
        if ( e.target === document.getElementById("resume-button") ){
            this.hidePauseMenu();
            this.startBackground();
            return "resume";
        }
        if ( e.target === document.getElementById("main-menu-button") ){
            this.hidePauseMenu();
            this.hidePauseButton();
            this.showMainMenu();
            return "main-menu";
        }
        if ( e.target === document.getElementById("restart-level-button") ){
            this.hidePauseMenu();
            this.startBackground();
            return "restart-level";
        }
        if ( e.target === document.getElementById("play-again-button") || 
             e.target === document.getElementById("play-again-button-2") ){
                this.hidePauseButton();
                this.stopBackground();
                this.showMainMenu();
                this.hideWinMenu();
                this.hideLoseMenu();
                return "main-menu";
        }
    },

    startBackground(){
        const backgrounds = document.getElementsByClassName("game-canvas");
        for (let i = 0; i < backgrounds.length; i++) {
            backgrounds[i].className = "game-canvas start";
        };
    },

    stopBackground(){
        const backgrounds = document.getElementsByClassName("game-canvas");
        for (let i = 0; i < backgrounds.length; i++) {
            backgrounds[i].className = "game-canvas stopped";
        };
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
    },

    showWinMenu: function(){
        const winMessage = document.getElementById("win-message-container");
        winMessage.className = "win-message-container";
    },

    hideWinMenu: function(){
        const winMessage = document.getElementById("win-message-container");
        winMessage.className = "win-message-container hidden";
    },

    showLoseMenu: function(){
        const loseMessage = document.getElementById("lose-message-container");
        loseMessage.className = "lose-message-container";
    },

    hideLoseMenu: function(){
        const loseMessage = document.getElementById("lose-message-container");
        loseMessage.className = "lose-message-container hidden";
    },
}

export default Menu;