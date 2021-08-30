const obstacleBottomImg = document.createElement('img');
obstacleBottomImg.src = '../images/obstacle_bottom.png';

const obstacleTopImg = document.createElement('img');
obstacleTopImg.src = '../images/obstacle_top.png';

class Obstacle {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
		(this.ctx = canvasContext),
			(this.x = positionX),
			(this.y = positionY),
			(this.width = width),
			(this.height = height),
			(this.color = 'black');
            (this.speed = speed);
	}

	draw() {
		this.ctx.drawImage(obstacleBottomImg,  this.x, this.y, this.width, this.height);
        this.ctx.drawImage(obstacleTopImg,  this.x, this.y, this.width, this.height);
	}

	move() {
		this.x += this.speed;
	}
}