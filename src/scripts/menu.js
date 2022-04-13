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
    },

    startBackground(){
        const background = document.getElementById("game-canvas");
        background.className = "game-canvas start";
    },

    stopBackground(){
        const background = document.getElementById("game-canvas");
        background.className = "game-canvas stopped";
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