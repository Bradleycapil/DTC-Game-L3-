class Player {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.c = c;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
    }
    
    playerMove() {
        if (rightPressed && this.x + this.w < canvas.width) {
          this.x += this.xSpeed;
        }
        if (leftPressed && this.x > 0) {
          this.x -= this.xSpeed;
        }
    
      }

      
  playerMove() {
    if (rightPressed && this.x + this.w < canvas.width) {
      this.x += this.xSpeed;
    }
    if (leftPressed && this.x > 0) {
      this.x -= this.xSpeed;
    }
    if(upPressed && this.y > 0){ // cant go out of top of screen
      this.y -= this.ySpeed;
    }
    if(downPressed && this.y + this.h < canvas.height){ // cant go out of bottom of screen
      this.y += this.ySpeed;
    }
  }
  
    drawRect() {
      canvasContext.fillStyle = this.c;
      canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
}