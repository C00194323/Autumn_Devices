function Menu(){

	var Background;
	var PlayButton;
	var OptionsButton;
	var exitButton;
	var winHeight;
	var winWidth;
};
Menu.prototype.init= function() {

	this.winHeight=(window.innerHeight)/3;
  this.winWidth =(window.innerWidth)/2;

	this.Background = new Image();
	this.Background.src = 'assets/Menu_Assets/Menu_Background.jpg';

	this.PlayButton = new Image();
	this.PlayButton.src = 'assets/Menu_Assets/play_button.png';

	this.OptionsButton = new Image();
	this.OptionsButton.src = 'assets/Menu_Assets/setting_button.png';

	this.exitButton = new Image();
	this.exitButton.src = 'assets/Menu_Assets/exit_button.png';

};

Menu.prototype.draw= function(ctx) {

	app.ctx.drawImage(this.Background,0,0,app.canvas.width,app.canvas.height);

	app.ctx.drawImage(this.PlayButton,this.winWidth-65,this.winHeight,130,130);
	app.ctx.drawImage(this.OptionsButton,this.winWidth-65,this.winHeight+200,130,130);
	app.ctx.drawImage(this.exitButton,this.winWidth-65,this.winHeight+400,130,130);
};
