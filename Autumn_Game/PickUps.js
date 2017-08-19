function PickUps(){
  var RubeeSpriteAnimation;

}
PickUps.prototype.init=function(){
  this.RubeeSpriteAnimation= new Image()
  this.RubeeSpriteAnimation.src='';
};
Pickups.prototype.draw=function(){
};
/*Pickups.prototype.CoinSpinning=function(){
  if(Date.now()-this.oldTime>5500/this.fps)
  {
    if(this.imageFrame===7)
    {
      this.imageFrame=0;
    }
    this.imageFrame++;
    this.oldTime=Date.now();
    //app.ctx.clearRect(this.playerX,this.playerY,64,64);
    app.ctx.drawImage(this.RubeeSpriteAnimation,this.imageFrame*64,0,64,64,this.playerX,this.playerY,64,64);
    console.log("Player Animating Right");
  }
};*/
Pickups.prototype.Collision=function(){
};
