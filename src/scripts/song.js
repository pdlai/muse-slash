import brainPower from "./songs/brain_power";
import test2Song from "./songs/test2_song";

const Song = {

    loadSong(song_name){
        switch (song_name){
            case 'brain_power':
                return brainPower;
            case 'test2_song':
                return test2Song;
            default:
                console.log('could not find song');
        }
    }

};

export default Song;

