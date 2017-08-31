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
  console.log("Bullet Created");

  this.directionUp=0;
  this.directionDown=1;
  this.directionLeft=2;
  this.directionRight=3;

  this.bulletAlive=true;
}
Bullet.prototype.EnemieCollision=function()
{
  if(this.bulletAlive)
  {
    if(TutorialLevel)
    {
      console.log("Checking Collision");
      for(a=0;a<app.enemyTutorial.length;a++)
      {
        if(this.playerBulletX+64>=app.enemyTutorial[a].enemyX
          &&this.playerBulletX-64<=app.enemyTutorial[a].enemyX
          &&this.playerBulletY+64>=app.enemyTutorial[a].enemyY
          &&this.playerBulletY-64<=app.enemyTutorial[a].enemyY)
          {
            console.log("Bullet Collided");
            app.enemyTutorial[a].enemiesAlive = false;
            this.bulletAlive=false;
          }
      }
    }
      if(SecondLevel)
      {
        console.log("Checking Collision");
        for(a=0;a<app.enemyLevel2.length;a++)
        {
          if(this.playerBulletX+64>=app.enemyLevel2[a].enemyX
            &&this.playerBulletX-64<=app.enemyLevel2[a].enemyX
            &&this.playerBulletY+64>=app.enemyLevel2[a].enemyY
            &&this.playerBulletY-64<=app.enemyLevel2[a].enemyY)
            {
              console.log("Bullet Collided");
              app.enemyLevel2[a].enemiesAlive = false;
              this.bulletAlive=false;
            }
        }
    }
  }
}
Bullet.prototype.BMovement = function()
{
  if(this.bulletAlive)
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
