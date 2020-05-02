//const fs = require('fs') 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("idbuton");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

var imageurl2 ;

span.onclick = function() {

  modal.style.display = "none"
  

}

var  ratspaces0;
var  ratspaces1;
var  ratspaces2;
var  ratspaces3;
var  ratspaces4;
var  ratspaces5;
var  ratspaces6;
var  ratspaces7;
var  ratspaces8;
var  ratspaces9;
window.onclick = function(event) {
  if (event.target == modal)  {
    modal.style.display = "none";
    
    
//console.log(event.target)
  }
}

var myObstacle;
var myObstacle1;
var myObstacle2;
var myObstacle3;
var myObstacle4;
var myObstacle5;
var myObstacle6;
var myObstacle7;
var myObstacle8;
var myObstacle9;
var myObstacle10;
var myObstacle11;
var myobstacle12;
var myobstacle13;
var myobstacle14;
var myobstacle15;
var myobstacle16;
var myobstacle17;
var myobstacle18;
var myobstacle19;



btn.onclick = function()  {
  //  //myGamePiece = new component(30, 30, "red", 50, 120);
   modal.style.display = "block";
   imageurl2=document.getElementById('calcul1');
   myGameArea.start();
   
var rat2=(imageurl2.width * parseFloat(k))/ imageurl2.height ;
document.getElementById(11).innerHTML =  tablex[11]; 
document.getElementById(11).setAttribute("value",tablex[11])
document.getElementById(12).innerHTML =  tablex[12]; 
document.getElementById(12).setAttribute("value",tablex[12])
document.getElementById(13).innerHTML =  tablex[13]; 
document.getElementById(13).setAttribute("value",tablex[13])
document.getElementById(14).innerHTML =  tablex[14]; 
document.getElementById(14).setAttribute("value",tablex[14])
document.getElementById(15).innerHTML =  tablex[15]; 
document.getElementById(15).setAttribute("value",tablex[15])
document.getElementById(16).innerHTML =  tablex[16]; 
document.getElementById(16).setAttribute("value",tablex[16])
document.getElementById(17).innerHTML =  tablex[17]; 
document.getElementById(17).setAttribute("value",tablex[17])
document.getElementById(18).innerHTML =  tablex[19]; 
document.getElementById(18).setAttribute("value",tablex[19])
document.getElementById(19).innerHTML =  tablex[19]; 
document.getElementById(19).setAttribute("value",tablex[19])
document.getElementById(20).innerHTML =  tablex[20]; 
document.getElementById(20).setAttribute("value",tablex[20])




document.getElementById(1).innerHTML =  tablex[1]; 
document.getElementById(1).setAttribute("value",tablex[1])
document.getElementById(2).innerHTML =  tablex[2]; 
document.getElementById(2).setAttribute("value",tablex[2])
document.getElementById(3).innerHTML =  tablex[3]; 
document.getElementById(3).setAttribute("value",tablex[3])
document.getElementById(4).innerHTML =  tablex[4]; 
document.getElementById(4).setAttribute("value",tablex[4])
document.getElementById(5).innerHTML =  tablex[5]; 
document.getElementById(5).setAttribute("value",tablex[5])
document.getElementById(6).innerHTML =  tablex[6]; 
document.getElementById(6).setAttribute("value",tablex[6])
document.getElementById(7).innerHTML =  tablex[7]; 
document.getElementById(7).setAttribute("value",tablex[7])
document.getElementById(8).innerHTML =  tablex[8]; 
document.getElementById(8).setAttribute("value",tablex[8])
document.getElementById(9).innerHTML =  tablex[9]; 
document.getElementById(9).setAttribute("value",tablex[9])
document.getElementById(10).innerHTML =  tablex[10]; 
document.getElementById(10).setAttribute("value",tablex[10])

    myObstacle1  = new component(4, tablex[11]*step, "black", rat2-spaces9, 0);  
     myObstacle  = new component(4, tablex[12]*step, "black",rat2- spaces8, 0);  
    myObstacle2  = new component(4, tablex[13]*step, "black",rat2- spaces7, 0); 
myObstacle3  = new component(4, tablex[14]*step, "black",rat2- spaces6, 0); 
myObstacle4  = new component(4, tablex[15]*step, "black",rat2- spaces5, 0);
myObstacle5  = new component(4, tablex[16]*step, "black",rat2- spaces4, 0);
myObstacle6  = new component(4, tablex[17]*step, "black",rat2- spaces3, 0);
myObstacle7  = new component(4, tablex[18]*step, "black",rat2- spaces2, 0);
myObstacle8  = new component(4, tablex[19]*step, "black", rat2-spaces1, 0);
myObstacle9  = new component(4, tablex[20]*step, "black", rat2-spaces0, 0);
myObstacle10  = new component(4, -tablex[1]*step, "black", rat2-spaces9, align+4);
myObstacle11  = new component(4, -tablex[2]*step, "black",rat2- spaces8, align+4);
myobstacle12 = new component(4, -tablex[3]*step, "black", rat2-spaces7, align+4);
myobstacle13 = new component(4, -tablex[4]*step, "black", rat2-spaces6, align+4);
myobstacle14 = new component(4, -tablex[5]*step, "black",rat2- spaces5, align+4);
myobstacle15 = new component(4, -tablex[6]*step, "black", rat2-spaces4, align+4);
myobstacle16 = new component(4, -tablex[7]*step, "black", rat2-spaces3, align+4);
myobstacle17 = new component(4, -tablex[8]*step, "black", rat2-spaces2, align+4);
myobstacle18 = new component(4, -tablex[9]*step, "black", rat2-spaces1, align+4);
myobstacle19 = new component(4, -tablex[10]*step, "black", rat2-spaces0, align+4);

  
  
}


