class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.player = document.getElementById("user-player");
        this.player.className = "user-player run";
    }
}

export default Player;