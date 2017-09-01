function Bullet(fireX,fireY,dir)
{
  var playerBulletX = fireX;
  var playerBulletY = fireY;
  var fireUp;
  var fireDown;
  var fireLeft;
  var fireRight;

  var directionUp;
  var directionDown;
  var directionLeft;
  var directionRight;
  var direction = dir;

  var bulletAlive = true;



}

Bullet.prototype.init=function(fireX,fireY,dir)
{
  this.playerBulletY = fireY;
  this.playerBulletX = fireX;
  this.direction=dir;

  this.fireRight = new Image();
  this.fireRight.src='assets/Bullet_Assets/Player_Bullets/Magic_Right.png';

  this.fireLeft = new Image();
  this.fireLeft.src='assets/Bullet_Assets/Player_Bullets/Magic_Left.png';

  this.fireUp = new Image();
  this.fireUp.src='assets/Bullet_Assets/Player_Bullets/Magic_Up.png';

  this.fireDown = new Image();
  this.fireDown.src='assets/Bullet_Assets/Player_Bullets/Magic_Down.png';

  this.directionUp=0;
  this.directionDown=1;
  this.directionLeft=2;
  this.directionRight=3;

  this.bulletAlive=true;
}
Bullet.prototype.BMovement = function()
{
  if(this.bulletAlive)
  {
    if(this.direction===this.directionUp)
    {
      this.playerBulletY-=5;
      app.ctx.drawImage(this.fireUp,this.playerBulletX,this.playerBulletY);
    }
    if(this.direction===this.directionDown)
    {
        this.playerBulletY+=5;
        app.ctx.drawImage(this.fireDown,this.playerBulletX,this.playerBulletY);
    }
    if(this.direction=== this.directionLeft)
    {
        this.playerBulletX-=5;
        app.ctx.drawImage(this.fireLeft,this.playerBulletX,this.playerBulletY);
    }
    if(this.direction===this.directionRight)
    {
        this.playerBulletX+=5;
        app.ctx.drawImage(this.fireRight,this.playerBulletX,this.playerBulletY);
    }
  }
}
