class World {
  camera_x = 0;
  camera_y = 0;
  character = new Character();
  // enemies=level_1.enemies;
  /*bg=new Bg1();
    bg_obj=level_1.backgrounds;*/
  throw = true;
  level = level_1;
  // ball=new Ball(this.character)
  number_bombs = 0;
  number_coins = 0;
  ball = new Ball(this.character);
  run = true;

  //clouds=level_1.clouds;

  canvas;
  ctx;
  keyboard;
  statusbar = new Statusbar();
  coinbar = new Coinbar();
  weaponbar = new Weaponbar();

  //coins=

  //bombs=

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.keyboard = keyboard;
    this.setWorld();
    console.log(statusbar);
    this.draw();
    this.runGame();
    this.writeStatusbar();
    this.writeCoinbar();
    this.writeWeaponbar();
  }

  setWorld() {
    this.character.world = this;
  }

  runGame() {
    setInterval(() => {
      this.checkCollision();
    }, 1000/60);
  }

  checkCollision() {
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.countCoins();
        coin.removeCoin();
      }
    });

    this.level.bombs.forEach((bomb) => {
      if (this.character.isColliding(bomb)) {
        this.countBombs();
        bomb.removeBomb();
      }
    });

    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.fromAbove(enemy)) {
          enemy.hit();
          this.character.y = 100;
          enemy.checkDeath();
        } else if (!this.character.isHurt()) {
          this.character.hit();
          this.character.checkDeath();
        }
      }
    });

    //this.level.endboss.forEach((endboss) => {
      if (this.character.ball) {
        if (this.character.ball.isColliding(this.level.endboss) && !this.level.endboss.isHurt()) {
          this.level.endboss.hit();
          console.log(this.level.endboss.energy);
          this.level.endboss.checkDeath();
        }
      }

      if (this.character.isColliding(this.level.endboss)) {
        if (!this.character.isHurt()){
        this.character.hit();
        this.character.checkDeath();
    }
      }
      // else if (this.character.collidable==true){
      //  this.character.hit();
      //   this.character.checkDeath();
   // });
  }

  fromAbove(enemy) {
    if (this.character.speedY < 0 && this.character.y +50 < enemy.y) {
      return true;
    }
  }

  // if(this.character.isHurt()){

  //this.character.hurt=true}else{
  //hurt=false;

  //}

  //characterDead() {
  //  this.character
   //   .animate()
    //  .this.character.playAnimation(this.character.IMGS_DIE);
  //}

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, this.camera_y);
    //this.addToMap(this.bg);

    this.forEachToMap(this.level.backgrounds);
    this.forEachToMap(this.level.clouds);

    this.ctx.translate(-this.camera_x, this.camera_y);
    this.addToMap(this.statusbar);
    this.addToMap(this.coinbar);
    this.addToMap(this.weaponbar);
    this.weaponbar.drawBall(this.ctx);

    this.ctx.translate(this.camera_x, this.camera_y);
    this.forEachToMap(this.level.bombs);
    this.forEachToMap(this.level.coins);
    this.addToMap(this.character);
    this.forEachToMap(this.level.enemies);
    this.addToMap(this.level.endboss);
    if (this.character.ball) {
      this.addToMap(this.character.ball);
    }

    this.ctx.translate(-this.camera_x, this.camera_y);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  forEachToMap(array) {
    array.forEach((e) => {
      this.addToMap(e);
    });
  }

  addToMap(emt) {
    if (emt.otherDirection == true) {
      emt.flipImg(this.ctx);
    }
    emt.drawObj(this.ctx);
    emt.drawFrame(this.ctx);
    if (emt.otherDirection == true) {
      emt.flipImgBack(this.ctx);
    }
  }

  writeWeaponbar() {
    setInterval(() => {
      this.weaponbar.setPercentage();
    }, 1000 / 60);
  }

  writeCoinbar() {
    setInterval(() => {
      this.coinbar.setPercentage();
    }, 1000 / 60);
  }

  writeStatusbar() {
    setInterval(() => {
      this.statusbar.persentage = this.character.energy;
      this.statusbar.setPercentage();
    }, 1000 / 60);
  }

  countCoins() {
    this.coinbar.allcoins += 1;
  }

  countBombs() {
    this.weaponbar.allbombs += 1;
  }
}
