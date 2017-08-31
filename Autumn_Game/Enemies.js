function Enemies()
{
/*
*******************************
 Normal Enemy Assets/Variables
*******************************
*/
  var enemyIdle;
  var enemyAnimationRight;
  var enemiesAlive;
  var enemyAnimationLeft;
  var enemyAnimationUp;
  var enemyAnimationDown;
  var enemyX;
  var enemyY;
  var enemyDown;
  var enemyUp;
  var enemyLeft;
  var enemyRight;
/*
*******************************
 	Boss Assets/Variables
*******************************
*/
  var bossAnimationLeft;
  var bossAnimationRight;
  var bossFire;
  var bossIdle;
  var BossX;
  var BossY;
  var BossAlive;

/*
*******************************
 	Animation Variables
*******************************
*/
  var oldTime;
  var fps;
  var imageFrame;



}

Enemies.prototype.init= function(enemyx,enemyy){

  this.enemyAnimationRight=new Image();
  this.enemyAnimationRight.src='assets/Enemy_Assets/Level_1/EnemyRight.png';

  this.enemyAnimationLeft=new Image();
  this.enemyAnimationLeft.src='assets/Enemy_Assets/Level_1/EnemyLeft.png';

  this.enemyAnimationUp=new Image();
  this.enemyAnimationUp.src='assets/Enemy_Assets/Level_1/EnemyUp.png';

  this.enemyAnimationDown=new Image();
  this.enemyAnimationDown.src='assets/Enemy_Assets/Level_1/EnemyDown.png';

  this.bossAnimationRight= new Image();
  this.bossAnimationRight.src='assets/Enemy_Assets/Level_2/DragonRight.png';

  this.bossAnimationLeft = new Image();
  this.bossAnimationLeft.src='assets/Enemy_Assets/Level_2/DragonLeft.png';

  this.bossIdle=new Image();
  this.bossIdle.src='assets/Enemy_Assets/Level_2/DragonIdle.png';

  this.bossFire=new Image();
  this.bossFire.src='assets/Bullet_Assets/Boss_Bullets/Fire_Down.png';

  this.enemiesAlive=true;

  this.enemyUp=false;
  this.enemyLeft=false;
  this.enemyRight=false;
  this.enemyLeft=false;

  this.enemyX=enemyx;
  this.enemyY=enemyy;

  this.BossX=enemyx;
  this.BossY=enemyy;

  this.oldTime=Date.now();
  this.fps=60;
  this.imageFrame=0;

}

