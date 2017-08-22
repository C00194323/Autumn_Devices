function GameModeMenu(){
  var background;
  var SinglePlayer;
  var MultiPlayer;
}

GameModeMenu.prototype.init=function(){
  this.background= new Image();
  this.background.src='assets/Menu_Assets/Background.jpg';

  this.SinglePlayer= new Image();
  this.SinglePlayer.src='assets/GameMode_Assets/SinglePlayer.png';

  this.MultiPlayer= new Image();
  this.MultiPlayer.src='assets/GameMode_Assets/MultiPlayer.png';


}
GameModeMenu.prototype.draw=function(){

  app.ctx.drawImage(this.background,0,0,app.canvas.width,app.canvas.height);
  app.ctx.drawImage(this.SinglePlayer,app.canvas.width/3,app.canvas.height/2);
  app.ctx.drawImage(this.MultiPlayer,app.canvas.width/2,app.canvas.height/2);

  app.ctx.fillStyle = rgb(0,0,0);
  app.ctx.font = 'italic 52pt Calibri';
  app.ctx.TextBaseline = "top";
  app.ctx.fillText("Game Mode",app.canvas.width/3,app.canvas.height/6);
}
