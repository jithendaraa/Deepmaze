//Variables

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d'); 
  var v = 2; 
  
  var vy = v*Math.random();
  var vy1 = v*Math.random();
  var vy2 = v*Math.random();
  var vy3 = v*Math.random();
  var vy4 = v*Math.random();
  var vy5 = v*Math.random();
  var vy6 = v*Math.random();

  var lvlspeed = 1;

  var y1 = 475*Math.random();
  var y2 = 475*Math.random();
  var y3 = 475*Math.random();
  var y4 = 475*Math.random();
  var y5 = 475*Math.random();
  var y6 = 475*Math.random();

  var wlopp;
  var score = 0;
  var fps = 60;
  var time = 0; 
  var mousex = 550,mousey = 250;
  var bs = 1;


//Functions to draw Deep

  ctx.canvas.addEventListener("mousemove",deep,false);
  function deep(e)
  {
  	 mousex=e.clientX-ctx.canvas.offsetLeft;
     mousey=e.clientY-ctx.canvas.offsetTop;
  }
  function drawDeep()
  {
  	ctx.fillStyle="yellow";
  	ctx.beginPath();
  	ctx.moveTo(mousex,mousey);
  	ctx.arc(mousex,mousey,5,0,Math.PI*2,true);
  	ctx.fill();
  	ctx.closePath();
  }

//Hit Tests(for walls,obsatcles and bullets)

   function mazeHitTest()
 {
 	
if(mousey>wall1.sy+45)
 {
  if(mousex>wall1.posx && mousex-wall1.posx<30)
    gameover();
 }
 if(mousey<wall1.sy+5)
 {
   if(mousex>wall1.posx && mousex-wall1.posx<30)
   gameover();
 }
 if(wall1.posx-mousex<5 && wall1.posx-mousex>=0)
 {
   if( mousey>wall1.sy+45 || mousey<wall1.sy+5)
    gameover();
 }
 
if(mousey>wall2.sy+45)
 {
  if(mousex>wall2.posx && mousex-wall2.posx<30)
    gameover();
 }
 if(mousey<wall2.sy+5)
 {
   if(mousex>wall2.posx && mousex-wall2.posx<30)
   gameover();
 }
 if(wall2.posx-mousex<5 && wall2.posx-mousex>=0)
 {
   if( mousey>wall2.sy+45 || mousey<wall2.sy+5)
    gameover();
 }
if(mousey>wall3.sy+45)
 {
  if(mousex>wall3.posx && mousex-wall3.posx<30)
    gameover();
 }
 if(mousey<wall3.sy+5)
 {
   if(mousex>wall3.posx && mousex-wall3.posx<30)
   gameover();
 }
 if(wall3.posx-mousex<5 && wall3.posx-mousex>=0)
 {
   if( mousey>wall3.sy+45 || mousey<wall3.sy+5)
    gameover();
 }
if(mousey>wall4.sy+45)
 {
  if(mousex>wall4.posx && mousex-wall4.posx<30)
    gameover();
 }
 if(mousey<wall4.sy+5)
 {
   if(mousex>wall4.posx && mousex-wall4.posx<30)
   gameover();
 }
 if(wall4.posx-mousex<5 && wall4.posx-mousex>=0)
 {
   if( mousey>wall4.sy+45 || mousey<wall4.sy+5)
    gameover();
 }
 if(mousey>wall5.sy+45)
 {
  if(mousex>wall5.posx && mousex-wall5.posx<30)
    gameover();
 }
 if(mousey<wall5.sy+5)
 {
   if(mousex>wall5.posx && mousex-wall5.posx<30)
   gameover();
 }
 if(wall5.posx-mousex<5 && wall5.posx-mousex>=0)
 {
   if( mousey>wall5.sy+45 || mousey<wall5.sy+5)
    gameover();
 }
 if(mousey>wall6.sy+45)
 {
  if(mousex>wall6.posx && mousex-wall6.posx<30)
    gameover();
 }
 if(mousey<wall6.sy+5)
 {
   if(mousex>wall6.posx && mousex-wall6.posx<30)
   gameover();
 }
 if(wall6.posx-mousex<5 && wall6.posx-mousex>=0)
 {
   if( mousey>wall6.sy+45 || mousey<wall6.sy+5)
    gameover();
 }
 if(mousey>wall7.sy+45)
 {
  if(mousex>wall7.posx && mousex-wall7.posx<30)
    gameover();
 }
 if(mousey<wall7.sy+5)
 {
   if(mousex>wall7.posx && mousex-wall7.posx<30)
   gameover();
 }
 if(wall7.posx-mousex<5 && wall7.posx-mousex>=0)
 {
   if( mousey>wall7.sy+45 || mousey<wall7.sy+5)
    gameover();
 }
 
 }


  function obstacleHitTest()
 {
   if(mousex>=obstacle1.x-5 && mousex<=obstacle1.x+30 && mousey>=obstacle1.y-5 && mousey<=obstacle1.y+30)
   gameover();

   if(mousex>=obstacle2.x-5 && mousex<=obstacle2.x+30 && mousey>=obstacle2.y-5 && mousey<=obstacle2.y+30)
   gameover();

   if(mousex>=obstacle3.x-5 && mousex<=obstacle3.x+30 && mousey>=obstacle3.y-5 && mousey<=obstacle3.y+30)
   gameover();

   if(mousex>=obstacle4.x-5 && mousex<=obstacle4.x+30 && mousey>=obstacle4.y-5 && mousey<=obstacle4.y+30)
   gameover();

   if(mousex>=obstacle5.x-5 && mousex<=obstacle5.x+30 && mousey>=obstacle5.y-5 && mousey<=obstacle5.y+30)
   gameover();

   if(mousex>=obstacle6.x-5 && mousex<=obstacle6.x+30 && mousey>=obstacle6.y-5 && mousey<=obstacle6.y+30)
   gameover();
 }

