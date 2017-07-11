function SettingMenu()
{
  var settingBackground;
  var soundUp;
  var soundDown;
}

SettingMenu.prototype.init= function(){
  this.settingBackground = new Image();
  this.settingBackground.src = 'assets/Menu_Assets/MenuBackground.jpg';

  this.soundUp=new Image();
  this.soundUp.src='';

  this.soundDown=new Image();
  this.soundDown.src='';
}

SettingMenu.prototype.draw= function(ctx){
  app.ctx.drawImage(this.settingBackground,0,0,app.canvas.width,app.canvas.height);
}
