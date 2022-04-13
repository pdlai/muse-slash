const Display = {

    arrangeDisplay: function(){
        this.canvas = document.getElementById("game-canvas");
        // add delay to get dimensions after CSS updates
        setTimeout(this.arrangeMainMenu.bind(this), 10);
    },

    arrangeMainMenu: function(){
        // console.log(canvas.top, canvas.right, canvas.bottom, canvas.left);

        let playButton = document.getElementById("play-button");
        let posX = Math.floor(this.canvasRect.left + ( (this.canvas.width - playButton.getBoundingClientRect().width) / 2)).toString().concat("px");
        let posY = Math.floor(this.canvasRect.top + ( (this.canvas.height - playButton.getBoundingClientRect().height) / 2)).toString().concat("px");
        playButton.style.left = posX;
        playButton.style.top = posY;

        let instructions = document.getElementById("instructions-text");
        posX = Math.floor(this.canvasRect.left + ( (this.canvas.width - instructions.getBoundingClientRect().width) / 8)).toString().concat("px");
        posY = Math.floor(this.canvasRect.top + ( (this.canvas.height - instructions.getBoundingClientRect().height) / 2.5)).toString().concat("px");

        instructions.style.left = posX;
        instructions.style.top = posY;

        let keyD = document.getElementById("d-key");

        let tempX = (this.canvasRect.left + ( (this.canvas.width - keyD.getBoundingClientRect().width) / 20) );
        let tempY = (this.canvasRect.top + ( (this.canvas.height - keyD.getBoundingClientRect().height) / 5.2) );

        keyD.style.left = Math.floor(tempX-20).toString().concat("px");
        keyD.style.top = Math.floor(tempY).toString().concat("px");

        let keyF = document.getElementById("f-key");
        keyF.style.left = Math.floor(tempX+15).toString().concat("px");
        keyF.style.top = Math.floor(tempY).toString().concat("px");

        let keyJ = document.getElementById("j-key");
        keyJ.style.left = Math.floor(tempX-20).toString().concat("px");
        keyJ.style.top = Math.floor(tempY+110).toString().concat("px");

        let keyK = document.getElementById("k-key");
        keyK.style.left = Math.floor(tempX+15).toString().concat("px");
        keyK.style.top = Math.floor(tempY+110).toString().concat("px");

        
    }
}

export default Display;