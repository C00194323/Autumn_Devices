function BossBullet()
{

var bossFire;
var BossbulletAlive = true;
var bossBulletX;
var bossBulletY;
var bulletTimer;



}

BossBullet.prototype.init=function(bossx,bossy)
{
  this.bossFire=new Image();
  this.bossFire.src='assets/Bullet_Assets/Boss_Bullets/Fire_Down.png';

  this.bossBulletY=bossy+32;
  this.bossBulletX=bossx;

  BossbulletAlive=true;
  this.bulletTimer=0;
}
BossBullet.prototype.PlayerCollision=function()
{
  if(BossbulletAlive)
  {
  }
}
BossBullet.prototype.BossBulletMovement = function()
{

  if(BossbulletAlive)
  {
    this.bulletTimer++;
    if(this.bulletTimer<60)
    {
      this.bossBulletY+=2;
      //app.ctx.clearRect(this.bossBulletX,this.bossBulletY,this.bossBulletX+64,this.bossBulletY+64);
      app.ctx.drawImage(this.bossFire,this.bossBulletX,this.bossBulletY);
    }
    else if(this.bulletTimer>60) {
      this.bulletTimer=0;
    }
  }
}
