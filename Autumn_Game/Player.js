function Player(){
  var playerSprite;
  var playerAnimationRight;
  var playerAnimationLeft;
  var arrowLeft;
  var arrowRight;
  var arrowUp;
  var arrowDown;
  var playerAlive;
  var playerX;
  var playerY;
  var RightArrowWidth;
  var LeftArrowWidth;
  var UpArrowWidth;
  var DownArrowWidth;
  var RightArrowHeight;
  var LeftArrowHeight;
  var UpArrowHeight;
  var DownArrowHeight;
  var oldTime;
  var fps;
  var imageFrame;
  var PlayerLive;

}
Player.prototype.init= function(){

  this.playerSprite = new Image();
  this.playerSprite.src='assets/Player_Assets/Knight.png';

  this.playerAnimationRight = new Image();
  this.playerAnimationRight.src='assets/Player_Assets/Walking_Right.png'

  this.playerAnimationLeft = new Image();
  this.playerAnimationLeft.src='assets/Player_Assets/Walking_Left.png'

  this.arrowLeft = new Image();
  this.arrowLeft.src='assets/Arrow_Assets/Left-Arrow.png';

  this.arrowRight = new Image();
  this.arrowRight.src='assets/Arrow_Assets/Right-Arrow.png';

  this.arrowUp = new Image();
  this.arrowUp.src='assets/Arrow_Assets/Up-Arrow.png';

  this.arrowDown = new Image();
  this.arrowDown.src='assets/Arrow_Assets/Down-Arrow.png';

  this.playerAlive=true;
  this.playerX = 150;
  this.playerY = 128;
  this.oldTime=Date.now();
  this.fps=60;
  this.imageFrame=0;

  this.PlayerLive = 3;

  this.RightArrowWidth=window.innerWidth-400;
  this.LeftArrowWidth=window.innerWidth/2-100;
  this.UpArrowWidth=window.innerWidth/2;
  this.DownArrowWidth=window.innerWidth/2;

  this.RightArrowHeight=window.innerHeight-100;
  this.LeftArrowHeight=window.innerHeight-100;
  this.DownArrowHeight=window.innerHeight-100;
  this.UpArrowHeight=window.innerHeight-200;
}
Player.prototype.draw=function(ctx){
  if(this.playerAlive===true)
  {
    app.ctx.drawImage(this.playerSprite,this.playerX,this.playerY);
  }
}
Player.prototype.drawArrows=function(ctx){

  app.ctx.drawImage(this.arrowLeft,this.LeftArrowWidth,this.LeftArrowHeight);
  app.ctx.drawImage(this.arrowRight,this.RightArrowWidth,this.RightArrowHeight);
  app.ctx.drawImage(this.arrowUp,this.UpArrowWidth,this.UpArrowHeight);
  app.ctx.drawImage(this.arrowDown,this.DownArrowWidth,this.DownArrowHeight);
}

Player.prototype.animation=function(){
  if(this.playerAlive===true)
  {
    if(Date.now()-this.oldTime>5500/this.fps)
    {
      if(this.imageFrame===9)
      {
        this.imageFrame=0;
      }
      this.imageFrame++;
      this.oldTime=Date.now();

      console.log("Player Animating Right");
    }
    app.ctx.drawImage(this.playerAnimationRight,this.imageFrame*64,0,64,64,this.playerX,this.playerY,64,64);
  }
}

Player.prototype.animationLeft=function(){
  if(this.playerAlive===true)
  {
    if(Date.now()-this.oldTime>5500/this.fps)
    {
      if(this.imageFrame===9)
      {
        this.imageFrame=0;
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Player Animating Left");
    }
    app.ctx.drawImage(this.playerAnimationLeft,this.imageFrame*64,0,64,64,this.playerX,this.playerY,64,64);
  }
}
