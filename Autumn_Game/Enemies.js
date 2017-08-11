function Enemies()
{
  var enemyIdle;
  var enemieAnimationRight;
  var oldTime;
  var fps;
  var imageFrame;
  var enemiesAlive = true;
  var enemieAnimationLeft;

}

Enemies.prototype.init= function(){
  this.enemyIdle=new Image();
  this.enemyIdle.src='assets/Enemy_Assets/Robot.png';

  this.enemieAnimationRight=new Image();
  this.enemieAnimationRight.src='';

  this.enemieAnimationLeft=new Image();
  this.enemieAnimationLeft.src='';

}

Enemies.prototype.draw=function(ctx){
  app.ctx.drawImage(this.enemyIdle,500,300);

}

Enemies.prototype.animation=function(ctx){

}
