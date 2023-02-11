class Character extends MoveableObject{
    height=120;
    width=110;
    current_img=0;
    sound_walk=new Audio("../audio/walk.mp3")
    speed=10;

    



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

IMGS_JUMP=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_0.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_1.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_2.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_3.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_4.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_5.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_6.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_7.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_8.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Jump/Wukong-Jump_9.png",
]

IMGS_HIT=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_0.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_1.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_2.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_3.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_4.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_5.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_6.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_7.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_8.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_9.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_10.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_11.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_12.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_13.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_14.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_15.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_16.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_17.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_18.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_19.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_20.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Hit/Wukong-Hit_21.png"
]

IMGS_GETHIT=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_0.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_1.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_2.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_3.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_4.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_5.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_6.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_7.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_8.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_9.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_10.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_11.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_12.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/GetHit/Wukong-GetHit_13.png"]

IMGS_DIE=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_0.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_1.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_2.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_3.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_4.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_5.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_6.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_7.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_8.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_9.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_10.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_11.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_12.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_13.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_14.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_15.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_16.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_17.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_18.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_19.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_20.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_21.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_22.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_23.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_24.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Die/Wukong-Death_25.png"]

IMGS_THROW=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_0.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_1.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_2.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_3.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_4.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_5.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_6.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_7.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_8.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_9.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_10.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_11.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_12.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_13.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_14.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_15.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_16.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_17.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_18.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_19.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Throw/Wukong-Throw_20.png"]

IMGS_CELEBRATES=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_0.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_1.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_2.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_3.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_4.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_5.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_6.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_7.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_8.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_9.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_10.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_11.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_12.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Celebrates/Wukong-Celebrates_13.png"]

IMGS_GLIDE=["../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_0.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_1.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_2.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_3.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_4.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_5.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_6.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_7.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_8.png",
"../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Glide/Wukong-Glide_9.png"]


IMG_Fireball="../img/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Projectile/1.png";

//jump=new Imagecache(this.IMGS_JUMP);
//walk=new Imagecache(this.IMGS_WALK);

world;

    constructor(){
        super().loadImg("../img/craftpix-net-546825-monkey-game-character-sprite/PNG/Walk/Wukong-Walk_0.png");
        this.loadImgs(this.IMGS_WALK);
        this.loadImgs(this.IMGS_JUMP);
        this.aplyGravity();
        this.animate();
      
    }


animate(){
    setInterval(()=>{
        this.sound_walk.pause();
        if(this.world.keyboard.RIGHT && this.x < level_1.level_end){
            this.moveRight();
            this.sound_walk.play();
        }

        if(this.world.keyboard.LEFT && this.x > 200){
            this.moveLeft();
            this.sound_walk.play();
        }
        
        if(this.world.keyboard.UP && this.y>=270){
            this.jump();
        }

        this.world.camera_x=-this.x +200;
        },1000/60
    )

    setInterval(()=>{
    if(this.isInAir()){
            this.playAnimation(this.IMGS_JUMP)
    }else{
        if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT ){
            this.playAnimation(this.IMGS_WALK)
          }}},1000/20
        )
    } 
    }

   /* playAnimation(images){
    let i=this.current_img % images.length;
    let path=images[i];
    this.img=this.imgcache[path];
    this.current_img++
    }*/
    


