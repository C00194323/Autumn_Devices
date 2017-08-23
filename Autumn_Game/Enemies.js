function Enemies()
{
  var enemyIdle;
  var enemyAnimationRight;
  var oldTime;
  var fps;
  var imageFrame;
  var enemiesAlive;
  var enemyAnimationLeft;
  var enemyAnimationUp;
  var enemyAnimationDown;
  var enemyX;
  var enemyY;
  var oldTime;
  var fps;
  var imageFrame;
  var enemyDown;
  var enemyUp;
  var enemyLeft;
  var enemyRight;


}

Enemies.prototype.init= function(enemyx,enemyy){
  this.enemyIdle=new Image();
  this.enemyIdle.src='assets/Enemy_Assets/Robot.png';

  this.enemyAnimationRight=new Image();
  this.enemyAnimationRight.src='assets/Enemy_Assets/Level_1/EnemyRight.png';

  this.enemyAnimationLeft=new Image();
  this.enemyAnimationLeft.src='assets/Enemy_Assets/Level_1/EnemyLeft.png';

  this.enemyAnimationUp=new Image();
  this.enemyAnimationUp.src='assets/Enemy_Assets/Level_1/EnemyUp.png';

  this.enemyAnimationDown=new Image();
  this.enemyAnimationDown.src='assets/Enemy_Assets/Level_1/EnemyDown.png';

  this.enemiesAlive=true;

  this.enemyUp=false;
  this.enemyLeft=false;
  this.enemyRight=false;
  this.enemyLeft=false;

  this.enemyX=enemyx;
  this.enemyY=enemyy;

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
    this.EnemyanimationLeft();
    this.enemyX=this.enemyX-1;
  }
 else if(app.player.playerX>this.enemyX){
   this.enemyUp=false;
   this.enemyDown =false;
   this.enemyLeft =false;
   this.enemyRight =true;
    this.EnemyanimationRight();
    this.enemyX=this.enemyX+1;

  }
  else if(app.player.playerY<this.enemyY){
    this.enemyUp=true;
    this.enemyDown =false;
    this.enemyLeft =false;
    this.enemyRight =false;
    this.enemyY= this.enemyY-1;
    this.EnemyanimationUp();
  }
 else if(app.player.playerY>this.enemyY)
  {
    this.enemyDown=true;
    this.enemyUp=false;
    this.enemyLeft =false;
    this.enemyRight =false;
    this.enemyY= this.enemyY+1;
      this.EnemyanimationDown();
  }
}

Enemies.prototype.EnemyanimationRight=function(){
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
      console.log("Enemy Animating Right");
    }
    app.ctx.drawImage(this.enemyAnimationRight,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);
  }

}

Enemies.prototype.EnemyanimationUp=function(){
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
      console.log("Enemy Animating Up");
    }
    app.ctx.drawImage(this.enemyAnimationUp,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);
  }

}

Enemies.prototype.EnemyanimationDown=function(){
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

    }
    app.ctx.drawImage(this.enemyAnimationDown,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);
  }
}

Enemies.prototype.EnemyanimationLeft=function(){
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
