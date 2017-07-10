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
}
