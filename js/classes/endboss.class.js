class Endboss extends MoveableObject{
x=5950;
speed=5;
x=5950;
energy=30;
left=true;

IMGS_WALK=["../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_00.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_01.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_02.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_03.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_04.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_05.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_06.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_07.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_08.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_09.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_10.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_11.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_12.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_13.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_14.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_15.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_16.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_17.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_18.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_19.png",
]


IMGS_Dead=["../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_00.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_01.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_02.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_03.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_04.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_00.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_05.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_06.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_07.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_08.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_09.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_10.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_11.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_12.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_13.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_14.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_15.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_16.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_17.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_18.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_19.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_20.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_21.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_22.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_23.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_24.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_25.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_26.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_27.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_28.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_29.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_30.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_31.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_32.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_33.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Death/Death_34.png",

]

IMGS_ATTACK=["../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_00.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_01.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_02.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_03.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_04.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_05.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_06.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_07.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_08.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_09.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_10.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_11.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_12.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_13.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_14.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_15.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_16.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_17.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_18.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_19.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_20.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_21.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_22.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_23.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_24.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_25.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_26.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_27.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_28.png",
"../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Attack/Attack_29.png"]



constructor(){
    super().loadImg("../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Characters/Characters 02/Walk/Walk_00.png");
    this.loadImgs(this.IMGS_ATTACK)
    this.loadImgs(this.IMGS_Dead)
    this.height=300;
    this.width=280;
    this.y=130;
    this.x=5950;
   
    this.loadImgs(this.IMGS_WALK);
    this.animate()
}

animate(){
   setInterval(()=>{
        if(!this.isDead()){
    this.move();
        }
    },1000/60)

    setInterval(()=>{  
        if(this.isDead()){
            this.playAnimationOnce(this.IMGS_Dead)
        }
        else if(this.isHurt()){ 
            this.playAnimation(this.IMGS_ATTACK);
            }else{ 
    this.playAnimation(this.IMGS_WALK);
    }},1000/60
    )

    
}

move(){

    if(this.x>=4800 && this.x<5980 && this.left==true){
        this.moveLeftMain();
    }
    else{
            this.left=false;
            this.moveRightMain();
            
            if(this.x>=5950){
                this.left=true;
            }
        }

}
    }
