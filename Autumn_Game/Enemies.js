function Enemies()
{
  var enemyIdle;
  var enemieAnimationRight;
  var oldTime;
  var fps;
  var imageFrame;
  var enemiesAlive = true;
  var enemieAnimationLeft;
  var enemyX;
  var enemyY;


}

Enemies.prototype.init= function(){
  this.enemyIdle=new Image();
  this.enemyIdle.src='assets/Enemy_Assets/Robot.png';

  this.enemieAnimationRight=new Image();
  this.enemieAnimationRight.src='';

  this.enemieAnimationLeft=new Image();
  this.enemieAnimationLeft.src='';

  this.enemyX=500;
  this.enemyY=300;

}

Enemies.prototype.movement=function(){
  if(app.player.playerX<this.enemyX)
  {
    this.enemyX=this.enemyX-0.5;
  }
 if(app.player.playerX>this.enemyX){
    this.enemyX=this.enemyX+0.5;
  }
  if(app.player.playerY<this.enemyY){
    this.enemyY= this.enemyY-0.5;

  }
 if(app.player.playerY>this.enemyY)
  {
    this.enemyY= this.enemyY+0.5;
  }
  console.log("EnemyXPos"+this.enemyX);
console.log("EnemyYPos"+this.enemyY);
}

Enemies.prototype.draw=function(ctx){
  app.ctx.drawImage(this.enemyIdle,this.enemyX,this.enemyY);

}

Enemies.prototype.animation=function(ctx){

}
