  var canvas=document.getElementById("canvas");
  var ctx=canvas.getContext('2d'); 

  var v=2; 
  
  var vy=v*Math.random();
  var vy1=v*Math.random();
  var vy2=v*Math.random();
  var vy3=v*Math.random();
  var vy4=v*Math.random();
  var vy5=v*Math.random();
  var vy6=v*Math.random();


  var sy=56;
  var sy1=60;
  var sy2=250;
  var sy3=65;
  var sy4=70;
  var sy5=436;
  var sy6=287;
  var z=0;

  var posx=160;
  var posx1=posx-120;
  var posx2=posx1-120;
  var posx3=posx2-120;
  var posx4=posx3-90;
  var posx5=posx4-100;
  var posx6=posx5-110;
  var lvlspeed=1;

  var y1=475*Math.random();
  var y2=475*Math.random();
  var y3=475*Math.random();
  var y4=475*Math.random();
  var y5=475*Math.random();
  var y6=475*Math.random();

  var x1=posx1+60;
  var x2=posx2+60;
  var x3=posx3+60;
  var x4=posx4+45;
  var x5=posx5+50;
  var x6=posx6+55;


  var fps=60;
  var time=0;

  var mousex=0,mousey=0;


  var tloop=setInterval(function()
                        {

                        	
                            
                          	time += 1/60;
                          	if (time%10 == 0)
                          {		
                          	v++;
                          	if(time%30 == 0)
                          	{
                          		lvlspeed+=0.5;
                          	}
                          }
                          
                          
                          ctx.fillStyle = "black";
                          ctx.fillRect(0,0,700,500);
                          mazegen();
                          obstaclecreate();
                          ctx.fillStyle = "yellow";
                          canvas.addEventListener("mousemove",setMousePosition,false);
                          ctx.moveTo(mousex,mousey);
                          ctx.arc(mousex,mousey,5,0,Math.PI*2,true);
                          ctx.fill();

                         
                          
                          


                          


                      },1000/fps); 


  function mazegen()
  {                       
                          ctx.fillStyle = "red";
                          ctx.fillRect(posx,0,25,500);
                          ctx.fillStyle = "black";
                          ctx.fillRect(posx,sy,25,50);
                          if(sy+50 > 500 || sy < 0)
                          	vy =- vy;
                          sy += vy;
                          posx += lvlspeed;
                          if(posx > 700)
                          	{
                          		posx = -25;
                          		vy = v*Math.random();
                          	}

                          ctx.fillStyle = "red";
                          ctx.fillRect(posx1,0,25,500);
                          ctx.fillStyle = "black";
                          ctx.fillRect(posx1,sy1,25,50);
                          if(sy1+50 > 500 || sy1 < 0)
                          	vy1 =- vy1;
                          sy1 += vy1;
                          posx1 += lvlspeed;
                          if(posx1 > 700)
                          {
                          	posx1 = -25;                          
                            vy1 = v*Math.random();
                          }                           

                          ctx.fillStyle = "red";
                          ctx.fillRect(posx2,0,25,500);
                          ctx.fillStyle = "black";
                          ctx.fillRect(posx2,sy2,25,50);
                          if(sy2+50 > 500 || sy2 < 0)
                          	vy2 = -vy2;
                          sy2 += vy2;
                          posx2 += lvlspeed;
                          if(posx2 > 700)
                          {
                          	posx2 = -25; 
                            vy2 = v*Math.random();
                          } 

                          ctx.fillStyle = "red";
                          ctx.fillRect(posx3,0,25,500);
                          ctx.fillStyle = "black";
                          ctx.fillRect(posx3,sy3,25,50);
                          if(sy3+50 > 500 || sy3 < 0)
                          	vy3 = -vy3;
                          sy3 += vy3;
                          posx3 += lvlspeed;
                          if(posx3 > 700)
                          {
                          	posx3 = -25; 
                            vy3 = v*Math.random();
                          } 

                          ctx.fillStyle = "red";
                          ctx.fillRect(posx4,0,25,500);
                          ctx.fillStyle = "black";
                          ctx.fillRect(posx4,sy4,25,50);
                          if(sy4+50 > 500 || sy4 < 0)
                          	vy4 = -vy4;
                          sy4 += vy4;
                          posx4 += lvlspeed;
                          if(posx4 > 700)
                          {
                          	posx4 = -25; 
                            vy4 = v*Math.random();
                          } 

                          ctx.fillStyle = "red";
                          ctx.fillRect(posx5,0,25,500);
                          ctx.fillStyle = "black";
                          ctx.fillRect(posx5,sy5,25,50);
                          if(sy5+50 > 500 || sy5 < 0)
                          	vy5 = -vy5;
                          sy5 += vy5;
                          posx5 += lvlspeed;
                          if(posx5 > 700)
                          {
                          	posx5 = -25; 
                            vy5 = v*Math.random();
                          }

                          ctx.fillStyle="red";
                          ctx.fillRect(posx6,0,25,500);
                          ctx.fillStyle = "black";
                          ctx.fillRect(posx6,sy6,25,50);
                          if(sy6+50 > 500 || sy6 < 0)
                          	vy6 = -vy6;
                          sy6 += vy6;
                          posx6 += lvlspeed;
                          if(posx6 > 700)
                          {
                          	posx6 = -25; 
                            vy6 = v*Math.random();
                          }

  }


  function obstaclecreate()
  {
  	ctx.fillStyle="blue";
  	obstacle1();
  	obstacle2();
  	obstacle3();
  	obstacle4();
  	obstacle5();
  	obstacle6();
  }

  function obstacle1()
  {
  	if(x1 > 700)
  		{
  			x1 = -25;
  			y1 = 475*Math.random();
  		}	
    ctx.fillRect(x1,y1,25,25);
    x1 += lvlspeed;
  }

  function obstacle2()
  {
  	if(x2 > 700)
  	{
  		x2 = -25;
  		y2 = 475*Math.random();
  	}
  	ctx.fillRect(x2,y2,25,25);
  	x2 += lvlspeed;
  }

  function obstacle3()
  {
  	if(x3 > 700)
  	{
  		x3 = -25;
  		y3 = 475*Math.random();
  	}
  	ctx.fillRect(x3,y3,25,25);
  	x3 += lvlspeed;
  }

  function obstacle4()
  {
  	if(x4 > 700)
  	{
  		x4 = -25;
  		y4 = 475*Math.random();
  	}
  	ctx.fillRect(x4,y4,25,25);
  	x4 += lvlspeed;
  }

  function obstacle5()
  {
  	if(x5 > 700)
  	{
  		x5 = -25;
  		y5 = 475*Math.random();
  	}
  	ctx.fillRect(x5,y5,25,25);
  	x5 += lvlspeed;
  }

  function obstacle6()
  {
  	if(x6 > 700)
  	{
  	    x6 = -25;
  	    y6 = 475*Math.random();
  	}
  	ctx.fillRect(x6,y6,25,25);
  	x6 += lvlspeed;
  }

function setMousePosition(e) 
{
     mousex = e.clientX;
     mousey = e.clientY;


 }