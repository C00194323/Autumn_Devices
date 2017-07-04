function Player(){
  var playerSprite;
}
Player.prototype.init= function(){
  this.playerSprite = new Image();
  this.playerSprite.src='assets/Player_Assets/Knight1.png';
}
Player.prototype.draw=function(ctx){
  app.ctx.drawImage(this.playerSprite,0,0);
}
Player.prototype.move=function(){

}