//Objects(walls,obstacles and bullets)

    function Wall(posx,sy,vy)
    {
    	this.posx = posx;
    	this.sy = sy;
    	this.vy = vy;
    	this.update = function(){
    		ctx.fillStyle = "black";
    		ctx.fillRect(0,0,700,500);
    		if(this.sy+50 > 500 || this.sy < 0)
            this.vy =- this.vy;
            this.sy += this.vy;
            this.posx += lvlspeed;
            if(this.posx > 700)
            	{
           		  this.posx = -25;
           		  this.vy = v*Math.random();
            	}   		
    	}
    }
    
    function Obstacle(x,y){
    	this.x = x; 
    	this.y = y;
    	this.update = function()
    	{
    		this.x += lvlspeed;
    		if(this.x > 700)
    			this.x = -25;
    	}
    }

    function Bullet(bx,by){
    	this.bx = bx;
    	this.by = by;
    	this.update = function(){
    		this.bx += lvlspeed;
    		if(this.bx > 712.5)
    			this.bx = -12.5;
    		this.by -= bs;
    		if(this.by < -10)
    			this.by = by;
            var dx = Math.abs(mousex-this.bx);
            var dy = Math.abs(mousey-this.by);
            var d = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

            if(d<=15)
            	gameover();
    	}
    }

//Implementation of Objects-Initialising

function initWall()
{
  wall1 = new Wall(160,56,vy);
  wall2 = new Wall(40,60,vy1);
  wall3 = new Wall(-80,250,vy2);
  wall4 = new Wall(-200,65,vy3);
  wall5 = new Wall(-290,70,vy4);
  wall6 = new Wall(-390,436,vy5);
  wall7 = new Wall(-500,287,vy6); 
}
function initObstacle()
{
  obstacle1 = new Obstacle(100,y1);
  obstacle2 = new Obstacle(-20,y2);
  obstacle3 = new Obstacle(-140,y3);
  obstacle4 = new Obstacle(-245,y4);
  obstacle5 = new Obstacle(-340,y5);
  obstacle6 = new Obstacle(-445,y6); 
}
function initBullet()
{
  bullet1 = new Bullet(112.5,y1-10);
  bullet2 = new Bullet(-7.5,y2-10);
  bullet3 = new Bullet(-127.5,y3-10);
  bullet4 = new Bullet(-232.5,y4-10);    	
  bullet5 = new Bullet(-327.5,y5-10);
  bullet6 = new Bullet(-432.5,y6-10);
}

