// All Entities class
class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }
    // Draw the images on the screen method with x and y coordinates
    render() {
            ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
        }
    }

    // Enemy class
class Enemy extends Entity {
    constructor(x, y){
        super();
        this.sprite += 'enemy-bug.png';
        this.x = x;
        this.y = y;
    }
}

// Place all enemy objects in an array called allEnemies
// Enemies our player must avoid
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

const allEnemies = [...Array(3)].map((_, i) => new Enemy(0, i + 1, 'Rock.png'));


Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Entity {
    constructor(x, y) {
        /* this.x = 0;
        this.y = 0; */
        super();
        this.sprite = 'images/char-boy.png';
    }
}

// Place the player object in a variable called player
const player = new Player();



// Now instantiate your objects.





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
