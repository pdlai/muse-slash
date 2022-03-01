import Key from "./key";
import Player from "./player";
import Song from "./song";
import Note from "./note";

class Game {
    constructor(){
        this.started = false;
        this.songMap = [];
    }

    play(song_name){
        const player = new Player();
        let song = Song.loadSong(song_name);
        //something to play music here
        this.mapSong(song);
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
        })
    }

    checkHitBoxes(e){
        console.log(e.code);
        console.log(e.type);
    }
}



export default Game;