function PickUps(){
  var RubeeSpriteAnimation;
  var RubeeHudIcon;
  var RubeeX;
  var RubeeY;
  var fps;
  var oldTime;
  var imageFrame;

}
PickUps.prototype.init=function(rubX,rubY){
  this.RubeeSpriteAnimation= new Image()
  this.RubeeSpriteAnimation.src='Rubees.png';

  this.RubeeX=rubX;
  this.RubeeY=rubY;

  this.oldTime=Date.now();
  this.fps=60;
  this.imageFrame=0;
};

Pickups.prototype.CoinSpinning=function(){
  if(Date.now()-this.oldTime>5500/this.fps)
  {
    if(this.imageFrame===7)
    {
      this.imageFrame=0;
    }
    this.imageFrame++;
    this.oldTime=Date.now();
    app.ctx.drawImage(this.RubeeSpriteAnimation,this.imageFrame*64,0,64,64,this.RubeeX,this.RubeeY,64,64);
    console.log("Player Animating Right");
  }
};
Pickups.prototype.Collision=function(){
};
