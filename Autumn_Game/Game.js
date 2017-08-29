app = {};
/*
*******************************
GameStates
*******************************
*/
var MainMenu = true;
var Play = false;
var Options = false;
var exit = false;
/*
*******************************
Player Control Bools For Arrows/Space Bar
*******************************
*/
var TutorialRarrow = false;
var TutorialLarrow = false;
var TutorialDarrow = false;
var TutorialUarrow = false;
var SpacePressed = false;

/*
*******************************
Bullet Object
*******************************
*/
var bullets=[0];
var bul;
/*
*******************************
Ruby Objects
*******************************
*/
var tRubies=false;
var RubyTutorial;
var RubyLevel1;
var RubyLevel2;
/*
*******************************
Enemy Objects
*******************************
*/
var enemyTutorial;
var enemyLevel1;
var enemyLevel2;
var boss;
/*
*******************************
Menu Object
*******************************
*/
var menu;
var settingMenu;
/*
*******************************
Player Bools/Objects
*******************************
*/
var player;
var playerWalkingRight = false;
var playerWalkingLeft =false;
var playerWalkingDown =true;
var playerWalkingUp =false;
/*
*******************************
Level Bools/Objects and GameMode
*******************************
*/

var level;
var gameMode;
var TutorialLevel= false;
var FirstLevel= false;
var SecondLevel= false;
var singlePlayer = true;
var MultiPlayer = false;
var GameMode = false;

/*
*******************************
Level Text and Timer
*******************************
*/

var FirstLevelTimer =0;
var FirstLevelText='';

var myData;


function main()
{
/*
*******************************
Event Listeners
*******************************
*/
	document.addEventListener("touchstart", onTouchStart);
	document.addEventListener("keydown", keyDownHandler);


/*
*******************************
Creating Canvas Element
*******************************
*/
	var canvas;
	app.canvas = document.createElement("canvas");
	//adds canvas to document
	document.body.appendChild(app.canvas);
	app.canvas.height = window.innerHeight;
	app.canvas.width = window.innerWidth;
	app.ctx = app.canvas.getContext("2d");
  app.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

/*
*******************************
Instances Of Classes
*******************************
*/
	app.menu = new Menu();
	app.player = new Player();
	app.settingMenu=new SettingMenu();
	app.gameMode = new GameModeMenu();
	app.level = new Levels();


	app.player.init();
	app.settingMenu.init();
	app.gameMode.init();
	app.level.init();

/*
*******************************
 	Bullet Assets
*******************************
*/
	app.bullets=[0];
	app.bul;


/*
*******************************
Tutorial Level Assets
*******************************
*/

	app.RubyTutorial=[2];
	app.RubyTutorial[0]= new PickUps();
	app.RubyTutorial[1]= new PickUps();

	app.RubyTutorial[0].init(100,800);
	app.RubyTutorial[1].init(300,800);

	app.enemyTutorial = [1];
	app.enemyTutorial[0]=new Enemies();
	app.enemyTutorial[0].init(800,700);
	app.tRubies=false;

/*
*******************************
First Level Assets
*******************************
*/
	this.FirstLevelTimer=0;
	this.FirstLevelText="Collect All The Rubys";

	app.RubyLevel1=[5];

	app.RubyLevel1[0]= new PickUps();
	app.RubyLevel1[1]= new PickUps();
	app.RubyLevel1[2]= new PickUps();
	app.RubyLevel1[3]= new PickUps();
	app.RubyLevel1[4]= new PickUps();




	app.enemyLevel1=[3];
	app.enemyLevel1[0]=new Enemies();
	app.enemyLevel1[1]=new Enemies();
	app.enemyLevel1[2]=new Enemies();

	app.enemyLevel1[0].init(500,300);
	app.enemyLevel1[1].init(800,500);
	app.enemyLevel1[2].init(100,600);

	app.RubyLevel1[0].init(100,800);
	app.RubyLevel1[1].init(300,800);
	app.RubyLevel1[2].init(500,500);
	app.RubyLevel1[3].init(600,200);
	app.RubyLevel1[4].init(200,400);


/*
*******************************
Second Level Assets
*******************************
*/

app.boss= new Enemies();
app.boss.init(50,50);

app.enemyLevel2=[5];
app.enemyLevel2[0]=new Enemies();
app.enemyLevel2[1]=new Enemies();
app.enemyLevel2[2]=new Enemies();
app.enemyLevel2[3]=new Enemies();
app.enemyLevel2[4]=new Enemies();

app.enemyLevel2[0].init(500,300);
app.enemyLevel2[1].init(800,500);
app.enemyLevel2[2].init(100,600);
app.enemyLevel2[3].init(300,400);
app.enemyLevel2[4].init(400,600);

app.RubyLevel2 = [7];
app.RubyLevel2[0] = new PickUps();
app.RubyLevel2[1] = new PickUps();
app.RubyLevel2[2] = new PickUps();
app.RubyLevel2[3] = new PickUps();
app.RubyLevel2[4] = new PickUps();
app.RubyLevel2[5] = new PickUps();
app.RubyLevel2[6] =	new PickUps();

app.RubyLevel2[0].init(100,150);
app.RubyLevel2[1].init(300,500);
app.RubyLevel2[2].init(200,200);
app.RubyLevel2[3].init(500,700);
app.RubyLevel2[4].init(700,300);
app.RubyLevel2[5].init(800,100);
app.RubyLevel2[6].init(400,450);
/*
*******************************
Sound Manager
*******************************
*/
var Sound;
app.Sound = new SoundManager();
app.Sound.init();






	update();



}

