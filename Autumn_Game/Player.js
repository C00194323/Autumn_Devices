function Player(){
  var playerSprite;
  var playerAnimationRight;
  var playerAnimationLeft;
  var playerAnimationUp;
  var playerAnimationDown;
  var arrowLeft;
  var arrowRight;
  var arrowUp;
  var arrowDown;
  var FireButton;
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

  this.playerAnimationRight = new Image();
  this.playerAnimationRight.src='assets/Player_Assets/WRight.png'

  this.playerAnimationLeft = new Image();
  this.playerAnimationLeft.src='assets/Player_Assets/WLeft.png'

  this.playerAnimationUp = new Image();
  this.playerAnimationUp.src= 'assets/Player_Assets/WUp.png'

  this.playerAnimationDown = new Image();
  this.playerAnimationDown.src= 'assets/Player_Assets/WDown.png'

  this.arrowLeft = new Image();
  this.arrowLeft.src='assets/Controller_Assets/Arrow_Assets/Left-Arrow.png';

  this.arrowRight = new Image();
  this.arrowRight.src='assets/Controller_Assets/Arrow_Assets/Right-Arrow.png';

  this.arrowUp = new Image();
  this.arrowUp.src='assets/Controller_Assets/Arrow_Assets/Up-Arrow.png';

  this.arrowDown = new Image();
  this.arrowDown.src='assets/Controller_Assets/Arrow_Assets/Down-Arrow.png';

  this.FireButton = new Image();
  this.FireButton.src = 'assets/Controller_Assets/FireButton.png';

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

Player.prototype.drawControls=function(ctx){

  app.ctx.drawImage(this.arrowLeft,this.LeftArrowWidth,this.LeftArrowHeight);
  app.ctx.drawImage(this.arrowRight,this.RightArrowWidth,this.RightArrowHeight);
  app.ctx.drawImage(this.arrowUp,this.UpArrowWidth,this.UpArrowHeight);
  app.ctx.drawImage(this.arrowDown,this.DownArrowWidth,this.DownArrowHeight);
  app.ctx.drawImage(this.FireButton,(app.canvas.width/2)*1.65,(app.canvas.height/2)*1.85);
}

Player.prototype.animation=function(){
  if(this.playerAlive===true)
  {
    if(Date.now()-this.oldTime>5500/this.fps)
    {
      if(this.imageFrame===7)
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

Player.prototype.animationDown=function(){
  if(this.playerAlive===true)
  {
    if(Date.now()-this.oldTime>5500/this.fps)
    {
      if(this.imageFrame===7)
      {
        this.imageFrame=0;
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Player Animating Down");
    }
    app.ctx.drawImage(this.playerAnimationDown,this.imageFrame*64,0,64,64,this.playerX,this.playerY,64,64);
  }
}

Player.prototype.animationUp=function(){
  if(this.playerAlive===true)
  {
    if(Date.now()-this.oldTime>5500/this.fps)
    {
      if(this.imageFrame===7)
      {
        this.imageFrame=0;
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Player Animating Up");
    }
    app.ctx.drawImage(this.playerAnimationUp,this.imageFrame*64,0,64,64,this.playerX,this.playerY,64,64);
  }
}

Player.prototype.animationLeft=function(){
  if(this.playerAlive===true)
  {
    if(Date.now()-this.oldTime>5500/this.fps)
    {
      if(this.imageFrame===7)
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
