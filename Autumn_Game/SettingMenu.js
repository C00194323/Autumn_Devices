function SettingMenu()
{
  var settingBackground;
  var soundUp;
  var soundDown;
  var soundUpWidth;
  var soundDownWidth;
  var soundUpHeight;
  var soundDownHeight;
  var textheight;
  var textWidth;
  var exitButton;
  var VolumeText;
}

SettingMenu.prototype.init= function(){
  this.settingBackground = new Image();
  this.settingBackground.src = 'assets/SettingMenu_Assets/SettingBackground.jpg';

  this.soundUp=new Image();
  this.soundUp.src='assets/SettingMenu_Assets/SoundUp.png';

  this.soundDown=new Image();
  this.soundDown.src='assets/SettingMenu_Assets/SoundDown.png';

  this.soundUpWidth = window.innerWidth/3;
  this.soundUpHeight = window.innerHeight/4 -67;

  this.soundDownWidth = window.innerWidth/2;
  this.soundDownHeight = window.innerHeight/4 -67;

  this.textheight= window.innerHeight/4;
  this.textWidth= window.innerWidth/6;

  this.VolumeText = 100;

  this.exitButton = new Image();
  this.exitButton.src='assets/SettingMenu_Assets/Exit.png';


}

SettingMenu.prototype.draw= function(ctx){

  app.ctx.drawImage(this.settingBackground,0,0,app.canvas.width,app.canvas.height);

  app.ctx.fillStyle = rgb(0,0,0);
  app.ctx.font = 'italic 52pt Calibri';
  app.ctx.TextBaseline = "top";
  app.ctx.fillText("Settings" , app.canvas.width/2.6,app.canvas.height/6);


	app.ctx.font = 'italic 40pt Calibri';
	app.ctx.TextBaseline = "middle";
  //app.ctx.textAlign = "center";
	app.ctx.fillText("Music:", this.textWidth,this.textheight);
  app.ctx.fillText("Music Volume :" + this.VolumeText, ((app.canvas.width/2)*.3),((app.canvas.height/2.7)));  app.ctx.fillText("Exit :", app.canvas.width/3.6,((app.canvas.height/2)*1.6));


  app.ctx.drawImage(this.soundUp,this.soundUpWidth,this.soundUpHeight);
  app.ctx.drawImage(this.soundDown,this.soundDownWidth,this.soundDownHeight);

  app.ctx.drawImage(this.exitButton,app.canvas.width/2.4,((app.canvas.height/2)*1.5))
}
