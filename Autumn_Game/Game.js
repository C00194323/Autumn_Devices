app = {};
var menu;
var MainMenu = true;
var Play = false;
var Options = false;
var exit = false;
var player;
var RubeeLevel1;
var enemyTutorial;
var enemyLevel1;
var enemyLevel2;
var settingMenu;
var playerWalkingRight = false;
var playerStanding = true;
var playerWalkingLeft =false;
var level;
var TutorialLevel= false;
var FirstLevel= false;
var SecondLevel= false;


function main()
{
	document.addEventListener("touchstart", onTouchStart);


	//creates a new canvas element
	var canvas;
	app.canvas = document.createElement("canvas");
	//adds canvas to document
	document.body.appendChild(app.canvas);
	app.canvas.height = window.innerHeight;
	app.canvas.width = window.innerWidth;
	app.ctx = app.canvas.getContext("2d");
  app.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

	app.menu = new Menu();
	app.player = new Player();
	app.settingMenu=new SettingMenu();
	//app.enemy = new Enemies();
	app.enemyLevel1=[5];
	app.enemyLevel1[0]=new Enemies();
	app.enemyLevel1[1]=new Enemies();
	app.enemyLevel1[2]=new Enemies();
	app.enemyLevel1[3]=new Enemies();
	app.enemyLevel1[4]=new Enemies();
	app.level = new Levels();

	app.RubeeLevel1=[4];
	app.RubeeLevel1[0]= new PickUps();

	app.player.init();
	app.settingMenu.init();
	app.enemyLevel1[0].init(500,300);
	app.enemyLevel1[1].init(800,500);

	app.RubeeLevel1[0].init(100,800);
	app.level.init();
	document.addEventListener("keydown", keyDownHandler);
	update();



}

function update()
{
  app.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	app.menu.init();
	app.settingMenu.init();
	if (MainMenu === true)
	{
		app.menu.draw(app.ctx);
	}
	if(Play === true)
	{

		if(TutorialLevel === true)
		{
			app.level.draw(app.ctx);
			app.level.Collision();
		}

		if(FirstLevel === true)
		{

			app.level.draw(app.ctx);
			app.level.Collision();

			HudElements();

			/*for(j=0;j<app.RubeeLevel1.length;j++)
			{
				app.RubeeLevel1[0].CoinSpinning();
			}*/
			app.RubeeLevel1[0].CoinSpinning();
			for(i=0;i<app.enemyLevel1.length;i++)
			{
				if(app.enemyLevel1[i].enemiesAlive === true)
				{

						app.enemyLevel1[i].movement();
					if(app.enemyLevel1[i].enemyUp===true|| app.enemyLevel1[i].enemyDown ===true)
					{
						app.enemyLevel1[i].draw();
					}
				}
			}

			if(app.player.playerAlive === true)
			{
				if(playerStanding === true)
				{
					app.player.draw(app.ctx);
					app.player.drawArrows(app.ctx);

				}

				if(playerWalkingRight ===true){
					app.player.animation(app.ctx);
					app.player.drawArrows(app.ctx);
				}
				if(playerWalkingLeft ===true){
					app.player.animationLeft(app.ctx);
			}		app.player.drawArrows(app.ctx);}


		}
		if(SecondLevel === true)
		{
			app.level.draw(app.ctx);
			app.level.Collision();
		}
	}
	if(Options === true)
	{
		app.settingMenu.draw(app.ctx);
	}
	window.requestAnimationFrame(update);
	console.log("Updating");
};
function HudElements()
{

  app.ctx.fillStyle = rgb(256,256,256);
	app.ctx.font = 'italic 40pt Calibri';
	app.ctx.TextBaseline = "top";
	app.ctx.fillText("Player Health:" +" "+ app.player.PlayerLive, app.canvas.width/7,(app.canvas.height/7)*5.1);
	app.ctx.fillText("Rubee Collected:", app.canvas.width/7,(app.canvas.height/7)*5.88);

}

function keyDownHandler(j)
{

	if(j.keyCode === 38) //up arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerY-= 10;
			playerStanding=true;
			playerWalkingRight=false;
			playerWalkingLeft=false;
		}
	}

	if(j.keyCode === 40) //down arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerY+=10;
			playerStanding=true;
			playerWalkingRight=false;
			playerWalkingLeft=false;

		}

	}
	if(j.keyCode === 37) //left arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerX-=10;
			playerWalkingLeft=true;
			playerStanding=false;
			playerWalkingRight=false;
		}
	}


	if(j.keyCode === 39) // right arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerX+=10;
			playerWalkingLeft=false;
			playerStanding=false;
			playerWalkingRight=true;
		}
	}
}

