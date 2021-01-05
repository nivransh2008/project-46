const Engine = Matter.Engine;
const World = Matter.World;
// const Events = Matter.Events;
const Bodies = Matter.Bodies; 

var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";
var particle1; 
var mousepointer = 0; 
 



function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 120) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75, 255,0,0));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175, 0, 0, 255));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275, 0, 255, 0));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375, 255,255,0));
    }

    particle1 = new Particle(100,50,15); 

    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text("200  ", 30, 550);
  text(" 600 ", 140, 550);
  text(" 800 ", 260, 550);
  text(" 10 ", 390, 550);
  text(" 1 ", 520, 550);
  text(" 1000 ", 610, 550);
  text(" 5000 ", 730, 550);
  text(" 100 ", 860, 550);
  text(" 7000 ", 970, 550);
  text(" 10000 ", 1080, 550);
  text(" 300 ", 1220, 550);
  text(" 800 ", 1340, 550);
  text(" 5000 ", 1450, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle1 != null)
    {
      //  particle.display();
        
        if (particle1.body.position.y>760)
        {
              if (particle1.body.position.x < 100) 
              {
                  score = score + 200;  
                  console.log(score);  
                  // particle = null;
                  // if ( count>= 5)
                  // {
                  //   gameState ="end"; 
                  // }                            
              }


              else if (particle1.body.position.x < 600 && particle1.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle1 = null;
                    // if ( count>= 5)
                    // {
                    //   gameState ="end"; 
                    // }

              }
              else if (particle1.body.position.x < 900 && particle1.body.position.x > 601 )
              {
                    score = score + 200;
                    // particle = null;
                    // if ( count>= 5)
                    // {
                    //   gameState ="end"; 
                    // }
              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

   particle1.display(); 
 
}


// function mousePressed()
// {
//   if(gameState !== "end")
//   {
//       count++;
//      particle = new Particle(mouseX, 10, 10, 10); 
//   }   
// }

function keyPressed(){

if(keyCode == 32){
  // mousepointer = mousepointer + 1; 
  // if(mousepointer >= 1){
    Matter.Body.setStatic(particle1.body, false); 
  // }
}

}
