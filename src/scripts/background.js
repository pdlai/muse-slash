
const BACKGROUND_SPEED = 5;
const BACKGROUND_SCALE_RATIO = 1;

class Background {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.layers = [];
        this.loadLayers();
        this.canvas.height = this.layers[0].height;
        this.canvas.width = this.layers[0].width*1.5;
        this.width = this.layers[0].width * BACKGROUND_SCALE_RATIO;
        this.height = this.layers[0].height * BACKGROUND_SCALE_RATIO;
        this.x = 0;
        this.clearX = 0;
        this.clearY = 0;
        if(this.width > this.canvas.width){
            this.x = this.canvas.width - this.width;
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

        // let layer1 = new Image();
        // layer1.src = "./assets/background/Layer_0001_8.png";
        // this.layers.push(layer1)

        // let layer2 = new Image();
        // layer2.src = "./assets/background/Layer_0002_7.png";
        // this.layers.push(layer2)

        // let layer3 = new Image();
        // layer3.src = "./assets/background/Layer_0003_6.png";
        // this.layers.push(layer3)

        // let layer4 = new Image();
        // layer4.src = "./assets/background/Layer_0004_Lights.png";
        // this.layers.push(layer4)

        // let layer5 = new Image();
        // layer5.src = "./assets/background/Layer_0005_5.png";
        // this.layers.push(layer5)

        // let layer6 = new Image();
        // layer6.src = "./assets/background/Layer_0006_4.png";
        // this.layers.push(layer6)

        // let layer7 = new Image();
        // layer7.src = "./assets/background/Layer_0007_Lights.png";
        // this.layers.push(layer7)

        // let layer8 = new Image();
        // layer8.src = "./assets/background/Layer_0008_3.png";
        // this.layers.push(layer8)

        // let layer9 = new Image();    
        // layer9.src = "./assets/background/Layer_0009_2.png";
        // this.layers.push(layer9)

        // let layer10 = new Image();
        // layer10.src = "./assets/background/Layer_0010_1.png";
        // this.layers.push(layer10)

        // let layer11 = new Image();
        // layer11.src = "./assets/background/Layer_0011_0.png";
        // this.layers.push(layer11)
    }
}

Background.prototype.move = function(){
    this.x -= BACKGROUND_SPEED;
}

Background.prototype.draw = function(ctx){
    if(this.width <= this.canvas.width){
        if(this.x < 0){
            this.x = this.width + this.x;        
        }
        if(this.x < this.canvas.width){
            ctx.drawImage(this.layers[0], -this.width + this.x, 0, this.width, this.height);
        }
        if(this.x < this.canvas.width + this.width){
            ctx.drawImage(this.layers[0], this.width + this.x, 0, this.width, this.height);
        }
    } else {
        // retest this else statement for adaptiveness
        if(this.x > (this.canvas.width)){
            this.x = this.width;
        }
        if(this.x < this.width){
            ctx.drawImage(this.layers[0], this.x - this.width + 1, 0, this.width, this.height);
        }
    }
    ctx.drawImage(this.layers[0], this.x, 0, this.width, this.height);
}

export default Background;