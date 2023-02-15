class Coin extends MoveableObject{
    x=150+Math.random()*4000;
    y=100+Math.random()*100;
    width=80;
    height=80;
   

    constructor(){
            super().loadImg("../img/img 4/8_coin/coin_1.png");
    }

    removeCoin(){
        this.y=6000
    }

}