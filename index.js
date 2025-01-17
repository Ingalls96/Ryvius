const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 32) {
  collisionsMap.push(collisions.slice(i, 32 + i)); //gathers each row of the map 32x32 map
}

const boundaries = [];
const offset = {
  x: -675,
  y: -250,
};

collisionsMap.forEach((row, i) => {   //creates a new Boundary for each spot in the map with a collision value
    row.forEach((symbol, j) => {
      if (symbol === 14730)
        boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width + offset.x,
              y: i * Boundary.height + offset.y
            }
          })
        )
    })
  })

const image = new Image()
image.src = "./img/crendale.png";

const playerImage = new Image();
playerImage.src = "./img/sprites.png";

ctx.imageSmoothingEnabled = false; //for ody sprite details
const odySprite = 22


const player = new Sprite({
  position: {
    x: canvas.width / 2 - 384 / 12,
    y: canvas.height / 2 - 32 / 12
  },
  image: playerImage,
  currentFrame: 3,
  imageHeight: 204, //This is for the Sprite sheet, it has 204 rows.
  spriteSelector: odySprite * 32, //Used for selecting which sprite to use
  frames: {
    max: 12,
  },
  scale: 2,
  direction: {playerUp: false, playerLeft: false, playerDown: false, playerRight: false} //This will be used for animation movement
})


const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
  scale: 2
});

const keys = {
  up: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
  right: {
    pressed: false,
  },
};

const movables = [background, ...boundaries]

function rectangularCollision({rectangle1, rectangle2}){
  return(
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  )
}

const movementSpeed = 1;
const tileSize = 48;

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach(boundary => {
    boundary.draw();
  });
  player.draw()
  let moving = true;
  player.moving = false
  if (keys.up.pressed && lastKey === "up") {
    console.log('pressed')
    if(!player.direction.playerUp){
      player.direction = { playerUp: true, playerLeft: false, playerDown: false, playerRight: false };
    }
    player.moving = true
    for(let i = 0; i < boundaries.length; i ++){
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach(movable => {movable.position.y += movementSpeed}
  )}
  else if (keys.left.pressed && lastKey === "left") {
    if(!player.direction.playerLeft){
      player.direction = { playerLeft: false, playerLeft: true, playerDown: false, playerRight: false };
    }
    player.moving = true
    for(let i = 0; i < boundaries.length; i ++){
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y 
            }
          }
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach(movable => {movable.position.x += movementSpeed}
  )}
  else if (keys.down.pressed && lastKey === "down") {
    if(!player.direction.playerDown){
      player.direction = { playerDown: false, playerLeft: false, playerDown: true, playerRight: false };
    }
    player.moving = true
    for(let i = 0; i < boundaries.length; i ++){
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach(movable => {movable.position.y -= movementSpeed}
  )}
  else if (keys.right.pressed && lastKey === "right") {
    if(!player.direction.playerRight){
      player.direction = { playerRight: false, playerLeft: false, playerDown: false, playerRight: true };
    }
    player.moving = true
    for(let i = 0; i < boundaries.length; i ++){
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach(movable => {movable.position.x -= movementSpeed}
  )}
}
animate();

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      keys.up.pressed = true;
      lastKey = "up";
      break;
    case "ArrowLeft":
      keys.left.pressed = true;
      lastKey = "left";
      break;
    case "ArrowDown":
      keys.down.pressed = true;
      lastKey = "down";
      break;
    case "ArrowRight":
      keys.right.pressed = true;
      lastKey = "right";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      keys.up.pressed = false;
      break;
    case "ArrowLeft":
      keys.left.pressed = false;
      break;
    case "ArrowDown":
      keys.down.pressed = false;
      break;
    case "ArrowRight":
      keys.right.pressed = false;
      break;
  }
});
