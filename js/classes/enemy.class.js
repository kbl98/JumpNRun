class Enemy extends MoveableObject{
    height=180;
    width=140;
    constructor(){
        super().loadImg("../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Idle/Idle_00.png")
        this.x=250 + Math.random()*720;
    }
}