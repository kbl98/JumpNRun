let canvas;
let world;
let keyboard= new Keyboard();


function init(){
    canvas=document.getElementById("canvas");
    world=new World(canvas,keyboard);
    console.log("My character is ", world.character)
    checkTouch();
}

function removeStartDisplay(){
    document.getElementById("heading").classList.add("d-none")
    document.getElementById("canvas-frame").classList.remove("d-none");
    document.getElementById("startpage").classList.add("d-none");
    
   
}

function pause(){
    world.play=false;
}

function play(){
    world.play=true;
}

window.addEventListener("keydown",(e)=>{
    if(e.keyCode==40){
        keyboard.DOWN=true;
    }
    if(e.keyCode==38){
        keyboard.UP=true;
    }
    if(e.keyCode==39){
        keyboard.RIGHT=true;
    }
    if(e.keyCode==37){
        keyboard.LEFT=true;
    }
    if(e.keyCode==32){
        keyboard.SPACE=true;
    }
}
)

window.addEventListener("keyup",(e)=>{
    if(e.keyCode==40){
        keyboard.DOWN=false;
    }
    if(e.keyCode==38){
        keyboard.UP=false;
    }
    if(e.keyCode==39){
        keyboard.RIGHT=false;
    }
    if(e.keyCode==37){
        keyboard.LEFT=false;
    }
    if(e.keyCode==32){
        keyboard.SPACE=false;
    }
})

function checkTouch(){
document.getElementById("down").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked")
        keyboard.DOWN=true;
    })

    document.getElementById("up").addEventListener("click",(e)=>{
        e.preventDefault();
            keyboard.UP=true;
        })
        document.getElementById("right").addEventListener("click",(e)=>{
            e.preventDefault();
                keyboard.RIGHT=true;
            })
            document.getElementById("left").addEventListener("click",(e)=>{
                e.preventDefault();
                    keyboard.LEFT=true;
                })
                document.getElementById("space").addEventListener("click",(e)=>{
                    e.preventDefault();
                        keyboard.SPACE=true;
                    })
   

                    document.getElementById("down").addEventListener("touchend",(e)=>{
                        e.preventDefault();
                            keyboard.DOWN=true;
                        })
                    
                        document.getElementById("up").addEventListener("touchend",(e)=>{
                            e.preventDefault();
                                keyboard.UP=true;
                            })
                            document.getElementById("right").addEventListener("touchend",(e)=>{
                                e.preventDefault();
                                    keyboard.RIGHT=true;
                                })
                                document.getElementById("left").addEventListener("touchend",(e)=>{
                                    e.preventDefault();
                                        keyboard.LEFT=true;
                                    })
                                    document.getElementById("space").addEventListener("touchend",(e)=>{
                                        e.preventDefault();
                                            keyboard.SPACE=true;
                                        })
                                    
                                    }