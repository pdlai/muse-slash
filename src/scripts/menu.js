const Menu = {

    eventHandler: function(e){
        if( e.target === document.getElementById("play-button") ){
            this.hideMainMenu();
            this.showPauseButton();
            this.showPlayer();
            return "play and render level";
        }
        if ( e.target === document.getElementById("pause-button") ){
            this.showPauseMenu();
            return "pause the game with this action here somehow";
        }
        if ( e.target === document.getElementById("main-menu-button") ){
            // something to pause the game here
            this.hidePauseMenu();
            this.hidePauseButton();
            this.showMainMenu();
            this.hidePlayer();
            return "redirect to main menu with this return action";
        }
    },

    showPlayer: function(){
        const game = document.getElementById("game-player");
        game.className = "game-player";
    },

    hidePlayer: function(){
        const game = document.getElementById("game-player");
        game.className = "game-player hidden";
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