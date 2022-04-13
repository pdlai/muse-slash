import Key from "./key";
import Player from "./player";
import Song from "./song";
import Note from "./note";

const PERFECT_MARGIN = 0.024;
const GREAT_MARGIN = 0.052;
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

        this.hitSound = new Audio("./assets/sounds/slap1.wav");
        this.hitSound.volume = 0.35;
        this.music = new Audio("./assets/sounds/brain_power_song.mp3");
        this.music.volume = 0.35;
        this.setVolumeEvent();
    }

    play(song_name){
        this.setGameParams();
        let song = Song.loadSong(song_name);
        this.mapSong(song);
        this.started = true;
    }

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
            if (note.x + note.scaledWidth/2 < (this.canvas.width / HITBOX_PLACEMENT) - (this.canvas.width * GREAT_MARGIN)){
                if(!note.hurtPlayer && !note.dead){
                    this.lives--;
                    this.player.changeState("damaged");
                    note.hurtPlayer = true;
                }
            }
            note.move();
        })
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

                if( note.x + note.scaledWidth/2 >= (this.canvas.width / HITBOX_PLACEMENT) - (this.canvas.width * PERFECT_MARGIN) &&
                    note.x + note.scaledWidth/2 <= (this.canvas.width / HITBOX_PLACEMENT) + (this.canvas.width * PERFECT_MARGIN) ){  
                        note.dead = true;
                        this.hitSound.currentTime = 0;
                        this.hitSound.play();
                        if(note.zone === "top"){
                            note.velY = 20;
                        } else {
                            note.velY = 15;
                        }
                        this.score += 100;
                        return;
                }
                if( note.x + note.scaledWidth/2 >= (this.canvas.width / HITBOX_PLACEMENT) - (this.canvas.width * GREAT_MARGIN) &&
                    note.x + note.scaledWidth/2 <= (this.canvas.width / HITBOX_PLACEMENT) + (this.canvas.width * GREAT_MARGIN) ){
                        note.dead = true;
                        this.hitSound.currentTime = 0;
                        this.hitSound.play();
                        if(note.zone === "top"){
                            note.velY = 20;
                        } else {
                            note.velY = 15;
                        }
                        this.score += 50;
                        return;
                }
            }
        }
    }
    
    setVolumeEvent(){
        let volume = document.getElementById("volume-slider");
        volume.addEventListener("change", (e) => {
            this.hitSound.volume = e.currentTarget.value / 100;
            this.music.volume = e.currentTarget.value / 100;
        })
    }

    drawScore(ctx){
        ctx.fillStyle = "whitesmoke";
        ctx.font = "28px Press Start twoP";
        ctx.fillText("Score: ", 10, 50);
        ctx.fillText("Life: ", 10, 100);
        ctx.fillText(this.score, 200, 50);
        ctx.fillText(this.lives, 200, 100);
    }
}



export default Game;