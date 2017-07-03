app={}
var isTouch = 'ontouchstart' in window;

function TouchTest(){
	var ctx;
}

// used to detect a touch device
TouchTest.prototype.is_touch_device=function()
{
	 return isTouch;  
}

// used to detect touch
TouchTest.prototype.onTouchStart=function(e)
{
    touches = e.touches; 
   //print outs out the x and y co-ordinates
    console.log(touches[0].clientX, touches[0].clientY);

	var mouse = {x:0, y:0};
	mouse.x = touches[0].clientX - mouse.x;
	mouse.y = touches[0].clientY - mouse.y;

    var lane1 = Math.round(((app.canvas.width / 3) /2) - 32);
    var lane3 = Math.round(((app.canvas.width / 2) - 32) + (app.canvas.width / 3));
    var x = Math.round(app.player.x);

	if (app.player.x > touches[0].clientX && app.player.x != app.lane1 )
	{
		if (x != lane1)
		{
			app.player.x -= (app.canvas.width / 3); 
		}
	}
	else if(app.player.x < touches[0].clientX && app.player.x != app.lane3)
	{
		if (x != lane3)
		{
		 	app.player.x += (app.canvas.width / 3);
		}
	}
}



