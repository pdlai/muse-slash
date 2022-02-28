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
        Key.setup();
        let song = Song.loadSong(song_name);
        //something to play music here
        this.mapSong(song);
    }

    // mapping out all notes before game start, so less lag
    mapSong(song){
        console.log(song.layout);
        song.layout.forEach( (ele, i) => {
            let note = new Note(ele);
            this.songMap.push(note);
        });
    }
}

export default Game;