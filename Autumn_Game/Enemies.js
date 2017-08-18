function Enemies()
{
  var enemyIdle;
  var enemyAnimationRight;
  var oldTime;
  var fps;
  var imageFrame;
  var enemiesAlive = true;
  var enemyAnimationLeft;
  var enemyX;
  var enemyY;
  var oldTime;
  var fps;
  var imageFrame;
  var enemyDown = false;
  var enemyUp=false;
  var enemyLeft = false;
  var enemyRight=false;


}

Enemies.prototype.init= function(){
  this.enemyIdle=new Image();
  this.enemyIdle.src='assets/Enemy_Assets/Robot.png';

  this.enemyAnimationRight=new Image();
  this.enemyAnimationRight.src='assets/Enemy_Assets/Robot_Running_Right.png';

  this.enemyAnimationLeft=new Image();
  this.enemyAnimationLeft.src='assets/Enemy_Assets/Robot_Running_Left.png';

  this.enemiesAlive=true;

  this.enemyX=500;
  this.enemyY=300;

  this.oldTime=Date.now();
  this.fps=60;
  this.imageFrame=0;

}

Enemies.prototype.movement=function(){
  if(app.player.playerX<this.enemyX)
  {
    this.enemyUp=false;
    this.enemyDown =false;
    this.enemyLeft =true;
    this.enemyRight =false;
    this.animationLeft();
    this.enemyX=this.enemyX-1;
  }
 else if(app.player.playerX>this.enemyX){
   this.enemyUp=false;
   this.enemyDown =false;
   this.enemyLeft =false;
   this.enemyRight =true;
    this.animationRight();
    this.enemyX=this.enemyX+1;

  }
  else if(app.player.playerY<this.enemyY){
    this.enemyUp=true;
    this.enemyDown =false;
    this.enemyLeft =false;
    this.enemyRight =false;
    this.enemyY= this.enemyY-1;
  }
 else if(app.player.playerY>this.enemyY)
  {
    this.enemyDown=true;
    this.enemyUp=false;
    this.enemyLeft =false;
    this.enemyRight =false;
    this.enemyY= this.enemyY+1;
  }
}

Enemies.prototype.draw=function(){
  if(this.enemiesAlive === true)
  {
    app.ctx.drawImage(this.enemyIdle,this.enemyX,this.enemyY);
  }

}

Enemies.prototype.animationRight=function(){
  if(this.enemiesAlive===true)
  {
    if(Date.now()-this.oldTime>6000/this.fps)
    {
      if(this.imageFrame===7)
      {
        this.imageFrame=0;
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Player Animating Right");
    }
    app.ctx.drawImage(this.enemyAnimationRight,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);
  }

}

Enemies.prototype.animationLeft=function(){
  if(this.enemiesAlive===true)
  {
    if(Date.now()-this.oldTime>6000/this.fps)
    {
      if(this.imageFrame===7)
      {
        this.imageFrame=0;
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Player Animating Left");
    }
    app.ctx.drawImage(this.enemyAnimationLeft,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);
  }
}
