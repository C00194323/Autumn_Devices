function SettingMenu()
{
  var settingBackground;
  var soundUp;
  var soundDown;
  var soundUpWidth;
  var soundDownWidth;
  var soundUpHeight;
  var soundDownHeight;
}

SettingMenu.prototype.init= function(){
  this.settingBackground = new Image();
  this.settingBackground.src = 'assets/SettingMenu_Assets/SettingMenuBackground.png';

  this.soundUp=new Image();
  this.soundUp.src='assets/SettingMenu_Assets/SoundUp.png';

  this.soundDown=new Image();
  this.soundDown.src='assets/SettingMenu_Assets/SoundDown.png';

  this.soundUpWidth = window.innerWidth-200;
  this.soundUpHeight = window.innerHeight-700;

}

SettingMenu.prototype.draw= function(ctx){

  app.ctx.drawImage(this.settingBackground,0,0,app.canvas.width,app.canvas.height);

  app.ctx.fillStyle = rgb(250,0, 250);
	app.ctx.font = 'italic 40pt Calibri';
	app.ctx.TextBaseline = "top";
	app.ctx.fillText("Sound:" , 100,100);
  
  app.ctx.drawImage(this.soundUp,this.soundUpWidth,this.soundUpHeight);
}
