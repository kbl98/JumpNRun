class Character extends MoveableObject{
    height=120;
    width=110;
    current_img=0;
    IMGS_WALK=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_0.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_1.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_2.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_3.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_4.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_5.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_6.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_7.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_8.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_9.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_10.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_11.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_12.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_13.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_14.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_15.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_16.png",
    "../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_17.png"
]


    constructor(){
        super().loadImg("../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Idle/Wukong-Idle_0.png");
        this.loadImgs(this.IMGS_WALK);
        this.animate();
      
    }
animate(){
    console.log(this.IMGS_WALK.length);
    
    setInterval(()=>{
    let i=this.current_img % this.IMGS_WALK.length;
    let path=this.IMGS_WALK[i];
    this.img=this.imgcache[path];
    this.current_img++
    },1000/20
    )
}

jump(){
 
 }
}
