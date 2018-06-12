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

  var score=0;


  var fps=60;
  var time=0;

  var bx1,bx2,bx3,bx4,bx5,bx6;
  var by1,by2,by3,by4,by5,by6;  


  var mousex=550,mousey=250;

  var bs=1;

    bx1=x1+12.5;
    by1=y1-10;

    bx2=x2+12.5;
    by2=y2-10;

    bx3=x3+12.5;
    by3=y3-10;

    bx4=x4+12.5;
    by4=y4-10;

    bx5=x5+12.5;
    by5=y5-10;

    bx6=x6+12.5;
    by6=y6-10;




  var tloop=setInterval(function()
                        {

                        	
                            
                          	time += 1/fps;
                          	if (time%10 == 0)
                          {		
                          	v++;
                          	lvlspeed+=0.5;
                          	bs++;
                          	
                          }

                          score=Math.floor(lvlspeed*time);
                          document.getElementById("score").innerHTML=score;
                          ctx.fillStyle="white";
                          ctx.font="30px Arial";
                          ctx.fillText("Score",10,10);

                          
                          ctx.canvas.addEventListener("mousemove",deep,false);
                          
                          
                          mazegen();
                          obstaclecreate();
                          ctx.beginPath();
                          ctx.fillStyle="yellow";
                          ctx.arc(mousex,mousey,5,0,Math.PI*2,true);
                          ctx.fill();
                          ctx.closePath();

                          
                         
               


                      },1000/fps); 


  function mazegen()
  {                       
  	                      ctx.fillStyle = "black";
                          ctx.fillRect(0,0,700,500);
                          
                          if(sy+50 > 500 || sy < 0)
                          	vy =- vy;
                          sy += vy;
                          posx += lvlspeed;
                          if(posx > 700)
                          	{
                          		posx = -25;
                          		vy = v*Math.random();
                          	}
                          	mx=Math.abs(mousex-posx);

                          
                          if(sy1+50 > 500 || sy1 < 0)
                          	vy1 =- vy1;
                          sy1 += vy1;
                          posx1 += lvlspeed;
                          if(posx1 > 700)
                          {
                          	posx1 = -25;                          
                            vy1 = v*Math.random();
                          }  

                          
                          if(sy2+50 > 500 || sy2 < 0)
                          	vy2 = -vy2;
                          sy2 += vy2;
                          posx2 += lvlspeed;
                          if(posx2 > 700)
                          {
                          	posx2 = -25; 
                            vy2 = v*Math.random();
                          } 
                          
                         
                          if(sy3+50 > 500 || sy3 < 0)
                          	vy3 = -vy3;
                          sy3 += vy3;
                          posx3 += lvlspeed;
                          if(posx3 > 700)
                          {
                          	posx3 = -25; 
                            vy3 = v*Math.random();
                          } 
                                                   
                          if(sy4+50 > 500 || sy4 < 0)
                          	vy4 = -vy4;
                          sy4 += vy4;
                          posx4 += lvlspeed;
                          if(posx4 > 700)
                          {
                          	posx4 = -25; 
                            vy4 = v*Math.random();
                          } 
                                                    
                          if(sy5+50 > 500 || sy5 < 0)
                          	vy5 = -vy5;
                          sy5 += vy5;
                          posx5 += lvlspeed;
                          if(posx5 > 700)
                          {
                          	posx5 = -25; 
                            vy5 = v*Math.random();
                          }
                          

                          if(sy6+50 > 500 || sy6 < 0)
                          	vy6 = -vy6;
                          sy6 += vy6;
                          posx6 += lvlspeed;
                          if(posx6 > 700)
                          {
                          	posx6 = -25; 
                            vy6 = v*Math.random();
                          }

                          var sprites=new Image();
                          var wall=new Image();
                          sprites.onload=function(){
                          	ctx.drawImage(sprites,x1-5,y1-5,27.5,27.5);
                          	ctx.drawImage(sprites,x2-5,y2-5,27.5,27.5);
                          	ctx.drawImage(sprites,x3-5,y3-5,27.5,27.5);
                          	ctx.drawImage(sprites,x4-5,y4-5,27.5,27.5);
                          	ctx.drawImage(sprites,x5-5,y5-5,27.5,27.5);
                          	ctx.drawImage(sprites,x6-5,y6-5,27.5,27.5);

                          	ctx.drawImage(wall,posx,0,25,sy);
                            ctx.drawImage(wall,posx1,0,25,sy1);
                            ctx.drawImage(wall,posx2,0,25,sy2);
                            ctx.drawImage(wall,posx3,0,25,sy3);
                            ctx.drawImage(wall,posx4,0,25,sy4);
                            ctx.drawImage(wall,posx5,0,25,sy5);
                            ctx.drawImage(wall,posx6,0,25,sy6);

                            ctx.drawImage(wall,posx,sy+50,25,450-sy);
                            ctx.drawImage(wall,posx1,sy1+50,25,450-sy1);
                            ctx.drawImage(wall,posx2,sy2+50,25,450-sy2);
                            ctx.drawImage(wall,posx3,sy3+50,25,450-sy3);
                            ctx.drawImage(wall,posx4,sy4+50,25,450-sy4);
                            ctx.drawImage(wall,posx5,sy5+50,25,450-sy5);
                            ctx.drawImage(wall,posx6,sy6+50,25,450-sy6);



                          }

                          sprites.src="UFO.png";
                          wall.src="wall.png";


                            mazeHitTest();
}


 function obstacleHitTest()
 {
   if(mousex>=x1-5 && mousex<=x1+30 && mousey>=y1-5 && mousey<=y1+30)
   {
   	alert("Gameover.Your score is:"+score);
    lvlspeed=0;
   }

   if(mousex>=x2-5 && mousex<=x2+30 && mousey>=y2-5 && mousey<=y2+30)
   {
   	alert("Gameover.Your score is:"+score);
    lvlspeed=0;
   }

   if(mousex>=x3-5 && mousex<=x3+30 && mousey>=y3-5 && mousey<=y3+30)
   {
   	alert("Gameover.Your score is:"+score);
    lvlspeed=0;
   }

   if(mousex>=x4-5 && mousex<=x4+30 && mousey>=y4-5 && mousey<=y4+30)
   {
   	alert("Gameover.Your score is:"+score);
    lvlspeed=0;
   }

   if(mousex>=x5-5 && mousex<=x5+30 && mousey>=y5-5 && mousey<=y5+30)
   {
   	alert("Gameover.Your score is:"+score);
    lvlspeed=0;
   }

   if(mousex>=x6-5 && mousex<=x6+30 && mousey>=y6-5 && mousey<=y6+30)
   {
   	alert("Gameover.Your score is:"+score);
    lvlspeed=0;
   }
 }

 function bullet1()
 {

 	ctx.fillStyle="gray";
    ctx.beginPath(); 

    ctx.moveTo(bx1,by1);
    ctx.arc(bx1,by1,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    bx1+=lvlspeed;
    by1-=bs;
    if(by1<-10)
    	by1=y1-10;

    var dx1=Math.abs(mousex-bx1);
    var dy1=Math.abs(mousey-by1);
    var d=Math.sqrt(Math.pow(dx1,2)+Math.pow(dy1,2));
    if(d<=15)
    {
    	alert("Gameover.Your score is:"+score);
        lvlspeed=0;
    }
 
 }

 function bullet2()
 {

 	ctx.fillStyle="gray";
    ctx.beginPath(); 

    ctx.moveTo(bx2,by2);
    ctx.arc(bx2,by2,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    bx2+=lvlspeed;
    by2-=bs;
    if(by2<-10)
    	by2=y2-10;

    var dx2=Math.abs(mousex-bx2);
    var dy2=Math.abs(mousey-by2);
    var d=Math.sqrt(Math.pow(dx2,2)+Math.pow(dy2,2));
    if(d<=15)
    {
    	alert("Gameover.Your score is:"+score);
        lvlspeed=0;
    }
 
 }

  function bullet3()
 {

 	ctx.fillStyle="gray";
    ctx.beginPath(); 

    ctx.moveTo(bx3,by3);
    ctx.arc(bx3,by3,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    bx3+=lvlspeed;
    by3-=bs;
    if(by3<-10)
    	by3=y3-10;

    var dx3=Math.abs(mousex-bx3);
    var dy3=Math.abs(mousey-by3);
    var d=Math.sqrt(Math.pow(dx3,2)+Math.pow(dy3,2));
    if(d<=15)
    {
    	alert("Gameover.Your score is:"+score);
        lvlspeed=0;
    }
 
 }

   function bullet4()
 {

 	ctx.fillStyle="gray";
    ctx.beginPath(); 

    ctx.moveTo(bx4,by4);
    ctx.arc(bx4,by4,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    bx4+=lvlspeed;
    by4-=bs;
    if(by4<-10)
    	by4=y4-10;

    var dx4=Math.abs(mousex-bx4);
    var dy4=Math.abs(mousey-by4);
    var d=Math.sqrt(Math.pow(dx4,2)+Math.pow(dy4,2));
    if(d<=15)
    {
    	alert("Gameover.Your score is:"+score);
        lvlspeed=0;
    }
 
 }

   function bullet5()
 {

 	ctx.fillStyle="gray";
    ctx.beginPath(); 

    ctx.moveTo(bx5,by5);
    ctx.arc(bx5,by5,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    bx5+=lvlspeed;
    by5-=bs;
    if(by5<-10)
    	by5=y5-10;

    var dx5=Math.abs(mousex-bx5);
    var dy5=Math.abs(mousey-by5);
    var d=Math.sqrt(Math.pow(dx5,2)+Math.pow(dy5,2));
    if(d<=15)
    {
    	alert("Gameover.Your score is:"+score);
        lvlspeed=0;
    }
 
 }


  function bullet6()
 {

 	ctx.fillStyle="gray";
    ctx.beginPath(); 

    ctx.moveTo(bx6,by6);
    ctx.arc(bx6,by6,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    bx6+=lvlspeed;
    by6-=bs;
    if(by6<-10)
    	by6=y6-10;

    var dx6=Math.abs(mousex-bx6);
    var dy6=Math.abs(mousey-by6);
    var d=Math.sqrt(Math.pow(dx6,2)+Math.pow(dy6,2));
    if(d<=15)
    {
    	alert("Gameover.Your score is:"+score);
        lvlspeed=0;
    }
 
 }

  function obstaclecreate()
  {
  	ctx.fillStyle="black";
  	obstacle1();
  	bullet1();
  	ctx.fillStyle="black";
  	obstacle2();
  	bullet2();
  	ctx.fillStyle="black";
  	obstacle3();
  	bullet3();
  	ctx.fillStyle="black";
  	obstacle4();
  	bullet4();
  	ctx.fillStyle="black";
  	obstacle5();
  	bullet5();
  	ctx.fillStyle="black";
  	obstacle6();
  	bullet6();
  	obstacleHitTest();
  }

  

function obstacle1()
  {
  	if(x1 > 700)
  		{
  			x1 = -25;
  			y1 = 475*Math.random();
  			bx1=x1+12.5;
  			by1=y1-10;
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
  		bx2=x2+12.5;
  		by2=y2-10;
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
  		bx3=x3+12.5;
  		by3=y3-10;
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
  		bx4=x4+12.5;
  		by4=y4-10;
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
  		bx5=x5+12.5;
  		by5=y5-10;
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
  	    bx6=x6+12.5;
  		by6=y6-10;
  	}
  	ctx.fillRect(x6,y6,25,25);
  	x6 += lvlspeed;
  }





function deep(e) 
{
     mousex=e.clientX-ctx.canvas.offsetLeft;
     mousey=e.clientY-9;
 }




 function mazeHitTest()
 {

 if(mousey>sy+45)
 {
  if(mousex>posx && mousex-posx<30)
  {
   alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(mousey<sy+5)
 {
   if(mousex>posx && mousex-posx<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(posx-mousex<5 && posx-mousex>=0)
 {
   if( mousey>sy+45 || mousey<sy+5)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }

 }
  if(mousey>sy1+45)
 {
  if(mousex>posx1 && mousex-posx1<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(mousey<sy1+5)
 {
   if(mousex>posx1 && mousex-posx1<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(posx1-mousex<5 && posx1-mousex>=0)
 {
   if( mousey>sy1+45 || mousey<sy1+5)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }

 }


 if(mousey>sy2+45)
 {
  if(mousex>posx2 && mousex-posx2<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(mousey<sy2+5)
 {
   if(mousex>posx2 && mousex-posx2<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(posx2-mousex<5 && posx2-mousex>=0)
 {
   if( mousey>sy2+45 || mousey<sy2+5)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }

 }

 if(mousey>sy3+45)
 {
  if(mousex>posx3 && mousex-posx3<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(mousey<sy3+5)
 {
   if(mousex>posx3 && mousex-posx3<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(posx3-mousex<5 && posx3-mousex>=0)
 {
   if( mousey>sy3+45 || mousey<sy3+5)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }

 }

 if(mousey>sy4+45)
 {
  if(mousex>posx4 && mousex-posx4<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(mousey<sy4+5)
 {
   if(mousex>posx4 && mousex-posx4<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(posx4-mousex<5 && posx4-mousex>=0)
 {
   if( mousey>sy4+45 || mousey<sy4+5)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }

 }

 if(mousey>sy5+45)
 {
  if(mousex>posx5 && mousex-posx5<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(mousey<sy5+5)
 {
   if(mousex>posx5 && mousex-posx5<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(posx5-mousex<5 && posx5-mousex>=0)
 {
   if( mousey>sy5+45 || mousey<sy5+5)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }

 }


 if(mousey>sy6+45)
 {
  if(mousex>posx6 && mousex-posx6<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(mousey<sy6+5)
 {
   if(mousex>posx6 && mousex-posx6<30)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }
 }

 if(posx6-mousex<5 && posx6-mousex>=0)
 {
   if( mousey>sy6+45 || mousey<sy6+5)
  {
    alert("Gameover.Your score is:"+score);
    lvlspeed=0;
  }

 }
 }

