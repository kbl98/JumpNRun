class Cloud extends MoveableObject{
    height=100;
    width=500;
    x_start;

    constructor(){
    super().loadImg("../img/cloud.png");
    this.y=0+ Math.random()*130;
    this.x=0+ Math.random()*720;
    this.moveAuo();
    }

    moveAuo(){
        setInterval(()=>{
            this.x-=0.2
        },1000/60)
    }
}