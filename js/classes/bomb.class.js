class Bomb extends MoveableObject{
    x=250+Math.random()*4000;
    y=100+Math.random()*100;
    width=30;
    height=30;
    random=true;
   

    constructor(){
            super().loadImg("../BattleOfHeroes/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Projectile/4.png");
            this.animate();
    }

    removeBomb(){
        this.y=6000
    }

    animate(){
        setInterval(()=>{
            this.move()},1500
        )

    }

    move(){
    if(this.random==true){
    this.x-=50;
    this.radom=false;
    }else{
        this.x+=70;
        this.random=true;
    }
    }
}