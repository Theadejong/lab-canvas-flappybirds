const fabyImg = document.createElement('img');
fabyImg.src = '../images/flappy.png';

class bird {

    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = fabyImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 100,
        this.speedX = 0,
        this.speedY = 0,
        this.gravity = 0,
        this.gravitySpeed = 0
    }


    draw(){
        this.ctx.drawImage(fabyImg, this.x, this.y, this.width, this.height);
    }

    update () {

    }

    newPos () {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    spaceBarClicked () {
        this.gravity = -1;
    }

    spaceBarReleased () {
        this.gravity = 1;
    }
}

