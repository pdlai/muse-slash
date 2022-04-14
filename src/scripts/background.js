
const BACKGROUND_SPEED = 10;
const BACKGROUND_SPEED_TWO = 8;
const BACKGROUND_SPEED_THREE = 6;
const BACKGROUND_SPEED_FOUR = 4;
const BACKGROUND_SCALE_RATIO = 1;
const CROSSHAIR_OFFSET = 10;
const BACKGROUND_WIDTH = 928;
const BACKGROUND_HEIGHT = 793;

const PERFECT_TEST = 0.024;
const GREAT_TEST = 0.052;
const PERFECT_MARGIN = 0.012;
const GREAT_MARGIN = 0.034;
const HITBOX_PLACEMENT = 5;

class Background {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.layers = [];
        this.targets = [];

        this.loadLayers();

        this.width = BACKGROUND_WIDTH * BACKGROUND_SCALE_RATIO;
        this.height = BACKGROUND_HEIGHT * BACKGROUND_SCALE_RATIO;

    }

    setupBoundaries(){
        this.x = [];
        this.clearX = 0;
        this.clearY = 0;
        if(this.width > this.canvas.width){
            for(let i = 0; i < this.layers.length; i++){
                this.x.push(this.canvas.width - this.width);
            }
        } else {
            for(let i = 0; i < this.layers.length; i++){
                this.x.push(0);
            }
        }
        if(this.width > this.canvas.width){
            this.clearX = this.width;
        } else {
            this.clearX = this.canvas.width;
        }
        if(this.height > this.canvas.height){
            this.clearY = this.height;
        } else {
            this.clearY = this.canvas.height;
        }
    }

    loadLayers(){
        let topCircle = new Image();
        topCircle.src = "./assets/buttons/top_circle.png";
        this.targets.push(topCircle);

        let botCircle = new Image();
        botCircle.src = "./assets/buttons/bot_circle.png";
        this.targets.push(botCircle);

        let crosshair = new Image();
        this.targets.push(crosshair);
        crosshair.onload = () => {
            this.draw(this.ctx);
        }
        crosshair.src = "./assets/buttons/crosshair121.png";
    }
}

Background.prototype.move = function(){
    this.x[0] -= BACKGROUND_SPEED;
    this.x[1] -= BACKGROUND_SPEED_TWO;
    this.x[2] -= BACKGROUND_SPEED_THREE;
    this.x[3] -= BACKGROUND_SPEED_THREE;
    this.x[4] -= BACKGROUND_SPEED_FOUR;
    this.x[5] -= BACKGROUND_SPEED_FOUR;
}

Background.prototype.draw = function(ctx){
    // for(let i = this.x.length-1; i >= 0; i--){

    //     if(this.width <= this.canvas.width){
    //         if(this.x[i] < 0){
    //             this.x[i] = this.width + this.x[i];        
    //         }
    //         if(this.x[i] < this.canvas.width){
    //             ctx.drawImage(this.layers[i], -this.width + this.x[i], 0, this.width, this.height);
    //         }
    //         if(this.x[i] < this.canvas.width + this.width){
    //             ctx.drawImage(this.layers[i], this.width + this.x[i], 0, this.width, this.height);
    //         }
    //     } else {
    //         // retest this else statement for adaptiveness
    //         if(this.x[i] > (this.canvas.width)){
    //             this.x[i] = this.width;
    //         }
    //         if(this.x[i] < this.width){
    //             ctx.drawImage(this.layers[i], this.x[i] - this.width + 1, 0, this.width, this.height);
    //         }
    //     }
    //     ctx.drawImage(this.layers[i], this.x[i], 0, this.width, this.height);

    // }

    let canvas = this.canvas.getBoundingClientRect();
    
    // draw hitbox ranges for testing
    
    // ctx.beginPath();
    // ctx.strokeStyle = 'blue';
    // ctx.rect((canvas.width / HITBOX_PLACEMENT) - (canvas.width*GREAT_TEST), 0, 2*canvas.width*GREAT_TEST, canvas.height);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.strokeStyle = 'red';
    // ctx.rect((canvas.width / HITBOX_PLACEMENT) - (canvas.width*PERFECT_TEST), 0, 2*canvas.width*PERFECT_TEST, canvas.height);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.strokeStyle = 'red';
    // ctx.rect((canvas.width / 2) - 1, 0, 2, canvas.height);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.strokeStyle = 'red';
    // ctx.rect(0, (canvas.height/2)-1, canvas.width, 2);
    // ctx.stroke();

    ctx.drawImage(this.targets[0], (canvas.width / 5) - CROSSHAIR_OFFSET, 457, 2*CROSSHAIR_OFFSET, 2*CROSSHAIR_OFFSET);
    ctx.drawImage(this.targets[1], (canvas.width / 5) - CROSSHAIR_OFFSET, 651, 2*CROSSHAIR_OFFSET, 2*CROSSHAIR_OFFSET);
    
    ctx.filter = "brightness(70%)";
    ctx.drawImage(this.targets[2], (canvas.width / 5) - (canvas.width*PERFECT_MARGIN)-CROSSHAIR_OFFSET, 450-CROSSHAIR_OFFSET, 2*canvas.width*PERFECT_MARGIN + (2*CROSSHAIR_OFFSET), 2*canvas.width*PERFECT_MARGIN + (2*CROSSHAIR_OFFSET));
    ctx.drawImage(this.targets[2], (canvas.width / 5) - (canvas.width*PERFECT_MARGIN)-CROSSHAIR_OFFSET, 644-CROSSHAIR_OFFSET, 2*canvas.width*PERFECT_MARGIN + (2*CROSSHAIR_OFFSET), 2*canvas.width*PERFECT_MARGIN + (2*CROSSHAIR_OFFSET));
    ctx.filter = "brightness(100%)";

}

export default Background;