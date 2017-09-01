function SoundManager()
{
  var backgroundMusic;
  var backgroundVolume;

  var PickUpSoundEffect;

  var BossAppearSoundEffect;

  var PlayerDeathSoundEffect;
  var EnemyDeathSoundEffect;

  var GameMusic;
  var GameMusicVolume;

};

SoundManager.prototype.init=function()
{
  this.backgroundMusic=new Audio('assets/Music_Assets/BackgroundMusic.mp3');
  this.GameMusic=new Audio('assets/Music_Assets/GameMusic.mp3');
  this.PickUpSoundEffect = new Audio('assets/Music_Assets/sfx_Ruby.wav');
  this.PlayerDeathSoundEffect=new Audio('assets/Music_Assets/sfx_HumanDeath.wav');
  this.EnemyDeathSoundEffect=new Audio('assets/Music_Assets/sfx_EnemieDeath.wav');
  this.BossAppearSoundEffect=new Audio('assets/Music_Assets/sfx_BossAppear.wav');
  this.PlayerDeathSoundEffect.loop=false;
  this.EnemyDeathSoundEffect.loop=false;
  this.PickUpSoundEffect.loop=false;
  this.BossAppearSoundEffect.loop=false;
};
SoundManager.prototype.playMusic=function()
{

  if(MainMenu){
    this.backgroundMusic.loop=true;
    this.backgroundMusic.play();
    this.GameMusic.pause();
  }
  else if(Play === true && (TutorialLevel ===true||FirstLevel ===true||SecondLevel ===true))
  {
    this.backgroundMusic.pause();
    this.GameMusic.loop=true;
    this.GameMusic.play();
  }
};

SoundManager.prototype.SoundEffects=function()
{
  if(rubyPicked)
  {
    this.PickUpSoundEffect.play();
  }
};
SoundManager.prototype.EnemyDeath=function()
{
    this.EnemyDeathSoundEffect.play();
};
SoundManager.prototype.PlayerDeath=function()
{
  this.PlayerDeathSoundEffect.play();
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