var spaces0 = parseFloat(document.getElementById('spaces0').getAttribute("value")) *1000 - 5 ;
var spaces1 = parseFloat(document.getElementById('spaces1').getAttribute("value")) *1000  ;
var spaces2 = parseFloat(document.getElementById('spaces2').getAttribute("value")) *1000  ;
var spaces3 = parseFloat(document.getElementById('spaces3').getAttribute("value")) *1000  ;
var spaces4 = parseFloat(document.getElementById('spaces4').getAttribute("value")) *1000  ;
var spaces5 = parseFloat(document.getElementById('spaces5').getAttribute("value")) *1000  ;
var spaces6 = parseFloat(document.getElementById('spaces6').getAttribute("value")) *1000  ;
var spaces7 = parseFloat(document.getElementById('spaces7').getAttribute("value")) *1000  ;
var spaces8 = parseFloat(document.getElementById('spaces8').getAttribute("value")) *1000  ;
var spaces9 = parseFloat(document.getElementById('spaces9').getAttribute("value")) *1000  ;
var depth0 = parseFloat(document.getElementById('depths0').getAttribute("value")) *1000  ;
var depth1 = parseFloat(document.getElementById('depths1').getAttribute("value")) *1000  ;
var depth2 = parseFloat(document.getElementById('depths2').getAttribute("value")) *1000  ;
var depth3 = parseFloat(document.getElementById('depths3').getAttribute("value")) *1000  ;
var depth4 = parseFloat(document.getElementById('depths4').getAttribute("value")) *1000  ;
var depth5 = parseFloat(document.getElementById('depths5').getAttribute("value")) *1000  ;
var depth6 = parseFloat(document.getElementById('depths6').getAttribute("value")) *1000  ;
var depth7 = parseFloat(document.getElementById('depths7').getAttribute("value")) *1000  ;
var depth8 = parseFloat(document.getElementById('depths8').getAttribute("value")) *1000  ;
var depth9 = parseFloat(document.getElementById('depths9').getAttribute("value")) *1000  ;




var m=document.getElementById('width').getAttribute("value");

var k= document.getElementById('blade_width').getAttribute("value") ;
var element = document.createElement("canvas") ;
//element.width = parseFloat(document.getElementById('width').getAttribute("value"));
element.height = parseFloat(document.getElementById('blade_width').getAttribute("value"));
var align = parseFloat(document.getElementById('blade_width').getAttribute("value")) -3 ;
var step = parseFloat(document.getElementById('step').getAttribute("value"))
element.setAttribute("id","res")
var cap ="capout.png"
//element.setAttribute("style","background: url("+imageurl2+")  no-repeat")

//element.setAttribute("style","background: url('capout.png')  no-repeat")
//element.setAttribute("src","capout.png'")

  //  element.style="background: url('capout.png')  no-repeat"
  // element.style="background: url('"+imageurl2+"')  no-repeat" 
 // var k=   element.style='background: url("\'" + imageurl2 + "\'")  no-repeat'  ;