function onTouchStart(e)
{
    touches = e.touches;
    touchXPos = e.touches[0].clientX;
    touchYPos = e.touches[0].clientY;

    if (MainMenu === true)
    {
	    	//Play Button
	    if (touches[0].clientX >= app.menu.winWidth &&
	    	touches[0].clientX <= (app.menu.winWidth)+65 &&
	    	touches[0].clientY >= app.menu.winHeight &&
	    	touches[0].clientY <= app.menu.winHeight+ 130)
	    {
	    	console.log("Play Button Pressed");
	    	MainMenu = false;
	    	Play = true;
				TutorialLevel = false;
				FirstLevel = true;
				SecondLevel = false;
	    	Options = false;
	    }

	    //Options Button
	    if (touches[0].clientX >= app.menu.winWidth &&
	    	touches[0].clientX <= app.menu.winWidth+65 &&
	    	touches[0].clientY >= app.menu.winHeight+200 &&
	    	touches[0].clientY <= app.menu.winHeight+330)
	    {
	    	console.log("Options Button Pressed");
	    		MainMenu = false;
		    	Play = false;
	    	 	Options = true;
	    }

	    //Exit Button
	    if (touches[0].clientX >= app.menu.winWidth &&
	    	touches[0].clientX <= app.menu.winWidth+65&&
	    	touches[0].clientY >= app.menu.winHeight+400 &&
	    	touches[0].clientY <= app.menu.winHeight+530)
	    {
	    	console.log("Exit Button Pressed");

	    	if (confirm("Close Window?")) {
	    		close();
	 		 }
	    }
    }

    	if (Play === true)
   		{
				if (touches[0].clientX >= app.player.RightArrowWidth &&
		    	touches[0].clientX <= app.player.RightArrowWidth+64&&
		    	touches[0].clientY >= app.player.RightArrowHeight &&
		    	touches[0].clientY <= app.player.RightArrowHeight+64)
		    {
					app.player.playerX+=10;
					playerStanding=false;
					playerWalkingRight=true;
					playerWalkingLeft=false;
				}
				if (touches[0].clientX >= app.player.LeftArrowWidth &&
		    	touches[0].clientX <= app.player.LeftArrowWidth+64&&
		    	touches[0].clientY >= app.player.LeftArrowHeight &&
		    	touches[0].clientY <= app.player.LeftArrowHeight+64)
		    {
					app.player.playerX-=10;
					playerStanding=false;
					playerWalkingRight=false;
					playerWalkingLeft=true;
				}
				if (touches[0].clientX >= app.player.UpArrowWidth &&
		    	touches[0].clientX <= app.player.UpArrowWidth+64&&
		    	touches[0].clientY >= app.player.UpArrowHeight &&
		    	touches[0].clientY <= app.player.UpArrowHeight+64)
		    {
					app.player.playerY-=10;
					playerStanding=true;
					playerWalkingRight=false;
					playerWalkingLeft=false;
				}
				if (touches[0].clientX >= app.player.DownArrowWidth &&
		    	touches[0].clientX <= app.player.DownArrowWidth+64&&
		    	touches[0].clientY >= app.player.DownArrowHeight &&
		    	touches[0].clientY <= app.player.DownArrowHeight+64)
		    {
					app.player.playerY+=10;
					playerStanding=true;
					playerWalkingRight=false;
					playerWalkingLeft=false;
				}


   		}
    /*if (bOptions === true)
    {
    	if (touches[0].clientX >= 25 &&
	    	touches[0].clientX <= 425 &&
	    	touches[0].clientY >= 500 &&
	    	touches[0].clientY <= 600)
	    {
	    	console.log("Left Arrow Pressed");

	    }

	    if (touches[0].clientX >= 579 &&
	    	touches[0].clientX <= 979 &&
	    	touches[0].clientY >= 500 &&
	    	touches[0].clientY <= 600)
	    {
	    	console.log("Right Arrow Pressed");

	    }
    }*/
};

function rgb(r, g, b)
{
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
};

function clamp(value, min, max)
{
	if(max<min) {
		var temp = min;
		min = max;
		max = temp;
	}
	return Math.max(min, Math.min(value, max));
};
