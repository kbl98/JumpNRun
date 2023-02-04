class Enemy extends MoveableObject{
    height=150;
    width=110;
    y=280;
    constructor(){
        super().loadImg("../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Idle/Idle_00.png")
        this.x=620;
        this.moveEnemy();
    }

    moveEnemy(){
        setInterval(()=>{
            this.x-=0.7;
        },1000/30)
    }
}