class World{
    camera_x=0;
    camera_y=0;
    character=new Character();
   // enemies=level_1.enemies;
    /*bg=new Bg1();
    bg_obj=level_1.backgrounds;*/

    level=level_1
   
   
   
            


    //clouds=level_1.clouds;

    canvas;
    ctx;
    keyboard;

    constructor(canvas,keyboard){
        this.canvas=canvas;
        this.ctx = this.canvas.getContext('2d');
        this.keyboard=keyboard;
        this.setWorld();
        this.draw();
 }

    setWorld(){
        this.character.world=this;
        
    }

    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.translate(this.camera_x,this.camera_y);
        //this.addToMap(this.bg);
       
        this.forEachToMap(this.level.backgrounds);
        this.forEachToMap(this.level.clouds);

        this.addToMap(this.character);
        this.forEachToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x,this.camera_y);
        let self=this;
        requestAnimationFrame(function(){
            self.draw()
        })
        
    }

    forEachToMap(array){
        array.forEach(e=>{
            this.addToMap(e)
            
        })

    }
    addToMap(emt){
        if(emt.otherDirection==true){
            this.ctx.save();
            this.ctx.translate(emt.width+55,0);
            this.ctx.scale(-1, 1);
            emt.x=emt.x *-1;
        }
        this.ctx.drawImage(emt.img,emt.x,emt.y,emt.width,emt.height);
        if(emt.otherDirection==true){
            emt.x=emt.x *-1;
            this.ctx.restore();
        }
    }

}