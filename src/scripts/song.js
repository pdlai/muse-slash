import testSong from "./songs/test_song";
import test2Song from "./songs/test2_song";

const Song = {

    loadSong(song_name){
        switch (song_name){
            case 'test_song':
                return testSong;
            case 'test2_song':
                return test2Song;
            default:
                console.log('could not find song');
        }
    }

};

export default Song;



// class Song {

//     async loadMap(song_name){
//         switch (song_name){
//             case 'test_song':
//                 let thing1;
//                 let thing2 = await import('./songs/test_song').then( exports => {
//                     // console.log(exports.default);
//                     return thing1 = exports.default;
//                 });
//                 console.log(thing1);
//                 let thing3 = Object.assign({}, thing1)
//                 return JSON.parse(JSON.stringify(thing1));
//             case 'test2_song':
//                 import("./songs/test2_song");
//                 return;
//             default:
//                 console.log('could not find song');
//         }
//     }

// };



// export default Song;

