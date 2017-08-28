function Bullet()
{
  var playerBulletX;
  var playerBulletY;
  var fireUp;
  var fireDown;
  var fireLeft;
  var fireRight;

  var directionUp;
  var directionDown;
  var directionLeft;
  var directionRight;
  var direction;

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
  console.log("Bullet Created");

  this.directionUp=0;
  this.directionDown=1;
  this.directionLeft=2;
  this.directionRight=3;

  bulletAlive=true;
}

Bullet.prototype.CheckAlive=function()
{
  if((this.playerBulletX+64>(app.canvas.width/2)*1.85)||(this.playerBulletX-64<(window.innerWidth/20)-70)
  ||(this.playerBulletY-64<0)||(this.playerBulletY+64>((window.innerHeight/5)*2.82)-70))
  {
    bulletAlive = false;
  }
}
Bullet.prototype.BMovement=function()
{
  if(bulletAlive)
  {
    if(this.direction===this.directionUp)
    {
      this.playerBulletY--;
      app.ctx.drawImage(this.fireUp,this.playerBulletX,this.playerBulletY);
    }
    if(this.direction===this.directionDown)
    {
        this.playerBulletY++;
        app.ctx.drawImage(this.fireDown,this.playerBulletX,this.playerBulletY);
    }
    if(this.direction=== this.directionLeft)
    {
        this.playerBulletX--;
        app.ctx.drawImage(this.fireLeft,this.playerBulletX,this.playerBulletY);
    }
    if(this.direction===this.directionRight)
    {
        this.playerBulletX++;
        app.ctx.drawImage(this.fireRight,this.playerBulletX,this.playerBulletY);
    }
  }
}
