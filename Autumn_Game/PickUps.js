function PickUps(){
  var RubySpriteAnimation;
  var RubyX;
  var RubyY;
  var fps;
  var oldTime;
  var imageFrame;
  var RubyLevel1;
  var rubyPicked;
  var TutorialRubiesCollected;

}
PickUps.prototype.init=function(rubX,rubY){
  this.RubySpriteAnimation= new Image()
  this.RubySpriteAnimation.src='assets/Collectables_Assets/Rubees.png';

  this.RubyX=rubX;
  this.RubyY=rubY;

  rubyPicked = false;
  TutorialRubiesCollected =false;

  this.oldTime=Date.now();
  this.fps=60;
  this.imageFrame=0;
};

PickUps.prototype.CoinSpinning=function(){
  if(Date.now()-this.oldTime>5500/this.fps)
  {
    if(this.imageFrame===7)
    {
      this.imageFrame=0;
    }
    this.imageFrame++;
    this.oldTime=Date.now();
    console.log("Ruby Animating");
  }
  app.ctx.drawImage(this.RubySpriteAnimation,this.imageFrame*64,0,64,64,this.RubyX,this.RubyY,64,64);
};
PickUps.prototype.Collision=function(){
  if(FirstLevel === true)
  {
    for(i=0;i<app.RubyLevel1.length;i++)
    {
      if(app.player.playerX+64>=app.RubyLevel1[i].RubyX&&app.player.playerX-64<=app.RubyLevel1[i].RubyX
      &&app.player.playerY+64>=app.RubyLevel1[i].RubyY&&app.player.playerY-64<=app.RubyLevel1[i].RubyY)
      {
        console.log("Collected");
        app.RubyLevel1.splice(i,1);
        rubyPicked=true;
        app.level.RubiesCollected++;
        app.Sound.SoundEffects();
      }
    }
    if(app.level.RubiesCollected === 5)
    {
      SecondLevel=true;
      FirstLevel=false;
      app.level.RubiesCollected=0;
    }
  }
  if(SecondLevel)
  {
    for(i=0;i<app.RubyLevel2.length;i++)
    {
      if(app.player.playerX+64>=app.RubyLevel2[i].RubyX&&app.player.playerX-64<=app.RubyLevel2[i].RubyX
      &&app.player.playerY+64>=app.RubyLevel2[i].RubyY&&app.player.playerY-64<=app.RubyLevel2[i].RubyY)
      {
        console.log("Collected");
        app.RubyLevel2.splice(i,1);
        rubyPicked=true;
        app.level.RubiesCollected++;
      }
    }
  }

  if(TutorialLevel)
  {
    for(i=0;i<app.RubyTutorial.length;i++)
    {
      if(app.player.playerX+64>=app.RubyTutorial[i].RubyX&&app.player.playerX-64<=app.RubyTutorial[i].RubyX
      &&app.player.playerY+64>=app.RubyTutorial[i].RubyY&&app.player.playerY-64<=app.RubyTutorial[i].RubyY)
      {
        console.log("Collected");
        app.RubyTutorial.splice(i,1);
        app.level.RubiesCollected++;
      }
    }

  }
};
