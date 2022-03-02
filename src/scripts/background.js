
const BACKGROUND_SPEED = 5;
const BACKGROUND_SPEED_TWO = 4;
const BACKGROUND_SPEED_THREE = 3;
const BACKGROUND_SPEED_FOUR = 2
const BACKGROUND_SCALE_RATIO = 1;

// delete later
const PERFECT_MARGIN = 0.011;
const GREAT_MARGIN = 0.028;

class Background {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.layers = [];
        this.loadLayers();

        this.canvas.height = this.layers[0].height * BACKGROUND_SCALE_RATIO;
        this.canvas.width = this.layers[0].width * BACKGROUND_SCALE_RATIO * 1.5;
        this.width = this.layers[0].width * BACKGROUND_SCALE_RATIO;
        this.height = this.layers[0].height * BACKGROUND_SCALE_RATIO;
        
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

        // there has to be a better way to wait for all images to load before drawing 
        let layer5 = new Image();
        layer5.onload = () => {
            this.layers.push(layer5);
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

// hardcore different speeds for background layers
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

    // draw hitbox ranges for testing
    let canvas = this.canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.rect((canvas.width / 5) - (canvas.width*GREAT_MARGIN), 0, 2*canvas.width*GREAT_MARGIN, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.rect((canvas.width / 5) - (canvas.width*PERFECT_MARGIN), 0, 2*canvas.width*PERFECT_MARGIN, canvas.height);
    ctx.stroke();
}

export default Background;