var myGameArea = {
   
  canvas: document.getElementById("stat").append(element),
    //canvas : document.createElement("canvas"),
   
    
   
    start : function() {
   //  console.log(spaces0)
      
       /*  this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.id= "res" ;
       this.canvas.style="background: url('capout.png')  no-repeat"   ; */

          //https://i.imgur.com/FUsyxR5.jpg put url of image from our server
        this.context = element.getContext("2d");
        this.context.fillStyle = "#FF0000";
         
//console.log(imageurl2.height)
       ////  console.log(imageurl2.width)
       //  console.log(parseFloat(m))
        // console.log(parseFloat(k))
        var rat =  (imageurl2.width * parseFloat(k))/ imageurl2.height ;
         element.width = rat;
         rat2=rat;
        // console.log(element.height )
         //console.log(imageurl2)


         
        this.context.drawImage(imageurl2,0,0,rat,k)
        
         this.context.fillRect(rat-2,2,2,800);
         this.context.fillStyle = "#FF0000";

         this.context.fillRect(rat-spaces0,0,0.5,800);
         this.context.fillRect(rat-spaces1,0,0.5,800);
         this.context.fillRect(rat-spaces2,0,0.5,800);
         this.context.fillRect(rat-spaces3,0,0.5,800);
         this.context.fillRect(rat-spaces4,0,0.5,800);
         this.context.fillRect(rat-spaces5,0,0.5,800);
         this.context.fillRect(rat-spaces6,0,0.5,800);
         this.context.fillRect(rat-spaces7,0,0.5,800);
         this.context.fillRect(rat-spaces8,0,0.5,800);
         this.context.fillRect(rat-spaces9,0,0.5,800);
         ratspaces0=rat-spaces0;
         ratspaces1=rat-spaces1;
         ratspaces2=rat-spaces2;
         ratspaces3=rat-spaces3;
         ratspaces4=rat-spaces4;
         ratspaces5=rat-spaces5;
         ratspaces6=rat-spaces6;
         ratspaces7=rat-spaces7;
         ratspaces8=rat-spaces8;
         ratspaces9=rat-spaces9;
         this.context.fillRect(1,element.height-depth0,rat,0.5);
         this.context.fillRect(1,element.height-depth1,rat,0.5);
         this.context.fillRect(1,element.height-depth2,rat,0.5);
         this.context.fillRect(1,element.height-depth3,rat,0.5);
         this.context.fillRect(1,element.height-depth4,rat,0.5);
         this.context.fillRect(1,element.height-depth5,rat,0.5); 
          this.context.fillRect(1,element.height-depth6,rat,0.5);
          this.context.fillRect(1,element.height-depth7,rat,0.5);
          this.context.fillRect(1,element.height-depth8,rat,0.5);
          this.context.fillRect(1,element.height-depth9,rat,0.5);


          this.context.fillRect(1,depth0,rat,0.5);
         this.context.fillRect(1,depth1,rat,0.5);
         this.context.fillRect(1,depth2,rat,0.5);
         this.context.fillRect(1,depth3,rat,0.5);
         this.context.fillRect(1,depth4,rat,0.5);
         this.context.fillRect(1,depth5,rat,0.5); 
          this.context.fillRect(1,depth6,rat,0.5);
          this.context.fillRect(1,depth7,rat,0.5);
          this.context.fillRect(1,depth8,rat,0.5);
          this.context.fillRect(1,depth9,rat,0.5);

        
         this.context.fillRect(1,1,rat,2.5);
         this.context.fillRect(1,align,rat,2.5);
       /*   this.context.fillRect(1,depth0-5,spaces0,0.5);
         this.context.fillRect(1,depth1,spaces0,0.5);
         this.context.fillRect(1,depth2,spaces0,0.5);
         this.context.fillRect(1,depth3,spaces0,0.5);
         this.context.fillRect(1,depth4,spaces0,0.5);
         this.context.fillRect(1,depth5,spaces0,0.5);
         this.context.fillRect(1,depth6,spaces0,0.5);
         this.context.fillRect(1,depth7,spaces0,0.5);
         this.context.fillRect(1,depth8,spaces0,0.5);
         this.context.fillRect(1,depth9,spaces0,0.5); */



         
  //document.body.insertBefore(this.element, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 300);
    },
    clear : function() {
        this.context.clearRect(0, 0, 5000, 5000);
        this.context = element.getContext("2d");
        this.context.fillStyle = "#FF0000";
         
//console.log(imageurl2.height)
       ////  console.log(imageurl2.width)
       //  console.log(parseFloat(m))
        // console.log(parseFloat(k))
        var rat =  (imageurl2.width * parseFloat(k))/ imageurl2.height ;
         element.width = rat;
         rat2=rat;
       // console.log(element.height )
         //console.log(depth1)
      
         this.context.drawImage(imageurl2,0,0,rat,k)
         this.context.fillRect(rat-2,2,2,800);
         this.context.fillStyle = "#FF0000";
         this.context.fillRect(rat-spaces0,0,0.5,800);
         this.context.fillRect(rat-spaces1,0,0.5,800);
         this.context.fillRect(rat-spaces2,0,0.5,800);
         this.context.fillRect(rat-spaces3,0,0.5,800);
         this.context.fillRect(rat-spaces4,0,0.5,800);
         this.context.fillRect(rat-spaces5,0,0.5,800);
         this.context.fillRect(rat-spaces6,0,0.5,800);
         this.context.fillRect(rat-spaces7,0,0.5,800);
         this.context.fillRect(rat-spaces8,0,0.5,800);
         this.context.fillRect(rat-spaces9,0,0.5,800);
         this.context.fillRect(1,element.height-depth0,rat,0.5);
         this.context.fillRect(1,element.height-depth1,rat,0.5);
         this.context.fillRect(1,element.height-depth2,rat,0.5);
         this.context.fillRect(1,element.height-depth3,rat,0.5);
         this.context.fillRect(1,element.height-depth4,rat,0.5);
         this.context.fillRect(1,element.height-depth5,rat,0.5); 
          this.context.fillRect(1,element.height-depth6,rat,0.5);
          this.context.fillRect(1,element.height-depth7,rat,0.5);
          this.context.fillRect(1,element.height-depth8,rat,0.5);
          this.context.fillRect(1,element.height-depth9,rat,0.5);


          this.context.fillRect(1,depth0,rat,0.5);
         this.context.fillRect(1,depth1,rat,0.5);
         this.context.fillRect(1,depth2,rat,0.5);
         this.context.fillRect(1,depth3,rat,0.5);
         this.context.fillRect(1,depth4,rat,0.5);
         this.context.fillRect(1,depth5,rat,0.5); 
          this.context.fillRect(1,depth6,rat,0.5);
          this.context.fillRect(1,depth7,rat,0.5);
          this.context.fillRect(1,depth8,rat,0.5);
          this.context.fillRect(1,depth9,rat,0.5);

        this.context.fillStyle = "#371F57";
         this.context.fillRect(1,1,rat,2.5);
         this.context.fillStyle = "#FF0000";
         this.context.fillRect(1,align,rat,2.5);
         this.context.fillStyle = "#2682c4";
         this.context.fillRect(0,1,2,800);   //this  cloors
       
        
        
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
 myGameArea.clear();
  
    myObstacle.update();
  myObstacle1.update();
myObstacle2.update();
myObstacle3.update();
myObstacle4.update();
myObstacle5.update();
myObstacle6.update();
myObstacle7.update();
myObstacle8.update();
myObstacle9.update();
myObstacle10.update()
myObstacle11.update();
myobstacle12.update();
myobstacle13.update();
myobstacle14.update();
myobstacle15.update();
myobstacle16.update();
myobstacle17.update();
myobstacle18.update();
myobstacle19.update();

   myObstacle.newPos();
   myObstacle1.newPos();
myObstacle3.newPos();
myObstacle2.newPos();
myObstacle4.newPos();
myObstacle5.newPos();
myObstacle9.newPos();
myObstacle6.newPos();
myObstacle7.newPos();
myObstacle8.newPos();
myObstacle10.newPos();
myObstacle11.newPos();
myobstacle12.newPos();
myobstacle13.newPos();
myobstacle14.newPos();
myobstacle15.newPos();
myobstacle17.newPos();
myobstacle18.newPos();
myobstacle19.newPos();
myobstacle16.newPos();

   // //myGamePiece.newPos();    
  //  //myGamePiece.update();
}

function moveup() {
   // //myGamePiece.speedY = -2; 
//myObstacle11.speedY = -10; 
myObstacle11.height -=step
}
function moveupn() {
  // //myGamePiece.speedY = -2; 
//myObstacle11.speedY = -10; 
myObstacle11.height +=step
}

function moveup1() {
  //  //myGamePiece.speedY = -2; 
myObstacle10.height  -=step; 

}
function moveup1n() {
  //  //myGamePiece.speedY = -2; 
myObstacle10.height  +=step; 

}

function movedown() {
  //  //myGamePiece.speedY = 3; 
myObstacle.height += step;

}
function movedownn() {
  //  //myGamePiece.speedY = 3; 
myObstacle.height -= step;

}
function movedown1() {
 //   //myGamePiece.speedY = 3; 
myObstacle1.height += step;
//console.log(myObstacle1.height)
/* tablex[i] =  tablex[i]+1; 
 document.getElementById(i).innerHTML =  tablex[i]; */


}
function movedown1n() {
  //   //myGamePiece.speedY = 3; 
 myObstacle1.height -= step;
 //console.log(myObstacle1.height)
 /* tablex[i] =  tablex[i]+1; 
  document.getElementById(i).innerHTML =  tablex[i]; */
 
 
 }
function moveup2() {
  //  //myGamePiece.speedY = -2; 
  myobstacle12.height -= step; 
}
function moveup2n() {
  //  //myGamePiece.speedY = -2; 
  myobstacle12.height += step; 
}
function movedown2() {
  //  //myGamePiece.speedY = 3; 
myObstacle2.height += step;

}
function movedown2n() {
  //  //myGamePiece.speedY = 3; 
myObstacle2.height -= step;

}
function moveup3() {
  //  //myGamePiece.speedY = -2; 
myobstacle13.height -= step; 
}
function moveup3n() {
  //  //myGamePiece.speedY = -2; 
myobstacle13.height += step; 
}
function movedown3() {
  //  //myGamePiece.speedY = 3; 
myObstacle3.height += step;

}
function movedown3n() {
  //  //myGamePiece.speedY = 3; 
myObstacle3.height -= step;

}

function moveup4() {
  //  //myGamePiece.speedY = -2; 
  myobstacle14.height -= step; 
}
function moveup4n() {
  //  //myGamePiece.speedY = -2; 
  myobstacle14.height += step; 
}
function movedown4() {
  //  //myGamePiece.speedY = 3; 
myObstacle4.height += step;

}
function movedown4n() {
  //  //myGamePiece.speedY = 3; 
myObstacle4.height -= step;

}

function moveup6() {
  //  //myGamePiece.speedY = -2; 
  myobstacle16.height += -step; 
}
function moveup6n() {
  //  //myGamePiece.speedY = -2; 
  myobstacle16.height += step; 
}
function movedown6() {
  //  //myGamePiece.speedY = 3; 
myObstacle6.height += step;

}
function movedown6n() {
  //  //myGamePiece.speedY = 3; 
myObstacle6.height -= step;

}

function moveup8() {
  //  //myGamePiece.speedY = -2; 
  myobstacle18.height -=step; 
}
function moveup8n() {
  //  //myGamePiece.speedY = -2; 
  myobstacle18.height +=step; 
}
function movedown8() {
  //  //myGamePiece.speedY = 3; 
myObstacle8.height += step;

}
function movedown8n() {
  //  //myGamePiece.speedY = 3; 
myObstacle8.height -= step;

}
function moveup7() {
  //  //myGamePiece.speedY = -2; 
myobstacle17.height -= step
}
function moveup7n() {
  //  //myGamePiece.speedY = -2; 
myobstacle17.height += step
}
function movedown7() {
  //  //myGamePiece.speedY = 3; 
myObstacle7.height += step;


}
function movedown7n() {
  //  //myGamePiece.speedY = 3; 
myObstacle7.height -= step;


}

 function moveup5() {
  //  //myGamePiece.speedY = -2; 
  myobstacle15.height -= step; 
}
function moveup5n() {
  //  //myGamePiece.speedY = -2; 
  myobstacle15.height += step; 
}
function movedown5() {
  //  //myGamePiece.speedY = 3; 
myObstacle5.height +=step;

}
function movedown5n() {
  //  //myGamePiece.speedY = 3; 
myObstacle5.height -=step;

}

 function moveup9() {
  //  //myGamePiece.speedY = -2; 
myobstacle19.height -= step; 
}
function moveup9n() {
  //  //myGamePiece.speedY = -2; 
myobstacle19.height += step; 
}
function movedown9() {
  //  //myGamePiece.speedY = 3; 
myObstacle9.height += step;

}
function movedown9n() {
  //  //myGamePiece.speedY = 3; 
myObstacle9.height -= step;

}

function contre() {
  //  //myGamePiece.speedY = 3; 
 
  myObstacle9.height += step;
 //  console.log(//myGamePiece.width)
 
}
function contre2() {
  //  //myGamePiece.speedY = 3; 
 
  myObstacle9.height += -step;
 // console.log(//myGamePiece.width)

 
}

function clearmove() {
  myGameArea.clear();
   
/* //   console.log("iciii clearmove")

myObstacle8.speedX = 0; 
myObstacle8.speedY = 0; 
myObstacle7.speedX = 0; 
myObstacle7.speedY = 0; 
myObstacle6.speedX = 0; 
myObstacle6.speedY = 0; 
myObstacle5.speedX = 0; 
myObstacle5.speedY = 0; 
myObstacle4.speedX = 0; 
myObstacle4.speedY = 0; 
myObstacle9.speedX = 0; 
myObstacle9.speedY = 0; 
myObstacle10.speedX=0;
myObstacle10.speedY=0;
myObstacle11.speedX=0;
myObstacle11.speedY=0;
myobstacle12.speedX=0;
myobstacle12.speedY=0;
myObstacle.speedX = 0; 
myObstacle.speedY = 0; 
myObstacle1.speedX = 0; 
myObstacle1.speedY = 0; 
myObstacle3.speedX = 0; 
myObstacle3.speedY = 0; 
myObstacle2.speedX = 0; 
myObstacle2.speedY = 0; 
myobstacle13.speedX=0;
myobstacle13.speedY=0;
myobstacle14.speedX=0;
myobstacle14.speedY=0;
myobstacle15.speedX=0;
myobstacle15.speedY=0;
myobstacle16.speedX=0;
myobstacle16.speedY=0;
myobstacle17.speedX=0;
myobstacle17.speedY=0;
myobstacle18.speedX=0;
myobstacle18.speedY=0;
myobstacle19.speedX=0;
myobstacle19.speedY=0; */
}
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 /* for(let i=0;i<11; i++ ) {
  tablex[i]=entierAleatoire(0,3);
  
 } */
/* tablex[0]=entierAleatoire(0,0);
tablex[1]=entierAleatoire(1,3);
tablex[2]=entierAleatoire(1,3);
tablex[3]=entierAleatoire(1,3)
tablex[4]=entierAleatoire(1,3)
tablex[5]=entierAleatoire(1,3)
tablex[6]=entierAleatoire(1,3)
tablex[7]=entierAleatoire(1,3)
tablex[8]=entierAleatoire(1,3)
tablex[9]=entierAleatoire(1,3)
tablex[10]=entierAleatoire(1,3) */

/* tablex[11]=getRandomInt(3);
tablex[12]=getRandomInt(3); */
 function compteur(i) 
 { 
//  console.log("compteur")  
  tablex[i] =  tablex[i]+1; 
 document.getElementById(i).innerHTML =  tablex[i]; 
 document.getElementById(i).setAttribute("value",tablex[i])
 } 

 function compteurn(i) 
 { 
//  console.log("compteur")  
  tablex[i] =  tablex[i]-1; 
 document.getElementById(i).innerHTML =  tablex[i]; 
 document.getElementById(i).setAttribute("value",tablex[i])
 } 


function findwidth(){



//console.log(typeof p);
//console.log(p);

}
var toto = 0;
var keyringcode='';
var keyringcode1 ='';

function geturl(imagenumer){
  {   

  
   for(let i=10;i>0; i-- ) {
     
   var  k =document.getElementById(i.toString()).getAttribute('value');
   keyringcode = keyringcode+k

  } 
  //console.log(keyringcode);
  document.getElementById('keyringcode').innerHTML=keyringcode;
}


//let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 


{   
  for(let i=20;i>10; i-- ) {
    
  var  k =document.getElementById(i.toString()).getAttribute('value');
  keyringcode1 = keyringcode1+k

 } 
 //console.log(keyringcode1);
 document.getElementById('keyringcode1').innerHTML=keyringcode1;
}

var message =keyringcode+" \n" +keyringcode1+"\n";

//fs.writeFileSync('Output.txt', message , (err) => { 
  fs.appendFile('Output.txt', message , (err) => { 
   
  // In case of a error throw err. 
  if (err) throw err; 
}) 

/* for(let i=0;i<10; i++ ) { 

  fs.appendFile(i.toString()+'.txt', keyringcode[i], (err) => { 
   
    // In case of a error throw err. 
    if (err) throw err; 
  }) 

}

for(let i=0;i<10; i++ ) { 

  fs.appendFile(i.toString()+'.txt', keyringcode1[i], (err) => { 
   
    // In case of a error throw err. 
    if (err) throw err; 
  }) 

} */
  


}


function update(){

  var element = document.getElementById("mydev1");
   element.classList.toggle("button6");
   var element1 = document.getElementById("mydev2");
   element1.classList.toggle("button6");
   
}
function update2(){

 
   var element1 = document.getElementById("mydev2");
   element1.classList.toggle("button6");
   var element1 = document.getElementById("mydev1");
   element1.classList.toggle("button6");
}
function resetcode(){
  document.getElementById(1).innerHTML =  0; 
 document.getElementById(1).setAttribute("value",0)
}


function creet(canvas) {
			
var ctx    = canvas.getContext('2d');
/*   
  ctx.fillStyle = "#FF0000";
  
  ctx.fillRect(ratspaces0,50,5,5)
  ctx.fillRect(ratspaces1,50,5,5)
  ctx.fillRect(ratspaces2,50,5,5)
  ctx.fillRect(ratspaces3,50,5,5)
  ctx.fillRect(ratspaces4,50,5,5)
  ctx.fillRect(ratspaces5,50,5,5)
  ctx.fillRect(ratspaces6,50,5,5)
  ctx.fillRect(ratspaces7,50,5,5)
  ctx.fillRect(ratspaces8,50,5,5)
  ctx.fillRect(ratspaces9,50,5,5)
  ctx.fillRect(ratspaces0,250,5,5)
  ctx.fillRect(ratspaces1,250,5,5)
  ctx.fillRect(ratspaces2,250,5,5)
  ctx.fillRect(ratspaces3,250,5,5)
  ctx.fillRect(ratspaces4,250,5,5)
  ctx.fillRect(ratspaces5,250,5,5)
  ctx.fillRect(ratspaces6,250,5,5)
  ctx.fillRect(ratspaces7,250,5,5)
  ctx.fillRect(ratspaces8,250,5,5)
  ctx.fillRect(ratspaces9,250,5,5)
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(0,0,canvas.width,5) */

 
  ctx.drawImage(img,0,0);
  var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
  
for (i = 0; i < imgData.width * imgData.height * 4; i += 4) {
var r = imgData.data[i + 0];
var g = imgData.data[i + 1];
var b = imgData.data[i + 2];
var a = imgData.data[i + 3];
// compare rgb levels for green and set alphachannel to 0;
selectedR = 100;
selectedG = 100;
selectedB = 100;
if (r >= selectedR && g >= selectedG && b >= selectedB) {
  imgData.data[i + 3] = 0;
 
}
}

ctx.putImageData(imgData, 0, 0);
//console.log(imgData.data)
  }


  function Test(can,xPosition){
    "use strict";
    for ( var i = 0 ; i < can.height-1 ; i++)
    {
    var eventLocation = {
        x: xPosition,
        y: i
    };
    var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
    // Get the data of the pixel according to the location generate by the getEventLocation function
    //var context = this.getContext('2d');
    var ctx = can.getContext("2d")
    var pixelData = ctx.getImageData(eventLocation.x, eventLocation.y, 1, 1).data;

    // If transparency on the image
    if (((pixelData[0] === 0) && (pixelData[1] === 0) && (pixelData[2] === 0) && (pixelData[3] === 0)) || ((pixelData[0] === 255) && (pixelData[1] === 0) && (pixelData[2] === 0) && (pixelData[3] === 97))) {
        //console.log(" White Color");
        coord += " White Color";
        //console.log(i);
    } else {
        //console.log(" another Color");
        coord += " another Color";
        return i;
    }
    //var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    // Draw the color and coordinates.
  
    //document.getElementById("color").style.backgroundColor = hex;
    }
}

function getexample(){
  var canvasEE = document.getElementById("calcul1");
console.log(Test(canvasEE,100))

}