var level1={
  "Level1":[
    ["StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","Grass","StoneWall"],
    ["StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall"]
  ]
}

var level2={
  "Level2":[
    ["StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","Wood","StoneWall"],
    ["StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall","StoneWall"]
  ]
}

function Levels()
{
    var level1Grass;
    var level1StoneWall;
    var level1Width;
    var level1Height;
}
Levels.prototype.init=function(){

  this.level1Grass=new Image();
  this.level1Grass.src='assets/Level_Assets/Level1_Assets/Grass.png';

  this.level1StoneWall=new Image();
  this.level1StoneWall.src='assets/Level_Assets/Level1_Assets/StoneWall.png';



}

Levels.prototype.draw=function(ctx){
  for (i=0;i<17;i++)
  {
    for(j=0;j<15;j++)
    {
      if(level1.Level1[i][j]==="StoneWall")
      {
        app.ctx.drawImage(this.level1StoneWall,j*64,i*64,64,64);
      }
      if(level1.Level1[i][j]==="Grass")
      {
        app.ctx.drawImage(this.level1Grass,j*64,i*64,64,64);
      }
    }
  }
}
