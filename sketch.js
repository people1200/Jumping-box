
var canvas; 
var music;
 var surface1; 
 var surface2;
  var surface3; 
  var surface4; 
  var box; 
  function preload(){
       music = loadSound("music.mp3");
     } 
     function setup(){
          canvas = createCanvas(800,600); 
          //create box sprite and give velocity 
          box=createSprite(random(20,750)) ;
           box.shapeColor="white" ;
            box.velocityY=5 ;
             //create 4 different surfaces 
        surface1=createSprite(100,600,150,100) ; 
        surface2=createSprite(300,600,150,100) ; 
        surface3=createSprite(500,600,150,100) ; 
        surface4=createSprite(700,600,150,100) ; 
        surface1.shapeColor="blue" ; 
        surface2.shapeColor="pink" ; 
        surface3.shapeColor="red" ; 
        surface4.shapeColor="green" ; 
    } function draw() { 
        background(rgb(169,169,169));
         //create edgeSprite
          edges=createEdgeSprites(); 
          box.bounceOff(edges); 
          if(surface1.isTouching(box)){
              box.shapeColor=rgb(255,128,0);
              box.velocityX=0
              music.stop();
          }
          //add condition to check if box touching surface and make it box
           if(surface1.isTouching(box) && box.bounceOff(surface1)){
                box.shapeColor="blue"; 
            } 
            if(surface2.isTouching(box) && box.bounceOff(surface2)){
                 box.shapeColor="pink" ;
                 } 
                 if(surface3.isTouching(box) && box.bounceOff(surface3)){ 
                     box.shapeColor="red"; 
                    }
                     if(surface4.isTouching(box) && box.bounceOff(surface4)){
                         box.shapeColor="green"; 
                        } 
                        drawSprites() ; }