function BossBullet()
{

var bossFire;
var BossbulletAlive = true;
var bossBulletX;
var bossBulletY;
var bulletTimer;
var maxBulletSpeed;



}

BossBullet.prototype.init=function(bossx,bossy)
{
  this.bossFire=new Image();
  this.bossFire.src='assets/Bullet_Assets/Boss_Bullets/Fire_Down.png';

  this.bossBulletY=bossy+32;
  this.bossBulletX=bossx;

  BossbulletAlive=true;
  this.bulletTimer=0;
  this.maxBulletSpeed =12;

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
      if(this.bossBulletY>50)
      {
        this.bossBulletY+=2;
      }
      else {
        this.bossBulletY=this.bossBulletY;
      }

      //app.ctx.clearRect(this.bossBulletX,this.bossBulletY,this.bossBulletX+64,this.bossBulletY+64);
      app.ctx.drawImage(this.bossFire,this.bossBulletX-32,this.bossBulletY);
    }
    else if(this.bulletTimer>60) {
      this.bulletTimer=0;
    }
  }
}
