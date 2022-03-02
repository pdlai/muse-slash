const Display = {

    // arranging html elements on canvas, change later to use in canvas elements

    arrangeDisplay: function(){
        this.canvas = document.getElementById("game-canvas");
        this.canvasRect = this.canvas.getBoundingClientRect();
        this.arrangeMainMenu();
    },

    arrangeMainMenu: function(){
        // console.log(canvas.top, canvas.right, canvas.bottom, canvas.left);
        let links = document.getElementById("professional-links");
        links.style.top = '60px';
        let playButton = document.getElementById("play-button");
        let pos = Math.floor(this.canvasRect.top + ( this.canvas.height / 6)).toString().concat("px");
        playButton.style.top = "0px";
        let instructions = document.getElementById("instructions-text");
        instructions.style.top = pos;
    }
}

export default Display;