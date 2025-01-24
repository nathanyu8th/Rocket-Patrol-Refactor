/**
 * Nathan Yu
 * Rocket Patrol Refactor Remake
 * 3 hours
 * 1PT: Tracking High Score
 * 1PT: Allowing player to control Rocket after fired
 * 3PT: Display time remaining
 * 5PT: New enemy Spaceship type
 * 5PT: New timing/scoring mechanism based on hit/miss
 * 5PT: Added particle emitter
 * 
 */

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)

let borderUISize = game.config.height /15;
let borderPadding = borderUISize/ 3;

//key bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT;