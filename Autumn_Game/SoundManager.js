function SoundManager()
{
  var backgroundMusic;
  var backgroundVolume;



  var GameMusic;
  var GameMusicVolume;

};

SoundManager.prototype.init=function()
{
  this.backgroundMusic=new Audio('assets/Music_Assets/BackgroundMusic.mp3');

};
SoundManager.prototype.playMusic=function()
{

  if(MainMenu){
    this.backgroundMusic.loop=true;
    this.backgroundMusic.play();
    this.backgroundMusic.pause();

  }
  if(TutorialLevel||FirstLevel||SecondLevel)
  {

  }
};

SoundManager.prototype.VolumeUp=function()
{
  if(this.backgroundMusic.volume<1)
  {
    this.backgroundMusic.volume+=.1;
  }
  else
  {
    console.log("Volume At Max")
  }
};
SoundManager.prototype.VolumeDown=function()
{
  if(this.backgroundMusic.volume>0.1)
  {
    this.backgroundMusic.volume-=.1;
  }
  else {
    console.log("Volume Muted")
  }
};
