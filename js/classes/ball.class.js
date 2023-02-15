class Ball extends MoveableObject{
    height=50;
    width=50;
    speed=10;
    speedY=20;
    world;
    constructor(character){
        
        super().loadImg("../BattleOfHeroes/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Projectile/4.png");
        this.x=character.x + 40;
        this.y=character.y + 50;
        this.aplyGravity()
        this.throw(character);
        this.otherDirection=character.otherDirection
    }


    throw(){
        setInterval(()=>{
            if(this.otherDirection==false){
                this.x+=this.speed;
            }else{
                this.x-=this.speed;
            }
        },1000/30)
    }

    
}