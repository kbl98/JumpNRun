let canvas;

let ctx;
let world=new World();


function init(){
    console.log(world)
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext('2d');
    console.log(world.enemies)
    
}