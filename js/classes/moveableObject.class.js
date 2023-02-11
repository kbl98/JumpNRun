class MoveableObject{
    x=200;
   
    img;
    height=100;
    width=110;
    y=270;
    imgcache=[];
    speed;
    otherDirection=false;
    speedY=0;
    acceleration=1.5;

    aplyGravity(){
        setInterval(()=>
        {if(this.isInAir() || this.speedY>0){
            this.y-=this.speedY;
            this.speedY-=this.acceleration;
        }},1000/25)
    }

    isInAir(){
        return this.y<270
    }

    loadImg(path){
         this.img=new Image();
        this.img.src=path;
    }

    loadImgs(arr){
        arr.forEach(path=> {
            let img=new Image();
            img.src=path;
         this.imgcache[path]=img;}
        );

    }

    moveLeft(){
        this.x-=this.speed;
        this.otherDirection=true;
    }
    
    moveRight(){
        this.x+=this.speed;
        this.otherDirection=false;
    };

    moveRightMain(){
        this.x+=this.speed;
        this.otherDirection=true;
    };

    moveLeftMain(){
        this.x-=this.speed;
        this.otherDirection=false;
    }

    jump(){
        this.speedY=20; 
    }

    playAnimation(images){
        let i=this.current_img % images.length;
        let path=images[i];
        this.img=this.imgcache[path];
        this.current_img++
        }
}