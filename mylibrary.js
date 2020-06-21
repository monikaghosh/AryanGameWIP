function createpath(){

var line1 = createSprite(500,75,1000,1);
line1.shapeColor = "green";  

var line2 = createSprite(500,150,750,5);
line2.shapeColor = "red";  

var line3 = createSprite(500,250,750,5);
line3.shapeColor = "green"; 

var line4 = createSprite(500,350,750,5);
line4.shapeColor = "blue";

var line5 = createSprite(500,450,750,5);
line5.shapeColor = "white"; 
}

//for making of energy
function createEnergy(){
    energy = energy + 0.25 ;
  };

//making of enemies in different lanes
  function spawnenemy(){
    if(frameCount % 100 === 0){
      var rand = Math.round(random(0.5,3))
      
      
      switch(rand){
        case 1: enemy1 = new Enemy(890,400,50,50);
        break;
        case 2: enemy1 = new Enemy(890,300,50,50);
        break;
        case 3: enemy1 = new Enemy(890,200,50,50);
        default:break;
      }
      enemy1.body.velocityX = -2;
      enemy1group.add(enemy1.body);
      EnemyObjectGroup.push(enemy1);
      
    }};  

//the clash bettween the roborts
    function fight(){
        for(var i = 0;i < player1group.maxDepth();i++ ){
          var p1 = player1group.get(i);
          if(p1 != null ){
          for(var k = 0;k < enemy1group.maxDepth();k++){
            var e1 = enemy1group.get(k);
            if(e1 != null  && p1.isTouching(e1)){
          
              ehealth = ehealth-0.5;
              phealth = phealth-0.5;
          
            }
        }
      }
      }};
//TRIAL function
function fight1(){
        
        for(var i = 0;i < PlayerObjectGroup.length;i++ ){
          var p1 = PlayerObjectGroup[i];
          if(p1!= null ){
          
            for(var k = 0;k < EnemyObjectGroup.length;k++){
              var e1 = EnemyObjectGroup[k];
              
              if(e1!= null  && p1.body.isTouching(e1.body)){
                console.log("test");
                e1.health=e1.health-4;
                p1.health=p1.health-2;
                e1.body.velocityX=-0.5;
                p1.body.velocityX=0.5;
                ehealth = ehealth-0.5;
                phealth = phealth-0.5;
                text("eH:"+e1.health,e1.body.x,e1.body.y-30);
                text("pH:"+p1.health,p1.body.x,p1.body.y-30);
                  if(e1.health<=0){
                    e1.body.velocityX=0;
                    e1.body.destroy();
                    p1.body.velocityX=2;
                  }
                  if(p1.health<=0){
                    p1.body.destroy();
                  }
              }
            }
          }
        }
}

//starting story      
      function story(){
        if(gameState === "start"){
        text("Story",230,160);
        text("Once upon a time their was a calm and happy village",200,200);
        text(",but suddenly one day some of the robots came to ",200,215);
        text("destroy all the villages and kill all the villagers",200,230);
        text(" and to collect all the resources. YOU ARE THE ONE  ",200,245);
        text("WHO CAN HELP US I AM A VILLAGER WHO IS HERE TO ",200,260);
        text("TELL THIS STORY NOW PRESS (y) BUTTON TO START THE GAME ",200,275);
        text("best of luck",200,290);
        }}      


//creation of our roborts
function robos(){
  
  if (keyCode===82 && energy>=50) //82 for r
  {
    player1 = new Player(110,200,50,50);
    //energy = energy - 50;
    energy = energy - 1;
  }
  if( keyCode===66 && energy>=50) //66 for b
  {
    player1 = new Player(110,400,50,50);
       //energy = energy - 50;
       energy = energy - 1;

  }
  if( keyCode===71 && energy>=50) //71 for g
  {
    player1 = new Player(110,300,50,50);
       //energy = energy - 50;
       energy = energy - 1;
  }
  //to add the entire object player1 to an array
  PlayerObjectGroup.push(player1);
}
  
    
  

//instrution at top
  function swpaningins(){
    fill("blue");
    push();
    text("Press (b) to summon robort in lane 3,it will cost 50 energy",670,60);
    text("Press (r) to summon robort in lane 1,it will cost 50 energy",670,20);
    text("Press (g) to summon robort in lane 2,it will cost 50 energy",670,40);
    text("energy "+Math.round(energy),10,70);
    text("<= your house",200,130);
    text("enemy's house =>",750,130);  
    pop();
  }

  function enehealthcheck(){
    for(var i = 0;i < enemy1health.length;i++){
      enemy1health[i].health = health;
    }
  }

  function kuchbi(){
    if(phealth  <= 0 ){
      text("you are also killed by roborts better luck in ",300,300)
      gameState = "end";
    }
  }