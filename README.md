# MuseSlash
MuseSlash is a fast paced music rhythm game where you hit notes that appear on the screen to score points. Notes will appear on the right side of the screen and slide towards the left. Missing too many notes will cause you to lose the game.

**Live Link:** [Muse SLash Demo](https://pdlai.github.io/muse-slash/)

## Features and MVPs
- Will have a clickable view to start game, adjust the volume, view instructions
- At least once playable song with regular notes and slide notes
- Keeps track of current score and lives

In addition
- animations and sprites for hitting correct notes
- An About model describing the background and rules of the game
- A production README

## WireFrames

<img src="https://github.com/pdlai/muse-slash/blob/main/wireframe.png"></img>

- Nav links include links to Github repo, LinkedIn and AngelList, and the About modal.
- Game controls will be included in background until game start.
- Health Bar will show a guage that decreases as health is lost.
- Displays current score and highest score.
- Menu will have restart, pause, and menu
- Sound can be mute/unmute
- Drop menu and adjustable sound bar (bonus)

## Technologies
- Javascript
- Particles.js
- Anime.js

## Implementation Timeline
- Friday and Weekend: Set up webpack, draw some elements on canvas, html elements for all the clickable buttons, figure out game logic
- Monday: Game logic for single notes and slide notes, mapping level
- Tuesday: Stylization, adding animation sprites
- Wednesday: Fix broken stuff
- Thursday: Deploy to Github pages
