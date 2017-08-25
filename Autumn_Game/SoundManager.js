function SoundManager()
{
  var backgroundMusic;
  var backgroundVolume;

  var PickUpSoundEffect;

  var GameMusic;
  var GameMusicVolume;

};

SoundManager.prototype.init=function()
{
  this.backgroundMusic=new Audio('assets/Music_Assets/BackgroundMusic.mp3');
  this.PickUpSoundEffect = new Audio('assets/Music_Assets/sfx_Ruby.wav');
};
SoundManager.prototype.playMusic=function()
{

  if(MainMenu){
    this.backgroundMusic.loop=true;
    this.backgroundMusic.play();
  }
  else if(TutorialLevel ===true||FirstLevel ===true||SecondLevel ===true)
  {
    this.backgroundMusic.pause();
  }
};

SoundManager.prototype.SoundEffects=function()
{
  if(rubyPicked)
  {
    this.PickUpSoundEffect.play();
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
