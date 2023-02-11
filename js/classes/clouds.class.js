class Cloud extends MoveableObject{
    height=100;
    width=500;
    x_start;
    speed=0.15;

    constructor(){
    super().loadImg("../img/cloud.png");
    this.y=0+ Math.random()*130;
    this.x=0+ Math.random()*720;
    this.moveLeft();
    }

    
}