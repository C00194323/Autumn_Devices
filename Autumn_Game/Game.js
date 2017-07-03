app = {};
var menu;
var MainMenu = true;
var Play = false;
var Options = false;
var exit = false;


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
	window.requestAnimationFrame(update);
	console.log("Updating");
};

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
	    	//MainMenu = false;
	    	//Play = true;
	    	//Options = false;
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

    //if (Play === true)
   // {
    	//app.player.init(touches[0].clientX, touches[0].clientY);
    	//app.player.init(touchXPos, touchYPos);
   // }

    /*if (bOptions === true)
    {
    	if (touches[0].clientX >= 25 &&
	    	touches[0].clientX <= 425 &&
	    	touches[0].clientY >= 500 &&
	    	touches[0].clientY <= 600)
	    {
	    	console.log("Left Arrow Pressed");
	    	arrowLeft = true;
	    	arrowRight =  false;
	    }

	    if (touches[0].clientX >= 579 &&
	    	touches[0].clientX <= 979 &&
	    	touches[0].clientY >= 500 &&
	    	touches[0].clientY <= 600)
	    {
	    	console.log("Right Arrow Pressed");
	    	arrowLeft = false;
	    	arrowRight =  true;
	    }
    }*/
};
