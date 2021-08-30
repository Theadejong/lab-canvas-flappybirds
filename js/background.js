const bgImg = document.createElement('img');
bgImg.src = '../images/bg.png';

// create background
class Background {
    constructor( canvasContext ){
        (this.ctx = canvasContext),
        (this.x = 0),
        (this.y = 0),
        (this.width = 900),
        (this.height = 500);
    }

    draw(){
        this.ctx.drawImage(bgImg, this.x, this.y, this.width, this.height);
    }


}