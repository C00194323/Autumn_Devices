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
}

SettingMenu.prototype.init= function(){
  this.settingBackground = new Image();
  this.settingBackground.src = 'assets/SettingMenu_Assets/SettingMenuBackground.png';

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

}

SettingMenu.prototype.draw= function(ctx){

  app.ctx.drawImage(this.settingBackground,0,0,app.canvas.width,app.canvas.height);

  app.ctx.fillStyle = rgb(256,256,256);
	app.ctx.font = 'italic 40pt Calibri';
	app.ctx.TextBaseline = "top";
	app.ctx.fillText("Sound:" , this.textWidth,this.textheight);

  app.ctx.drawImage(this.soundUp,this.soundUpWidth,this.soundUpHeight);
    app.ctx.drawImage(this.soundDown,this.soundDownWidth,this.soundDownHeight);
}
