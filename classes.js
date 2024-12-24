class Boundary {
    static width = 48;
    static height = 48;
    constructor({ position }) {
      this.position = position;
      this.width = 48;
      this.height = 48;
    }
  
    draw() {
      ctx.fillStyle = "rgba(255, 0, 0, 0.0";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }

  class Sprite {
    constructor({ position, velocity, image, frames = { max: 1}, currentFrame = 0, scale = 1, imageHeight = 1, spriteSelector = 0}) {
      this.position = position;
      this.image = image;
      this.frames= {...frames, val :0, elapsed: 0};
      this.currentFrame = currentFrame;
      this.scale = scale;
      this.imageHeight = imageHeight;
      this.spriteSelector = spriteSelector; // this is created simply to pick which sprite to use from the sheet based on row
  
      this.image.onload = () => {
        this.width = this.image.width / this.frames.max
        this.height = this.image.height / this.imageHeight
      }
      this.moving = false
    }
  
    draw() {

        const frameWidth = this.image.width / this.frames.max;
        const frameHeight = this.image.height / this.imageHeight;

        const frameY = 0 + this.spriteSelector;

        ctx.drawImage(
            this.image,
            (this.frames.val * frameWidth) + this.currentFrame, // Source x
            frameY, // Source y 
            frameWidth, // Frame width
            frameHeight, // Frame height
            this.position.x, // Destination x
            this.position.y, // Destination y
            frameWidth * this.scale, // Scaled width
            frameHeight * this.scale // Scaled height
          );

        if (!this.moving) return

        if (this.frames.max > 1) {
            this.frames.elapsed++
        }
          
        if (this.frames.elapsed % 10 === 0){
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
        }
    }   
  }