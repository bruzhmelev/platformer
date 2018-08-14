import { Player } from "../objects/Player";
import { Input, Physics, GameObjects } from 'phaser';

export class MainScene extends Phaser.Scene {
    // objects
    // objects
    private player!: GameObjects.Sprite;
    private spaceKey!: Input.Keyboard.Key;
    private upKey!: Input.Keyboard.Key;
    private cursor!: CursorKeys;

    constructor() {
      super({
        key: "MainScene"
      });
    }
  
    preload(): void {
        this.load.image('player', 'assets/player.png');
        this.load.image('wall', 'assets/wall.png');
        this.load.image('coin', 'assets/coin.png');
        this.load.image('enemy', 'assets/enemy.png');
    }
  
    create(): void {
        this.player = this.add.sprite(70, 100, 'player');
        // this.player = new Player(this, 70, 100, 'player');
        this.physics.world.enableBody(this.player);

        // Call the 'jump' function when the spacekey is hit
        this.spaceKey = this.input.keyboard.addKey(
            Input.Keyboard.KeyCodes.SPACE);
        
        this.upKey = this.input.keyboard.addKey(
            Input.Keyboard.KeyCodes.UP);

        // Variable to store the arrow key pressed
        this.cursor = this.input.keyboard.createCursorKeys();
    }

    update(): void {
        if(this.spaceKey.isDown) {
            // if (body.touching.down){
            // this.player.body.setVelocityY(-300);
            // }
        }
    }
  }