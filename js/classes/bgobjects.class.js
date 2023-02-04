class BackgroundObject extends MoveableObject{
    x=0;

    constructor(path,width,height){
        super().loadImg(path);
        this.width=width;
        this.height=height;
        this.y=480-this.height;
    }
}