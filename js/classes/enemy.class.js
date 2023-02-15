class Enemy extends MoveableObject{
    height=70;
    width=70;
    y=310;
    energy=5;
    dead=false;
    
   


IMGS_WALK_EY=["../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_00.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_01.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_02.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_03.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_04.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_05.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_06.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_07.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_08.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_09.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_10.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_11.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_12.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_13.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_14.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_15.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_16.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_17.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_18.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Walk/Walk_19.png"]

IMGS_DEAD=["../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_00.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_01.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_02.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_03.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_04.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_05.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_06.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_07.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_08.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_09.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_10.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_11.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_12.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_13.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_14.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_15.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_16.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_17.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_18.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_19.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_20.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_21.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_22.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_23.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_24.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_25.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_26.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_27.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_28.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Death/Death_29.png"
]


    constructor(){
        super().loadImg("../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 04/Idle/Idle_00.png")
        this.x=720+Math.random()*4500;
        this.speed=0.35+Math.random()*0.45;
        this.loadImgs(this.IMGS_DEAD);
        this.loadImgs(this.IMGS_WALK_EY);
        this.animate()
        
    }

   


    animate(){
        setInterval(()=>{
        if(this.dead==true){
            this.dieEnemy();
        }else{
        this.playAnimation(this.IMGS_WALK_EY);
        this.moveLeftMain();
        //let i=this.current_img % this.IMGS_WALK_EY.length;
        //let path=this.IMGS_WALK_EY[i];
        //this.img=this.imgcache[path];
        //this.current_img++
        }},1000/60
        )
    }

    dieEnemy(){
        this.playAnimationOnce(this.IMGS_DEAD);
        this.removeEnemy();
    }

    removeEnemy(){
        if(this.dead==true){
       this.y+=6000;
    }

    }


    
}