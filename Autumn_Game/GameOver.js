function GameOver()
{
  var GameOverBackground;
  var BackToMenuButton;
  var PlayAgainButton;
}
GameOver.prototype.init=function()
{
  this.GameOverBackground=new Image();
  this.GameOverBackground.src='assets/Menu_Assets/Background.jpg';

  this.BackToMenuButton=new Image();
  this.BackToMenuButton.src='assets/GameOver_Assets/Exit.png';

  this.PlayAgainButton=new Image();
  this.PlayAgainButton.src='assets/GameOver_Assets/PlayAgain.png';
}

GameOver.prototype.draw=function()
{
  app.ctx.drawImage(this.GameOverBackground,0,0,app.canvas.width,app.canvas.height);
  app.ctx.drawImage(this.PlayAgainButton,app.canvas.width/3,app.canvas.height/2);
  app.ctx.drawImage(this.BackToMenuButton,app.canvas.width/2,app.canvas.height/2);
if(GOver)
{
  app.ctx.fillStyle = rgb(0,0,0);
  app.ctx.font = 'italic 52pt Calibri';
  app.ctx.TextBaseline = "top";
  app.ctx.fillText("Game Over Menu",app.canvas.width/4,app.canvas.height/6);

  app.ctx.font = 'italic 40pt Calibri';
  /*if(app.boss.BossAlive===false )
  {
    app.ctx.fillText("Congrates You Beaten The Game",app.canvas.width/20,app.canvas.height/3);
    app.ctx.fillText("and Saved The Princess.",app.canvas.width/20,app.canvas.height/2.7);
  }
  else if(app.player.playerAlive === false)
  {
    app.ctx.fillText("You Have Failed And lost The ",app.canvas.width/20,app.canvas.height/3);
    app.ctx.fillText("Princess Forever.",app.canvas.width/20,app.canvas.height/2.7);
  }
}
  */

  app.ctx.fillText("Play Again :",app.canvas.width/13,app.canvas.height/1.85);
  app.ctx.fillText(": Back To Menu",app.canvas.width/1.55,app.canvas.height/1.85);
}


}
