
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
        this.setupBoundaries();

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
        crosshair.src = "./assets/buttons/crosshair121.png";
        this.targets.push(crosshair);

        let layer0 = new Image();
        layer0.src = "./assets/background/Layer_0000_9.png";
        this.layers.push(layer0);

        let layer1 = new Image();
        layer1.src = "./assets/background/Layer_0001_8.png";
        this.layers.push(layer1);

        let layer2 = new Image();
        layer2.src = "./assets/background/Layer_0002_7.png";
        this.layers.push(layer2);

        let layer3 = new Image();
        layer3.src = "./assets/background/Layer_0003_6.png";
        this.layers.push(layer3);

        let layer4 = new Image();
        layer4.src = "./assets/background/Layer_0004_Lights.png";
        this.layers.push(layer4);

        let layer5 = new Image();
        this.layers.push(layer5);
        layer5.onload = () => {
            this.draw(this.ctx);
        }
        layer5.src = "./assets/background/Layer_0005_5.png";

        // let layer6 = new Image();
        // layer6.src = "./assets/background/Layer_0006_4.png";
        // this.layers.push(layer6);

        // let layer7 = new Image();
        // layer7.src = "./assets/background/Layer_0007_Lights.png";
        // this.layers.push(layer7);

        // let layer8 = new Image();
        // layer8.src = "./assets/background/Layer_0008_3.png";
        // this.layers.push(layer8);

        // let layer9 = new Image();    
        // layer9.src = "./assets/background/Layer_0009_2.png";
        // this.layers.push(layer9);

        // let layer10 = new Image();
        // layer10.src = "./assets/background/Layer_0010_1.png";
        // this.layers.push(layer10);

        // let layer11 = new Image();
        // layer11.src = "./assets/background/Layer_0011_0.png";
        // this.layers.push(layer11);
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
    for(let i = this.x.length-1; i >= 0; i--){

        if(this.width <= this.canvas.width){
            if(this.x[i] < 0){
                this.x[i] = this.width + this.x[i];        
            }
            if(this.x[i] < this.canvas.width){
                ctx.drawImage(this.layers[i], -this.width + this.x[i], 0, this.width, this.height);
            }
            if(this.x[i] < this.canvas.width + this.width){
                ctx.drawImage(this.layers[i], this.width + this.x[i], 0, this.width, this.height);
            }
        } else {
            // retest this else statement for adaptiveness
            if(this.x[i] > (this.canvas.width)){
                this.x[i] = this.width;
            }
            if(this.x[i] < this.width){
                ctx.drawImage(this.layers[i], this.x[i] - this.width + 1, 0, this.width, this.height);
            }
        }
        ctx.drawImage(this.layers[i], this.x[i], 0, this.width, this.height);

    }

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