Enemies.prototype.movement=function(){
  if(app.player.playerAlive)
  {
    if(FirstLevel||TutorialLevel)
    {
        if(app.player.playerX<this.enemyX)
        {
          this.enemyUp=false;
          this.enemyDown =false;
          this.enemyLeft =true;
          this.enemyRight =false;
          this.EnemyanimationLeft();
          this.enemyX=this.enemyX-.5;
        }
       else if(app.player.playerX>this.enemyX){
         this.enemyUp=false;
         this.enemyDown =false;
         this.enemyLeft =false;
         this.enemyRight =true;
          this.EnemyanimationRight();
          this.enemyX=this.enemyX+.5;

        }
        else if(app.player.playerY<this.enemyY){
          this.enemyUp=true;
          this.enemyDown =false;
          this.enemyLeft =false;
          this.enemyRight =false;
          this.enemyY= this.enemyY-.5;
          this.EnemyanimationUp();
        }
       else if(app.player.playerY>this.enemyY)
        {
          this.enemyDown=true;
          this.enemyUp=false;
          this.enemyLeft =false;
          this.enemyRight =false;
          this.enemyY= this.enemyY+.5;
            this.EnemyanimationDown();
        }
    }
    if(SecondLevel)
    {
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
  }
  else {
    this.EnemyanimationLeft();
  }
}

Enemies.prototype.EnemyanimationRight=function(){
  if(this.enemiesAlive===true)
  {
    if(Date.now()-this.oldTime>6000/this.fps)
    {
      if(TutorialLevel||FirstLevel)
      {
        if(this.imageFrame===7)
        {
          this.imageFrame=0;
        }
      }
      if(SecondLevel)
      {
        if(this.imageFrame===2)
        {
          this.imageFrame=0;
        }
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Enemy Animating Right");
    }
      app.ctx.drawImage(this.enemyAnimationRight,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);
  }

}
Enemies.prototype.BossAnimatingLeft=function()
{
  if(this.BossAlive === true){
    if(Date.now()-this.oldTime>5000/this.fps)
    {
      if(SecondLevel)
      {
        if(this.imageFrame===2)
        {
          this.imageFrame=0;
        }
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Boss Animating Left");
    }
    app.ctx.drawImage(this.bossAnimationLeft,this.imageFrame*128,0,128,192,this.BossX,this.BossY,128,192);
  }
}
Enemies.prototype.BossBulletMoving=function()
{

}
Enemies.prototype.BossAnimatingRight=function()
{
  if(this.BossAlive === true){
    if(Date.now()-this.oldTime>5000/this.fps)
    {
      if(SecondLevel)
      {
        if(this.imageFrame===2)
        {
          this.imageFrame=0;
        }
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Boss Animating Right");
    }
    app.ctx.drawImage(this.bossAnimationRight,this.imageFrame*128,0,128,192,this.BossX,this.BossY,128,192);
  }
}
Enemies.prototype.BossMovement=function(){
  if(SecondLevel&&app.level.RubiesCollected === 7)
  {
    if(app.player.playerX<this.BossX)
    {
      this.BossX--;
      this.BossAnimatingLeft();
    }
    if(app.player.playerX>this.BossX)
    {
      this.BossX++;
      this.BossAnimatingRight();
    }
    if(app.player.playerX===this.BossX)
    {
      app.ctx.drawImage(this.bossIdle,this.BossX-32,this.BossY);
    }
  }
}

Enemies.prototype.EnemyanimationUp=function(){
  if(this.enemiesAlive===true)
  {
    if(Date.now()-this.oldTime>6000/this.fps)
    {
      if(TutorialLevel||FirstLevel)
      {
        if(this.imageFrame===7)
        {
          this.imageFrame=0;
        }
      }
      if(SecondLevel)
      {
        if(this.imageFrame===2)
        {
          this.imageFrame=0;
        }
      }
      this.imageFrame++;
      this.oldTime=Date.now();
      console.log("Enemy Animating Up");
    }
      app.ctx.drawImage(this.enemyAnimationUp,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);
  }

}
Enemies.prototype.ChangeSprite=function()
{
  if(TutorialLevel||FirstLevel)
  {
    this.enemyAnimationRight=new Image();
    this.enemyAnimationRight.src='assets/Enemy_Assets/Level_1/EnemyRight.png';

    this.enemyAnimationLeft=new Image();
    this.enemyAnimationLeft.src='assets/Enemy_Assets/Level_1/EnemyLeft.png';

    this.enemyAnimationUp=new Image();
    this.enemyAnimationUp.src='assets/Enemy_Assets/Level_1/EnemyUp.png';

    this.enemyAnimationDown=new Image();
    this.enemyAnimationDown.src='assets/Enemy_Assets/Level_1/EnemyDown.png';
  }
  if(SecondLevel)
  {
    this.enemyAnimationRight=new Image();
    this.enemyAnimationRight.src='assets/Enemy_Assets/Level_2/GolemWRight.png';

    this.enemyAnimationLeft=new Image();
    this.enemyAnimationLeft.src='assets/Enemy_Assets/Level_2/GolemWLeft.png';

    this.enemyAnimationUp=new Image();
    this.enemyAnimationUp.src='assets/Enemy_Assets/Level_2/GolemWUp.png';

    this.enemyAnimationDown=new Image();
    this.enemyAnimationDown.src='assets/Enemy_Assets/Level_2/GolemWDown.png';
  }
}
Enemies.prototype.EnemyCollision=function()
{
  if(FirstLevel)
  {
    /*for(i=0;i<app.enemyLevel1.length;i++)
    {
      for(j=app.enemyLevel1.length;j>0;j--)
      {
        if(app.enemyLevel1[i].enemyX+64>=app.enemyLevel1[j].enemyX
          &&app.enemyLevel1[i].enemyX-64<=app.enemyLevel1[j].enemyX
          &&app.enemyLevel1[i].enemyY+64>=app.enemyLevel1[j].enemyY
          &&app.enemyLevel1[i].enemyY-64<=app.enemyLevel1[j].enemyY)
          {
            console.log("Enemy Collided");
            app.enemyLevel1[j].enemyX=app.enemyLevel1[j].enemyX+10;
          }
      }
    }*/
  }
}
Enemies.prototype.EnemyanimationDown=function(){
  if(this.enemiesAlive===true)
  {
    if(Date.now()-this.oldTime>6000/this.fps)
    {
      if(TutorialLevel||FirstLevel)
      {
        if(this.imageFrame===7)
        {
          this.imageFrame=0;
        }
      }
      if(SecondLevel)
      {
        if(this.imageFrame===2)
        {
          this.imageFrame=0;
        }
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
      if(TutorialLevel||FirstLevel)
      {
        if(this.imageFrame===7)
        {
          this.imageFrame=0;
        }
      }
      if(SecondLevel)
      {
        if(this.imageFrame===2)
        {
          this.imageFrame=0;
        }
      }
      this.imageFrame++;
      this.oldTime=Date.now();
    }
      app.ctx.drawImage(this.enemyAnimationLeft,this.imageFrame*64,0,64,64,this.enemyX,this.enemyY,64,64);

  }
}
