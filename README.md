# MuseSlash
MuseSlash is a fast-paced music rhythm game where you hit notes to the beat of the music to score points. Notes will appear on the right side of the screen and slide towards the left. Missing too many notes will cause you to lose the game.

**Live Link:** [Muse Slash](https://pdlai.github.io/muse-slash/)
<br>
<br>
<p align="center">
  <img src="https://github.com/pdlai/muse-slash/blob/main/muse_slash_demo_large.gif" alt="muse-slash-gif"></a></img>
</p>

## Unique Challenges
### FPS Throttling
The method `requestAnimationFrame` is called on every frame refresh. This means that the animation will run faster on monitors with higher frames per second. To solve this, we first calculate the interval of time in milleseconds that needs to pass before we call the next frame. Once the interval of time has passed, we add any extra elapsed time towards the next time interval.

```javascript
startGameLoop(){
    this.fpsInterval = 1000 / FPS;
    this.then = Date.now();
    this.startTime = this.then;
    this.gameLoop();
}

gameLoop(){
    this.requestId = requestAnimationFrame(this.gameLoop.bind(this));

    this.now = Date.now();
    this.elapsed = this.now - this.then;

    if (this.elapsed > this.fpsInterval){
        this.then = this.now - (this.elapsed % this.fpsInterval);
        
        // draw stuff here
    }
}
```

### Song Mapping
I used musical notation in order to structure the notes in sets of 8 beats (an 8-count). In the snippet below, we are in the 17th 8-count and each note can be a step from 1 through 8. By using this organization, we only need to change the BPM (beats per minute) in order to calculate the new speed of a different song.
```javascript
const brainPower = {
  bpm: 170,
  layout: [
    { count: 17, step: 1, zone: "bot", slide: 2},
    { count: 17, step: 3, zone: "top"},
    { count: 17, step: 3.33, zone: "top"},
    { count: 17, step: 3.66, zone: "top"},
    { count: 17, step: 4, zone: "top"},
    { count: 17, step: 4.5, zone: "top"},
    { count: 17, step: 5, zone: "bot"},
    { count: 17, step: 5.66, zone: "bot"},
    { count: 17, step: 6.33, zone: "bot"},
    { count: 17, step: 7, zone: "top"},
    { count: 17, step: 7.25, zone: "top"},
    { count: 17, step: 7.5, zone: "top"},
    { count: 17, step: 7.75, zone: "top"},
    { count: 17, step: 8, zone: "top", slide: 1}
    
    // 37 eight counts
    // 104 seconds song duration
    // 2.8108 seconds per eight count
    // lets say travel distance is 3000 pixels for each note
    // travel 3000px in 2.8108 sceonds, is 1067.31 px/second
    // 60fps, 17.788 pixels per frame movement
    // 120fps, 17.788 divide by 2
  ]
}
```

## Technologies
- Vanilla Javascript
- Webpack
- Babel

## Future Plans
- Add slider notes that you have to hold for a duration
- Animations for when two notes are hit at the same time
- Animated health bar
- Combo tracker

## Credit
- This game was inspired by [Muse Dash](https://store.steampowered.com/app/774171/Muse_Dash/) developed by PeroPeroGames.
- [LuizMelo](https://luizmelo.itch.io/) for character sprites
- [ansimuz](https://ansimuz.itch.io/) for monster sprites
- [Eder Muniz](https://edermunizz.itch.io/) for background art
