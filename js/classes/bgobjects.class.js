class BackgroundObject extends MoveableObject{
    x=0;
    y=500;
    width=1020;
    constructor(path,height){
        super().loadImg(path);
        this.height=height;
    }
}