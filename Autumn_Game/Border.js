function Border()
{
  var BorderLeft;
  var BorderRight;
  var BorderBottom;

  var BLeftWidth;
  var BLeftHeight;

  var BRightWidth;
  var BRightHeight;

  var BBottomWidth;
  var BBottomHeight;


}

Border.prototype.init= function(){
  this.BorderLeft=new Image();
  this.BorderLeft.src='assets/Border/FencesSide.png';

  this.BorderRight = new Image();
  this.BorderRight.src = 'assets/Border/FencesSide.png';

  this.BorderBottom=new Image();
  this.BorderBottom.src = 'assets/Border/Fences.png'

  this.BLeftWidth= (window.innerWidth/20)-50;
  this.BLeftHeight=(window.innerHeight/20)-90;

  this.BRightWidth= window.innerWidth-50;
  this.BRightHeight=(window.innerHeight/20)-90;

  this.BBottomWidth= (window.innerWidth/20)-50;
  this.BBottomHeight=(window.innerHeight/2)+250;
}

Border.prototype.draw=function(ctx){
  app.ctx.drawImage(this.BorderLeft,this.BLeftWidth,this.BLeftHeight);
  app.ctx.drawImage(this.BorderRight,this.BRightWidth,this.BRightHeight);
  app.ctx.drawImage(this.BorderBottom,this.BBottomWidth,this.BBottomHeight);
}

Border.prototype.collision=function(){
  if(app.player.playerX+50>this.BRightWidth)
  {
    app.player.playerX=app.player.playerX-10;
  }
  else if(app.player.playerX<this.BLeftWidth)
  {
    app.player.playerX=app.player.playerX+10;
  }
  else if(app.player.playerY+75>this.BBottomHeight)
  {
    app.player.playerY=app.player.playerY-10;
  }

}
