function Player(){
  var playerSprite;
  var arrowLeft;
  var arrowRight;
  var arrowUp;
  var arrowDown;
  var playerAlive = true ;
  var playerX;
  var playerY;
  var RightArrowWidth;
  var LeftArrowWidth;
  var UpArrowWidth;
  var DownArrowWidth;
  var RightArrowHeight;
  var LeftArrowHeight;
  var UpArrowHeight;
  var DownArrowHeight;

}
Player.prototype.init= function(){
  this.playerSprite = new Image();
  this.playerSprite.src='assets/Player_Assets/Knight1.png';

  this.arrowLeft = new Image();
  this.arrowLeft.src='assets/Arrow_Assets/Left-Arrow.png';

  this.arrowRight = new Image();
  this.arrowRight.src='assets/Arrow_Assets/Right-Arrow.png';

  this.arrowUp = new Image();
  this.arrowUp.src='assets/Arrow_Assets/Up-Arrow.png';

  this.arrowDown = new Image();
  this.arrowDown.src='assets/Arrow_Assets/Down-Arrow.png';

  this.playerAlive=true;
  this.playerX = 0;
  this.playerY = 0;

  this.RightArrowWidth=window.innerWidth-400;
  this.LeftArrowWidth=window.innerWidth/2-100;
  this.UpArrowWidth=window.innerWidth/2;
  this.DownArrowWidth=window.innerWidth/2;

  this.RightArrowHeight=window.innerHeight-100;
  this.LeftArrowHeight=window.innerHeight-100;
  this.DownArrowHeight=window.innerHeight-100;
  this.UpArrowHeight=window.innerHeight-200;
}
Player.prototype.draw=function(ctx){
  if(this.playerAlive===true)
  {
    app.ctx.drawImage(this.playerSprite,this.playerX,this.playerY);
  }
  app.ctx.drawImage(this.arrowLeft,this.LeftArrowWidth,this.LeftArrowHeight);
  app.ctx.drawImage(this.arrowRight,this.RightArrowWidth,this.RightArrowHeight);
  app.ctx.drawImage(this.arrowUp,this.UpArrowWidth,this.UpArrowHeight);
  app.ctx.drawImage(this.arrowDown,this.DownArrowWidth,this.DownArrowHeight);
}
//function keyDownHandler(e)
//{

	//if(e.keyCode === 38) //up arrow
	////{
		//if(this.playerAlive=== true)
		//{
			//this.playerY-= 10;
		//}
	//}

	//if(e.keyCode === 40) //down arrow
	//{
		//if(this.playerAlive=== true)
		//{
			//this.playerY+=10;
		//}

	//}
	//if(e.keyCode === 37) //left arrow
	//{
		//if(this.playerAlive=== true)
		//{
			//this.playerX-=10;
		//}
	//}

	//if(e.keyCode === 39) // right arrow
	//{
		//if(this.playerAlive=== true)
		//{
			//this.playerX+=10;
		//}
	//}
//}
