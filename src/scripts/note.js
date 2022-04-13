
const NOTE_SCALE_RATIO = 6;
const NOTE_DISTANCE_PER_COUNT = 2000;
const NOTE_DISTANCE_PER_STEP = NOTE_DISTANCE_PER_COUNT / 8;
// calculating crochet divided by distance per count
const NOTE_SPEED = (17.7884615384615)*(2/3);
// delay for the song
const NOTE_SPAWN_DISTANCE = -335;

const LOOP_DELAY = 8;

class Note {
    constructor(args){
        this.zone = args['zone'];
        this.count = args['count'];
        this.step = args['step'];
        this.slide = args['slide'];
        this.dead = false;
        this.hurtPlayer = false;
        this.image = new Image();
        this.velX = NOTE_SPEED;
        this.velY = 0;
        this.x = NOTE_SPAWN_DISTANCE + (NOTE_DISTANCE_PER_COUNT * this.count) + (this.step * NOTE_DISTANCE_PER_STEP);
        if ( this.zone === "top"){
            this.y = 420;
            this.image.src = './assets/enemies/ghost.png';
        } else {
            this.y = 596;
            this.image.src = './assets/enemies/frog.png';
        }
        this.frame = 0;
        // sprite has 3 frames, 16x16 
        this.numFrames = 3;
        this.frameWidth = 16;
        this.width = 16;
        this.height = 16;
        this.scaledWidth = this.width*NOTE_SCALE_RATIO;
        this.scaledHeight = this.height*NOTE_SCALE_RATIO;
        this.loopIndex = 0;
    }
}

Note.prototype.move = function(){
    this.x -= this.velX;
    if(this.dead){
        this.y -= this.velY;

        if(this.y < 2000){
            this.velY--;
            this.velY--;
        } else {
            this.velY = 0;
        }
    }
}

Note.prototype.draw = function(ctx){
    if(this.x > 2200 || this.x < -this.scaledWidth) return;
    ctx.drawImage(this.image, this.frame*this.frameWidth, 0, this.width, this.height,
                  this.x, this.y, this.width*NOTE_SCALE_RATIO, this.height*NOTE_SCALE_RATIO);
    this.loopIndex++;
    if (this.loopIndex > LOOP_DELAY){
        this.frame++;
        if (this.frame >= this.numFrames) this.frame = 0;
        this.loopIndex = 0;
    }
}

export default Note;