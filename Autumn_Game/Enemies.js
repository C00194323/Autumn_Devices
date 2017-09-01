function Enemies()
{
/*
*******************************
Particles
*******************************
*/
var particles;
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
  var bossBullet;
  var bossBul;
  var bossIdle;
  var BossX;
  var BossY;
  var BossAlive;
  var bTimer;
  var bossTimer;
  var bossIdleBool;

/*
*******************************
 	Animation Variables
*******************************
*/
  var oldTime;
  var fps;
  var imageFrame;



}

Enemies.prototype.init= function(x,y){

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
  this.bossIdleBool=false;
  this.enemyUp=false;
  this.enemyLeft=false;
  this.enemyRight=false;
  this.enemyLeft=false;

  this.enemyX=x;
  this.enemyY=y;

  this.BossX=x;
  this.BossY=y;
  this.bTimer =0;
  this.bossTimer =0;
  this.bossBullet=[];
  this.bossBul=new BossBullet();


  this.oldTime=Date.now();
  this.fps=60;
  this.imageFrame=0;
  this.particles=[];
  for (i = 0; i < 200; i++) {
    this.particles[i] = new Particle(Math.random() *300, Math.random() * 300);
  }

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
    this.bossTimer++;
    if(this.bossTimer<=180)
    {
    for (var i = 0; i < this.particles.length; i++) {
         this.particles[i].attract(this.BossX+64, this.BossY+96);
         this.particles[i].integrate();
         this.particles[i].draw();
       }
     }
     if(this.bossTimer>180&&this.bossTimer<240)
     {
       app.Sound.BossAppearSoundEffect.play();

     }

     if(this.bossTimer>180)
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
         app.ctx.drawImage(this.bossIdle,this.BossX,this.BossY);
       }

         this.bTimer++;
         if(this.bTimer>=150)
         {
           this.bossBul.init(this.BossX,this.BossY);
           this.bossBullet.push(this.bossBul);
           this.bTimer=0;
         }
         for(i=0;i<this.bossBullet.length;i++)
         {
           this.bossBullet[i].BossBulletMovement();
           if(this.bossBullet[i].PlayerCollision())
           {
             if(app.player.playerAlive)
             {
               this.bossBullet.splice(i,1);
               var minusHealth =1;
               app.player.PlayerLife=app.player.PlayerLife-minusHealth;


             }
             if(app.player.PlayerLife===0)
             {
               app.player.playerAlive=false;
               GOver=true;
               Play=false;
               SecondLevel=false;
             }
           }


         }
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
