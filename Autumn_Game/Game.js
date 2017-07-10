app = {};
var menu;
var MainMenu = true;
var Play = false;
var Options = false;
var exit = false;
var player;


function main()
{
	document.addEventListener("touchstart", onTouchStart);
	document.addEventListener("keydown", keyDownHandler);

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
	app.player.init();
	update();

}

function update()
{
  app.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	app.menu.init();
	if (MainMenu === true)
	{
		app.menu.draw(app.ctx);
	}
	if(Play === true)
	{
		if(app.player.playerAlive === true){
			app.player.draw(app.ctx);
		}
	}
	window.requestAnimationFrame(update);
	console.log("Updating");
};

function keyDownHandler(j)
{

	if(j.keyCode === 38) //up arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerY-= 10;
		}
	}

	if(j.keyCode === 40) //down arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerY+=10;
		}

	}
	if(j.keyCode === 37) //left arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerX-=10;
		}
	}

	if(j.keyCode === 39) // right arrow
	{
		if(app.player.playerAlive=== true)
		{
			app.player.playerX+=10;
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
	    	Options = false;
	    }

	    //Options Button
	    if (touches[0].clientX >= app.menu.winWidth &&
	    	touches[0].clientX <= app.menu.winWidth+65 &&
	    	touches[0].clientY >= app.menu.winHeight+200 &&
	    	touches[0].clientY <= app.menu.winHeight+330)
	    {
	    	console.log("Options Button Pressed");
	    	//MainMenu = false;
	    	//Play = false;
	    	//Options = true;
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
		    	touches[0].clientX <= app.player.RightArrowWidth+65&&
		    	touches[0].clientY >= app.menu.winHeight+400 &&
		    	touches[0].clientY <= app.menu.winHeight+530)
		    {
				}
				if (touches[0].clientX >= app.player.LeftArrowWidth &&
		    	touches[0].clientX <= app.player.LeftArrowWidth+65&&
		    	touches[0].clientY >= app.menu.winHeight+400 &&
		    	touches[0].clientY <= app.menu.winHeight+530)
		    {
				}
				if (touches[0].clientX >= app.menu.winWidth &&
		    	touches[0].clientX <= app.menu.winWidth+65&&
		    	touches[0].clientY >= app.menu.winHeight+400 &&
		    	touches[0].clientY <= app.menu.winHeight+530)
		    {
				}

				if (touches[0].clientX >= app.menu.winWidth &&
		    	touches[0].clientX <= app.menu.winWidth+65&&
		    	touches[0].clientY >= app.menu.winHeight+400 &&
		    	touches[0].clientY <= app.menu.winHeight+530)
		    {
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
