var level1={
  "StoneWall"
  "Grass"
  "Wood"
  "Level1":[
    ["StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall"]
  ]
}

function Levels()
{
    var level1Grass;
    var level1Width;
    var level1Height;
}
Levels.prototype.init=function(){

  this.level1Grass=new Image();
  this.level1Grass.src=''

  this.level1Width=0;
  this.level1Height=0;

}

Levels.prototype.draw=function(ctx){
  app.ctx.drawImage();
}
