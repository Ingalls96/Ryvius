const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 32) {
  collisionsMap.push(collisions.slice(i, 32 + i));
}

class Boundary {
  static width = 64;
  static height = 64;
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw() {
    ctx.fillStyle = "rgba(255, 0, 0, 0.2";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const boundaries = [];
const offset = {
  x: -675,
  y: -250,
};

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
      if (symbol === 7050)
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

const image = new Image();
image.src = "./img/Map1.png";

const playerImage = new Image();
playerImage.src = "./img/player.png";

ctx.imageSmoothingEnabled = false;

class Sprite {
  constructor({ position, velocity, image, frames = { max: 1}}) {
    this.position = position;
    this.image = image;
    this.frames= frames;

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max
      this.height = this.image.height
      console.log(this.width)
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height,
    );
  }
}

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 382 / 12,
    y: canvas.height / 2 - 32 / 12
  },
  image: playerImage,
  currentFrame: 3,
  frames: {
    max: 12
  }
})

//ctx.drawImage(
  //playerImage,
  //96,
  //0,
  //32,
  //32,
  //canvas.width / 2 - playerImage.width / 12,
  //canvas.height / 2 - playerImage.height / 12,
  //64,
  //64
//);

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
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

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach(boundary => {
    boundary.draw();
  });
  drawPlayer(player, 2)

  let moving = true;
  if (keys.up.pressed && lastKey === "up") {
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
      movables.forEach(movable => {movable.position.y += 3}
  )}
  else if (keys.left.pressed && lastKey === "left") {
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
      movables.forEach(movable => {movable.position.x += 3}
  )}
  else if (keys.down.pressed && lastKey === "down") {
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
      movables.forEach(movable => {movable.position.y -= 3}
  )}
  else if (keys.right.pressed && lastKey === "right") {
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
      movables.forEach(movable => {movable.position.x -= 3}
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

function drawPlayer(player, scale = 1){
  const frameWidth = player.image.width / player.frames.max;
  const frameHeight = player.image.height;

  const frameX = 3 * frameWidth;

  const frameY = 0;

  ctx.drawImage(
    player.image,
    frameX,
    frameY,
    frameWidth,
    frameHeight,
    player.position.x,
    player.position.y,
    frameWidth * scale,
    frameHeight * scale
  );
}
