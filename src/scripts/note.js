
const NOTE_SCALE_RATIO = 3;
const NOTE_DISTANCE_PER_COUNT = 800;
const NOTE_DISTANCE_PER_STEP = NOTE_DISTANCE_PER_COUNT / 8;
const NOTE_SPEED = 2;
// ideally replace distance with canvas width
const NOTE_SPAWN_DISTANCE = 200;

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
            this.y = 200;
            this.image.src = './assets/enemies/ghost.png';
        } else {
            this.y = 400;
            this.image.src = './assets/enemies/frog.png';
        }
        this.frame = 0;
        // sprite has 3 frames, 16x16 hard code
        this.numFrames = 3;
        this.frameWidth = 16;
        this.width = 16;
        this.height = 16;
        this.loopIndex = 0;
    }
}

Note.prototype.move = function(){
    this.x -= this.velX;
    if(this.dead){
        this.y -= this.velY;

        // change this later, find better way to delete
        if(this.y < 2000){
            this.velY--;
        } else {
            this.velY = 0;
        }
    }
}

Note.prototype.draw = function(ctx){
    if(this.x > 800) return;
    ctx.drawImage(this.image, this.frame*this.frameWidth, 0, this.width, this.height,
                  this.x, this.y, this.width*NOTE_SCALE_RATIO, this.height*NOTE_SCALE_RATIO);
    this.loopIndex++;
    if (this.loopIndex > 15){
        this.frame++;
        if (this.frame >= this.numFrames) this.frame = 0;
        this.loopIndex = 0;
    }
}

export default Note;