function update()
{
  app.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	app.menu.init();
	app.Sound.playMusic();
	app.Sound.SoundEffects();
	if (MainMenu === true)
	{
		app.menu.draw(app.ctx);

	}
	if(Play === true)
	{
		if(GameMode===true)
		{
			app.gameMode.draw();
		}

			if(singlePlayer === true)
			{

				if(TutorialLevel === true)
				{
					app.level.draw(app.ctx);
					app.level.Collision();

						if(TutorialRarrow === true&&TutorialLarrow === true&&
							TutorialUarrow === true&&TutorialDarrow === true&&
							app.level.tutorialTimer>1180)
						{
							for(j=0;j<app.RubyTutorial.length;j++)
							{
								app.RubyTutorial[j].CoinSpinning();
								app.RubyTutorial[j].Collision();
							}
						}

						for(a=0;a<app.enemyTutorial.length;a++)
						{
							if(app.enemyTutorial[a].enemiesAlive === true)
							{
									app.enemyTutorial[a].movement();
							}
						}

							if(SpacePressed){
								app.bul.BMovement();
								app.bul.CheckAlive();
							}

						if(app.player.playerAlive === true)
						{
							if(playerWalkingUp === true)
							{
								app.player.animationUp();
							}

							if(playerWalkingDown ===true)
							{
								app.player.animationDown();
							}

							if(playerWalkingRight ===true){
								app.player.animation(app.ctx);

							}
							if(playerWalkingLeft ===true){
								app.player.animationLeft(app.ctx);
						}
					}

					HudElements();
				}

				if(FirstLevel === true)
				{

					app.level.draw(app.ctx);
					app.level.Collision();


					for(j=0;j<app.RubyLevel1.length;j++)
					{
						app.RubyLevel1[j].CoinSpinning();
						app.RubyLevel1[j].Collision();
					}

					for(i=0;i<app.enemyLevel1.length;i++)
					{
						if(app.enemyLevel1[i].enemiesAlive === true)
						{
								app.enemyLevel1[i].movement();
						}
					}
						if(app.player.playerAlive === true)
						{
							if(playerWalkingUp === true)
							{

								app.player.animationUp();


							}
							if(playerWalkingDown)
							{
								app.player.animationDown();
							}

							if(playerWalkingRight ===true){
								app.player.animation(app.ctx);

							}
							if(playerWalkingLeft ===true){
								app.player.animationLeft(app.ctx);
						}
					}

					HudElements();
				}
				if(SecondLevel === true)
				{
					app.level.draw(app.ctx);
					app.level.Collision();
					for(j=0;j<app.RubyLevel2.length;j++)
					{
						console.log("Coin Spinning Level 2");
						app.RubyLevel2[j].CoinSpinning();
						app.RubyLevel2[j].Collision();
					}

					if(app.level.RubiesCollected === 7)
					{
						app.boss.BossAlive = true;
					}
					app.boss.BossMovement();
					HudElements();
					/*if(SpacePressed)
					{
						for(b=0;b<app.bullets.length;b++)
						{
							app.bullets[b].update();
						}
					}*/

						for(i=0;i<app.enemyLevel2.length;i++)
						{
							app.enemyLevel2[i].ChangeSprite();
							if(app.enemyLevel2[i].enemiesAlive === true)
							{

									app.enemyLevel2[i].movement();
							}
						}


							if(app.player.playerAlive === true)
							{
								if(playerWalkingUp === true)
								{

									app.player.animationUp();


								}
								if(playerWalkingDown)
								{
									app.player.animationDown();
								}

								if(playerWalkingRight ===true){
									app.player.animation(app.ctx);

								}
								if(playerWalkingLeft ===true){
									app.player.animationLeft(app.ctx);
							}
						}
				}
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



	if(FirstLevel===true){
		this.FirstLevelTimer++;
		app.ctx.fillStyle = rgb(0,0,0);
		app.ctx.font = 'italic 35pt Calibri';
		if(this.FirstLevelTimer >180){
			this.FirstLevelText= " And Avoid the Enemies";
	}
	if (this.FirstLevelTimer>320	){
		this.FirstLevelText= " To Make It To Level 2";
	}
	app.ctx.fillText(this.FirstLevelText
	,app.canvas.width/7,(app.canvas.height/7)*4.55);
	}
  app.ctx.fillStyle = rgb(256,256,256);
	app.ctx.font = 'italic 40pt Calibri';
	app.ctx.TextBaseline = "top";
	app.ctx.fillText("Player Health:" +" "+ app.player.PlayerLife, app.canvas.width/7,(app.canvas.height/7)*5.1);
	if(FirstLevel){
		app.ctx.fillText("Ruby Collected:" +" "+ app.level.RubiesCollected + app.level.Level1Rubys, app.canvas.width/7,(app.canvas.height/7)*5.88);
	}
	if(TutorialLevel)
	{
		app.ctx.fillText("Ruby Collected:" +" "+ app.level.RubiesCollected + app.level.TutorialRubys, app.canvas.width/7,(app.canvas.height/7)*5.88);
		if(app.level.RubiesCollected === 2)
		{
			tRubies=true;
			console.log(tRubies);
		}
	}
	if(SecondLevel)
	{

		app.ctx.fillText("Ruby Collected:" +" "+ app.level.RubiesCollected + app.level.Level2Rubys, app.canvas.width/7,(app.canvas.height/7)*5.88);
	}

	app.player.drawControls(app.ctx);
}

function keyDownHandler(j)
{

	if(j.keyCode === 38) //up arrow
	{
		if(app.player.playerAlive=== true)
		{
			if(FirstLevel===true||SecondLevel===true)
			{
				app.player.playerY-=10;
				playerWalkingUp=true;
				playerWalkingRight=false;
				playerWalkingLeft=false;
				playerWalkingDown=false;
			}
			if(TutorialLevel === true&&TutorialLarrow===true)
			{
				if(app.level.tutorialTimer>720)
				{
					TutorialUarrow=true;
					app.player.playerY-=10;
					playerWalkingUp=true;
					playerWalkingRight=false;
					playerWalkingLeft=false;
					playerWalkingDown=false;
				}
			}
		}
	}

	if(j.keyCode === 40) //down arrow
	{
		if(app.player.playerAlive=== true)
		{
			if(FirstLevel===true||SecondLevel===true)
			{
				app.player.playerY+=10;
				playerWalkingRight=false;
				playerWalkingLeft=false;
				playerWalkingDown=true;
				playerWalkingUp=false;
			}
			if(TutorialLevel === true&&TutorialUarrow===true)
			{
				if(app.level.tutorialTimer>940)
				{
					TutorialDarrow=true;
					app.player.playerY+=10;
					playerWalkingDown=true;
					playerWalkingUp=false;
					playerWalkingRight=false;
					playerWalkingLeft=false;
				}
			}
		}

	}
	if(j.keyCode === 32) // Space Bar
	{
		if(Play)
		{
			SpacePressed=true;
			if((TutorialLevel||SecondLevel)&&SpacePressed)
			{
				app.bul = new Bullet();
				if(playerWalkingUp)
				{
					app.bul.init(app.player.playerX,app.player.playerY,0);
				}
				if(playerWalkingDown)
				{
					app.bul.init(app.player.playerX,app.player.playerY,1);
				}
				if(playerWalkingLeft)
				{
					app.bul.init(app.player.playerX,app.player.playerY,2);
				}
				if(playerWalkingRight)
				{
					app.bul.init(app.player.playerX,app.player.playerY,3);
				}
				//app.bullets.push(app.bul);
			}
		}
	}
	if(j.keyCode === 37) //left arrow
	{
		if(MainMenu){
			app.Sound.VolumeDown();
		}
		if(app.player.playerAlive=== true)
		{
			if(FirstLevel===true||SecondLevel===true)
			{
				app.player.playerX-=10;
				playerWalkingDown=false;
				playerWalkingUp=false;
				playerWalkingRight=false;
				playerWalkingLeft=true;
			}
			if(TutorialLevel === true&&TutorialRarrow===true)
			{
				if(app.level.tutorialTimer>600)
				{
					TutorialLarrow=true;
					app.player.playerX-=10;
					playerWalkingDown=false;
					playerWalkingUp=false;
					playerWalkingRight=false;
					playerWalkingLeft=true;
				}
			}
		}
	}


	if(j.keyCode === 39) // right arrow
	{
		if(MainMenu){
			app.Sound.VolumeUp();
		}
		if(app.player.playerAlive=== true)
		{
			if(FirstLevel===true||SecondLevel===true)
			{
				app.player.playerX+=10;
				playerWalkingDown=false;
				playerWalkingUp=false;
				playerWalkingRight=true;
				playerWalkingLeft=false;
			}
			if(TutorialLevel === true&&app.level.tutorialTimer>480)
			{
					TutorialRarrow=true;
					app.player.playerX+=10;
					playerWalkingDown=false;
					playerWalkingUp=false;
					playerWalkingRight=true;
					playerWalkingLeft=false;
			}
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
				GameMode= true;
				TutorialLevel = false;
				FirstLevel = false;
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

		if(GameMode === true)
		{
			if (touches[0].clientX >= app.canvas.width/3 &&
				touches[0].clientX <= (app.canvas.width/3)+130&&
				touches[0].clientY >= app.canvas.height/2 &&
				touches[0].clientY <= (app.canvas.height/2)+130)
			{
				console.log("Single Player Selected");
				MainMenu = false;
	    	Play = true;
				GameMode= false;
				TutorialLevel = true;
				FirstLevel = false;
				SecondLevel = false;
	    	Options = false;
			}

			if (touches[0].clientX >= app.canvas.width/2 &&
				touches[0].clientX <= (app.canvas.width/2)+130&&
				touches[0].clientY >= app.canvas.height/2 &&
				touches[0].clientY <= (app.canvas.height/2)+130)
			{
				console.log("MultiPlayer Selected");
				MainMenu = false;
	    	Play = true;
				GameMode= false;
				TutorialLevel = false;
				FirstLevel = true;
				SecondLevel = false;
	    	Options = false;
			}


		}

    	if (Play === true)
   		{
				if (touches[0].clientX >= app.player.RightArrowWidth &&
		    	touches[0].clientX <= app.player.RightArrowWidth+64&&
		    	touches[0].clientY >= app.player.RightArrowHeight &&
		    	touches[0].clientY <= app.player.RightArrowHeight+64)
		    {
					if(FirstLevel===true||SecondLevel===true)
					{
						app.player.playerX+=10;
						playerWalkingDown=false;
						playerWalkingUp=false;
						playerWalkingRight=true;
						playerWalkingLeft=false;
					}
					if(TutorialLevel === true&&app.level.tutorialTimer>480)
					{
							TutorialRarrow=true;
							app.player.playerX+=10;
							playerWalkingDown=false;
							playerWalkingUp=false;
							playerWalkingRight=true;
							playerWalkingLeft=false;
					}
				}
				if (touches[0].clientX >= app.player.LeftArrowWidth &&
		    	touches[0].clientX <= app.player.LeftArrowWidth+64&&
		    	touches[0].clientY >= app.player.LeftArrowHeight &&
		    	touches[0].clientY <= app.player.LeftArrowHeight+64)
		    {
					if(FirstLevel===true||SecondLevel===true)
					{
						app.player.playerX-=10;
						playerWalkingDown=false;
						playerWalkingUp=false;
						playerWalkingRight=false;
						playerWalkingLeft=true;
					}
					if(TutorialLevel === true&&TutorialRarrow===true)
					{
						if(app.level.tutorialTimer>600)
						{
							TutorialLarrow=true;
							app.player.playerX-=10;
							playerWalkingDown=false;
							playerWalkingUp=false;
							playerWalkingRight=false;
							playerWalkingLeft=true;
						}
					}
				}
				if (touches[0].clientX >= app.player.UpArrowWidth &&
		    	touches[0].clientX <= app.player.UpArrowWidth+64&&
		    	touches[0].clientY >= app.player.UpArrowHeight &&
		    	touches[0].clientY <= app.player.UpArrowHeight+64)
		    {
					if(FirstLevel===true||SecondLevel===true)
					{
						app.player.playerY-=10;
						playerWalkingDown=false;
						playerWalkingUp=true;
						playerWalkingRight=false;
						playerWalkingLeft=false;
					}
					if(TutorialLevel === true&&TutorialLarrow===true)
					{
						if(app.level.tutorialTimer>720)
						{
							TutorialUarrow=true;
							app.player.playerY-=10;
							playerWalkingDown=false;
							playerWalkingUp=true;
							playerWalkingRight=false;
							playerWalkingLeft=false;
						}
					}
				}
				if (touches[0].clientX >= app.player.DownArrowWidth &&
		    	touches[0].clientX <= app.player.DownArrowWidth+64&&
		    	touches[0].clientY >= app.player.DownArrowHeight &&
		    	touches[0].clientY <= app.player.DownArrowHeight+64)
		    {
					if(FirstLevel===true||SecondLevel===true)
					{
						app.player.playerY+=10;
						playerWalkingDown=true;
						playerWalkingUp=false;
						playerWalkingRight=false;
						playerWalkingLeft=false;
					}
					if(TutorialLevel === true&&TutorialUarrow===true)
					{
						if(app.level.tutorialTimer>940)
						{
							TutorialDarrow=true;
							app.player.playerY+=10;
							playerWalkingDown=true;
							playerWalkingUp=false;
							playerWalkingRight=false;
							playerWalkingLeft=false;
						}
					}
				}


   		}
    if (Options === true)
    {

			if(touches[0].clientX >= app.settingMenu.soundUpWidth &&
	    	touches[0].clientX <= app.settingMenu.soundUpWidth+130 &&
	    	touches[0].clientY >= app.settingMenu.soundUpHeight &&
	    	touches[0].clientY <= app.settingMenu.soundUpHeight+130)
				{
					if(app.settingMenu.VolumeText<100)
					{
						app.settingMenu.VolumeText +=10;
					}
					app.Sound.VolumeUp();
				}

				if(touches[0].clientX >= app.settingMenu.soundDownWidth &&
		    	touches[0].clientX <= app.settingMenu.soundDownWidth+130 &&
		    	touches[0].clientY >= app.settingMenu.soundDownHeight &&
		    	touches[0].clientY <= app.settingMenu.soundDownHeight+130)
					{
						if(app.settingMenu.VolumeText>0)
						{
							app.settingMenu.VolumeText -=10;
						}
						app.Sound.VolumeDown();
					}
    	if (touches[0].clientX >= app.canvas.width/2.4 &&
	    	touches[0].clientX <= (app.canvas.width/2.4)+130 &&
	    	touches[0].clientY >= ((app.canvas.height/2)*1.5) &&
	    	touches[0].clientY <= ((app.canvas.height/2)*1.5)+130)
	    {
	    	console.log("Exit To Menu");

				MainMenu = true;
				Play = false;
				Options = false;

	    }
		}
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
