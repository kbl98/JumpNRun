class Imagecache{

imgcache=[];

constructor(imagearray){
    this.loadImgs(imagearray);
   
}

loadImgs(arr){
    arr.forEach(path=> {
        let img=new Image();
        img.src=path;
        this.imgcache[path]=img;
      
    });

}
}