//Implementation of Objects-Animating and setup
function setup()
{	
	wloop=setInterval(function(){

		animate();
		wall1.update();
		obstacle1.update();
		wall2.update();
		obstacle2.update();
		wall3.update();
		obstacle3.update();
		wall4.update();
		obstacle4.update();
		wall5.update();
		obstacle5.update();
		wall6.update();
		obstacle6.update();
		wall7.update();
		bullet1.update();
		bullet2.update();
		bullet3.update();
		bullet4.update();
		bullet5.update();
		bullet6.update();
		
		time += 1/fps;
		score=Math.floor(lvlspeed*time);
		if(time%10 == 0)
		{
			v += 1;
			lvlspeed += 1;
			bs += 1;
			;
		}	
        ctx.fillStyle="white";
		ctx.font = "30px Arial";
        ctx.fillText("Score:"+score,10,25);


	},1000/fps);
}


function animate()
{
	   var wall=new Image();
	   var sprites=new Image();
            wall.onload=function()
            {
                
            	ctx.drawImage(wall,wall1.posx,0,25,wall1.sy);
                ctx.drawImage(wall,wall1.posx,wall1.sy+50,25,450-wall1.sy);

                ctx.drawImage(wall,wall2.posx,0,25,wall2.sy);
                ctx.drawImage(wall,wall2.posx,wall2.sy+50,25,450-wall2.sy);

                ctx.drawImage(wall,wall3.posx,0,25,wall3.sy);
                ctx.drawImage(wall,wall3.posx,wall3.sy+50,25,450-wall3.sy);

                ctx.drawImage(wall,wall4.posx,0,25,wall4.sy);
                ctx.drawImage(wall,wall4.posx,wall4.sy+50,25,450-wall4.sy);

                ctx.drawImage(wall,wall5.posx,0,25,wall5.sy);
                ctx.drawImage(wall,wall5.posx,wall5.sy+50,25,450-wall5.sy);

                ctx.drawImage(wall,wall6.posx,0,25,wall6.sy);
                ctx.drawImage(wall,wall6.posx,wall6.sy+50,25,450-wall6.sy);

                ctx.drawImage(wall,wall7.posx,0,25,wall7.sy);
                ctx.drawImage(wall,wall7.posx,wall7.sy+50,25,450-wall7.sy); 

                ctx.drawImage(sprites,obstacle1.x,obstacle1.y,25,25);
                ctx.drawImage(sprites,obstacle2.x,obstacle2.y,25,25);
                ctx.drawImage(sprites,obstacle3.x,obstacle3.y,25,25);
                ctx.drawImage(sprites,obstacle4.x,obstacle4.y,25,25);
                ctx.drawImage(sprites,obstacle5.x,obstacle5.y,25,25);
                ctx.drawImage(sprites,obstacle6.x,obstacle6.y,25,25);

                ctx.fillStyle="gray";
    		    ctx.beginPath(); 
                ctx.moveTo(bullet1.bx,bullet1.by);
                ctx.arc(bullet1.bx,bullet1.by,10,0,Math.PI*2,true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(bullet2.bx,bullet2.by);
                ctx.arc(bullet2.bx,bullet2.by,10,0,Math.PI*2,true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(bullet3.bx,bullet3.by);
                ctx.arc(bullet3.bx,bullet3.by,10,0,Math.PI*2,true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(bullet4.bx,bullet4.by);
                ctx.arc(bullet4.bx,bullet4.by,10,0,Math.PI*2,true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(bullet5.bx,bullet5.by);
                ctx.arc(bullet5.bx,bullet5.by,10,0,Math.PI*2,true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(bullet6.bx,bullet6.by);
                ctx.arc(bullet6.bx,bullet6.by,10,0,Math.PI*2,true);
                ctx.fill();
                ctx.closePath();

                drawDeep();
                mazeHitTest();
                obstacleHitTest();
            }
                wall.src="wall.png";
    	        sprites.src="UFO.png";
}




function gameover()
{
	alert("Game Over");
	clearInterval(wloop);
}


//Function calls
initWall();
initObstacle();
initBullet();
setup();




    





