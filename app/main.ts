import { AUTO, Game } from 'phaser';
import { MainScene } from "./scenes/mainScene";

var config = {
    type: AUTO,
    width: 500,
    height: 200,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: MainScene,
    backgroundColor: '#3598db'
};

var game = new Game(config);
 // Create the state that will contain the whole game

function preload( ) {  
    // Here we preload the assets
    this.load.image('player', 'assets/player.png');
    this.load.image('wall', 'assets/wall.png');
    this.load.image('coin', 'assets/coin.png');
    this.load.image('enemy', 'assets/enemy.png');
}

// Create.GenerateTexture(new Genera)

function create() {  
    // Start the Arcade physics system (for movements and collisions)
    // this.physics.startSystem(Phaser.Physics.ARCADE);

    

    // // Add the physics engine to all game objects
    // this.world.enableBody = true;

    // // Call the 'jump' function when the spacekey is hit
    // var spaceKey = this.input.keyboard.addKey(
    //     Phaser.Keyboard.SPACEBAR);
    // spaceKey.onDown.add(jump, this);

    // var spaceKey = this.input.keyboard.addKey(
    //     Phaser.Keyboard.UP);
    // spaceKey.onDown.add(jump, this);

    // // Variable to store the arrow key pressed
    // this.cursor = this.input.keyboard.createCursorKeys();

    // // Create the player in the middle of the game
    this.player = this.add.sprite(70, 100, 'player');


    // // Create 3 groups that will contain our objects
    // this.walls = this.add.group();
    // this.coins = this.add.group();
    // this.enemies = this.add.group();

    // // Design the level. x = wall, o = coin, ! = lava.
    // var level = [
    //     'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    //     '!         !                     o o o o o   o o o o o   o o o o o   o o o o o   o o o o o   x',
    //     '!                 o  x      x   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx            xxxxxxxxxxxx  xxx',
    //     '!         o          x     xx                !               !                   !          x',
    //     '!                    x     !x                                                               x',
    //     '!     o   !    x     x          x     !             !                  !                  ! x',
    //     'xxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x',
    //     '!     o   !    x     x                                                                      x',
    //     '!     o   !    x     x                                                                      x',
    //     '!     o   !    x     x                                                                      x',
    //     'xxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x',
    // ];

    // // Create the level by going through the array
    // for (var i = 0; i < level.length; i++) {
    //     for (var j = 0; j < level[i].length; j++) {

    //         // Create a wall and add it to the 'walls' group
    //         if (level[i][j] == 'x') {
    //             var wall = this.add.sprite(30+20*j, 30+20*i, 'wall');
    //             this.walls.add(wall);
    //             wall.body.immovable = true; 
    //         }

    //         // Create a coin and add it to the 'coins' group
    //         else if (level[i][j] == 'o') {
    //             var coin = this.add.sprite(30+20*j, 30+20*i, 'coin');
    //             this.coins.add(coin);
    //         }

    //         // Create a enemy and add it to the 'enemies' group
    //         else if (level[i][j] == '!') {
    //             var enemy = this.add.sprite(30+20*j, 30+20*i, 'enemy');
    //             this.enemies.add(enemy);
    //         }
    //     }
    // }
}

function update() {  
    // Here we update the game 60 times per second

    // Move the player when an arrow key is pressed
    // if (this.cursor.left.isDown) {
    //     this.player.body.velocity.x = -200;
    // }
    // else if (this.cursor.right.isDown) {
    //     this.player.body.velocity.x = 200;
    // }
    // else {
    //     this.player.body.velocity.x = 0;
    // }             

    // // Make the player and the walls collide
    // this.physics.arcade.collide(this.player, this.walls);

    // // Call the 'takeCoin' function when the player takes a coin
    // this.physics.arcade.overlap(this.player, this.coins, takeCoin, null, this);

    // // Call the 'restart' function when the player touches the enemy
    // this.physics.arcade.overlap(this.player, this.enemies, restart, null, this);
}

// Function to kill a coin
// function takeCoin(player, coin) {
//     coin.kill();
// }

// Function to restart the game
function restart() {
    this.state.start('main');
}

// Make the bird jump 
function jump() {
    // Make the player jump if he is touching the ground
    if (this.player.body.touching.down){
        this.player.body.velocity.y = -300;
    }
}