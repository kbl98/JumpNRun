class World{
    character=new Character();
    enemies=[
        new Enemy(), new Enemy(),new Enemy()
    ];
    bg=new Bg1();
    bg_obj=[new BackgroundObject("../BattleOfHeroes/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Stage Backgrounds/Background03/Layer01.png",1000),
            new BackgroundObject("../BattleOfHeroes/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Stage Backgrounds/Background03/Layer02.png",600),
            new BackgroundObject("../BattleOfHeroes/craftpix-891176-battle-of-heroes-2d-game-kit/Png/Stage Backgrounds/Background03/Layer03.png",300)]
   
   
   
            


    clouds=[
        new Cloud(),
        new Cloud(),
        new Cloud()
    ];

    canvas;
    ctx;
    constructor(canvas){
        this.canvas=canvas;
        this.ctx = this.canvas.getContext('2d');

        this.draw();
 }
    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.addToMap(this.bg);
       
        this.forEachToMap(this.bg_obj);
        this.forEachToMap(this.clouds);

        this.addToMap(this.character);
        this.forEachToMap(this.enemies);
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
        this.ctx.drawImage(emt.img,emt.x,emt.y,emt.width,emt.height)
    }

}