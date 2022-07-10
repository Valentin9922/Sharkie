class MovableObject{
    X = 120;
    y = 400;
    img;

    loadImage(path){
        this.img = new Image();
        this.img.scr= path;
    }

    moveRight(){
        console.log('Moving right');
    }
}