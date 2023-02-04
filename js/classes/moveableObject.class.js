class MoveableObject{
    x=200;
    y=300;
    img;
    height=120;
    width=110;
    imgcache=[];

    loadImg(path){
         this.img=new Image();
        this.img.src=path;
    }

    loadImgs(arr){
        arr.forEach(path=> {
            let img=new Image();
            img.src=path;
            this.imgcache[path]=img;
        });

    }
    
    moveRight(){

    };

    moveLeft(){
        
    };
}