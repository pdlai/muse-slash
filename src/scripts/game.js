import Key from "./key";
import Player from "./player";
import Song from "./song";
import Note from "./note";

const PERFECT_MARGIN = 0.012;
const GREAT_MARGIN = 0.038;
const HITBOX_PLACEMENT = 5;

class Game {
    constructor(){
        this.started = false;
        this.songMap = [];
        this.score = 0;
        this.lives = 50;

        // keep track of first clickevent only
        this.firedD = false;
        this.firedF = false;
        this.firedJ = false;
        this.firedK = false;
        this.player = new Player(this.canvas);

        this.hitSound = new Audio("./assets/sounds/slap.wav");
        this.hitSound.volume = 1;
        this.music = new Audio("./assets/sounds/brain_power_song.mp3");
        this.music.volume = 0.5;
    }

    play(song_name){
        this.setGameParams();
        let song = Song.loadSong(song_name);
        this.mapSong(song);
        this.started = true;
    }

    // for scalability later
    setGameParams(){
        this.canvas = document.getElementById("game-canvas");
    }

    // mapping out all notes before game start, so less lag
    mapSong(song){
        song.layout.forEach( (ele) => {
            let note = new Note(ele);
            this.songMap.push(note);
        });
    }

    moveNotes(){
        this.songMap.forEach( note => {
            note.move();
            if (note.x + note.width/2 < (this.canvas.width / HITBOX_PLACEMENT) - (this.canvas.width * GREAT_MARGIN)){
                if(!note.hurtPlayer && !note.dead){
                    this.lives--;
                    this.player.changeState("damaged");
                    note.hurtPlayer = true;
                }
            }
        })
        
        // update the lives thing somehow later
        // console.log(this.lives);
    }

    movePlayer(){
        this.player.move();
    }

    checkKeyEvent(e){
        if(e.code == "KeyD"){
            if(e.type == "keydown"){
                if(!this.firedD){
                    this.firedD = true;
                    this.player.changeState("attack", true);
                    this.checkHitBoxes("top");
                    return;
                }
            }
            if(e.type == "keyup"){
                this.firedD = false;
                return;
            }
        }
        if(e.code == "KeyF"){
            if(e.type == "keydown"){
                if(!this.firedF){
                    this.firedF = true;
                    this.player.changeState("attack", true);
                    this.checkHitBoxes("top");
                    return;
                }
            }
            if(e.type == "keyup"){
                this.firedF = false;
                return;
            }
        }
        if(e.code == "KeyJ"){
            if(e.type == "keydown"){
                if(!this.firedJ){
                    this.firedJ = true;
                    this.player.changeState("attack", false);
                    this.checkHitBoxes("bot");
                    return;
                }
            }
            if(e.type == "keyup"){
                this.firedJ = false;
                return;
            }
        }
        if(e.code == "KeyK"){
            if(e.type == "keydown"){
                if(!this.firedK){
                    this.firedK = true;
                    this.player.changeState("attack", false);
                    this.checkHitBoxes("bot");
                    return;
                }
            }
            if(e.type == "keyup"){
                this.firedK = false;
                return;
            }
        }
    }

    checkHitBoxes(zone){
        for(let i = 0; i < this.songMap.length; i++){
            if(this.songMap[i].zone === zone){
                let note = this.songMap[i];
                if(note.dead) continue;
                // remove element for now
                // alter set to death animation later
                if( note.x + note.scaledWidth/2 >= (this.canvas.width / HITBOX_PLACEMENT) - (this.canvas.width * PERFECT_MARGIN) &&
                    note.x + note.scaledWidth/2 <= (this.canvas.width / HITBOX_PLACEMENT) + (this.canvas.width * PERFECT_MARGIN) ){  
                        note.dead = true;
                        this.hitSound.currentTime = 0;
                        this.hitSound.play();
                        note.velY = 10;
                        this.score += 1000;
                        return;
                }
                if( note.x + note.scaledWidth/2 >= (this.canvas.width / HITBOX_PLACEMENT) - (this.canvas.width * GREAT_MARGIN) &&
                    note.x + note.scaledWidth/2 <= (this.canvas.width / HITBOX_PLACEMENT) + (this.canvas.width * GREAT_MARGIN) ){
                        note.dead = true;
                        this.hitSound.currentTime = 0;
                        this.hitSound.play();
                        note.velY = 10;
                        this.score += 10;
                        return;
                }
            }
        }
    }
}



export default Game;