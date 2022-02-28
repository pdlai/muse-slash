
const NOTE_SCALE_RATIO = 2;
const NOTE_DISTANCE_PER_COUNT = 800;
const NOTE_DISTANCE_PER_STEP = NOTE_DISTANCE_PER_COUNT / 8;
const NOTE_SPEED = 5;
// ideally replace distance with canvas width
const NOTE_SPAWN_DISTANCE = 200;

class Note {
    constructor(args){
        this.zone = args['zone'];
        this.count = args['count'];
        this.step = args['step'];
        this.slide = args['slide'];
        this.vel = NOTE_SPEED;
        this.x = NOTE_SPAWN_DISTANCE + (NOTE_DISTANCE_PER_COUNT * this.count) + (this.step * NOTE_DISTANCE_PER_STEP);
        if ( this.zone = "top"){
            this.y = 200;
        } else {
            this.y = 400;
        }
    }
}

export default Note;