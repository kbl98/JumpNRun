class Cloud extends MoveableObject{
    height=90;
    width=600;

    constructor(){
    super().loadImg("../img/cloud.png");
    this.x=0 + Math.random()*1020;
    this.y=0+ Math.random()*130;

    }
}