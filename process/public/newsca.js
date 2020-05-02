
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
var keyringcode='';
var keyringcode1 ='';

var tablex = new Array();



function TestN(can,xPosition){
  "use strict";
  for ( var i = can.height ; i  ; i--)
  {
  var eventLocation = {
      x: xPosition,
      y: i
  };
  var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
  // Get the data of the pixel according to the location generate by the getEventLocation function
  var context = can.getContext('2d');
  var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data;

  // If transparency on the image
  if (((pixelData[0] === 0) && (pixelData[1] === 0) && (pixelData[2] === 0) && (pixelData[3] === 0)) || ((pixelData[0] === 255) && (pixelData[1] === 0) && (pixelData[2] === 0) && (pixelData[3] === 0))) {
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
 // document.getElementById("status").innerHTML = coord;
  //document.getElementById("color").style.backgroundColor = hex;
  }
}
function copied(){
    var element = document.createElement("canvas") ;
    element.id="newcanvas"
    var context = element.getContext('2d')
   
    creet(imageurl)
    var widthkey = parseFloat(document.getElementById('blade_width').getAttribute("value"))
    console.log( imageurl.width)



    element.width=(widthkey*(parseFloat(imageurl.width))/parseFloat(imageurl.height));
    element.height=widthkey;
 context.drawImage(imageurl,0,0,element.width,widthkey);
 // document.getElementById('getCropp').
  $('#getCropp').html(element)

  
}


function creee(){

var newcan=document.getElementById('newcanvas')
var step = parseFloat(document.getElementById('step').getAttribute("value"))
var widthecr = parseFloat(newcan.width)
var heighecr = parseFloat(newcan.height)

var ctx =newcan.getContext('2d')
tablex[0]=2;
tablex[1]=Math.round((heighecr- TestN(newcan,widthecr-spaces9))/step);
tablex[2]=Math.round((heighecr- TestN(newcan,widthecr-spaces8))/step);
tablex[3]=Math.round((heighecr- TestN(newcan,widthecr-spaces7))/step);
tablex[4]=Math.round((heighecr- TestN(newcan,widthecr-spaces6))/step);
tablex[5]=Math.round((heighecr- TestN(newcan,widthecr-spaces5))/step);
tablex[6]=Math.round((heighecr- TestN(newcan,widthecr-spaces4))/step);
tablex[7]=Math.round((heighecr- TestN(newcan,widthecr-spaces3))/step);
tablex[8]=Math.round((heighecr- TestN(newcan,widthecr-spaces2))/step);
tablex[9]=Math.round((heighecr- TestN(newcan,widthecr-spaces1))/step);
tablex[10]=Math.round((heighecr- TestN(newcan,widthecr-spaces0))/step);
/* 
tablex[1]=TestN(newcan,widthecr-spaces9
 tablex[2]=Math.round(Test(newcan,widthecr-spaces8)/step)
tablex[3]=Math.round(Test(newcan,widthecr-spaces7)/step)
tablex[4]=Math.round(Test(newcan,widthecr-spaces6)/step)
tablex[5]=Math.round(Test(newcan,widthecr-spaces5)/step)
tablex[6]=Math.round(Test(newcan,widthecr-spaces4)/step)
tablex[7]=Math.round(Test(newcan,widthecr-spaces3)/step)
tablex[8]=Math.round(Test(newcan,widthecr-spaces2)/step)
tablex[9]=Math.round(Test(newcan,widthecr-spaces1)/step) */

tablex[11]=Math.round(Test(newcan,widthecr-spaces9)/step)
 tablex[12]=Math.round(Test(newcan,widthecr-spaces8)/step)
tablex[13]=Math.round(Test(newcan,widthecr-spaces7)/step)
tablex[14]=Math.round(Test(newcan,widthecr-spaces6)/step)
tablex[15]=Math.round(Test(newcan,widthecr-spaces5)/step)
tablex[16]=Math.round(Test(newcan,widthecr-spaces4)/step)
tablex[17]=Math.round(Test(newcan,widthecr-spaces3)/step)
tablex[18]=Math.round(Test(newcan,widthecr-spaces2)/step)
tablex[19]=Math.round(Test(newcan,widthecr-spaces1)/step)
tablex[20]=Math.round(Test(newcan,widthecr-spaces0)/step)
console.log(TestN(newcan,widthecr-spaces0)/step)
 console.log(tablex)
ctx.fillStyle = "#0000FF";
ctx.fillRect(widthecr-spaces0,TestN(newcan,widthecr-spaces0),5,TestN(newcan,widthecr-spaces0))
ctx.fillRect(widthecr-spaces1,TestN(newcan,widthecr-spaces1),5,TestN(newcan,widthecr-spaces1))
ctx.fillRect(widthecr-spaces2,TestN(newcan,widthecr-spaces2),5,TestN(newcan,widthecr-spaces2))
ctx.fillRect(widthecr-spaces3,TestN(newcan,widthecr-spaces3),5,TestN(newcan,widthecr-spaces3))
ctx.fillRect(widthecr-spaces4,TestN(newcan,widthecr-spaces4),5,TestN(newcan,widthecr-spaces4))
ctx.fillRect(widthecr-spaces5,TestN(newcan,widthecr-spaces5),5,TestN(newcan,widthecr-spaces5))
ctx.fillRect(widthecr-spaces6,TestN(newcan,widthecr-spaces6),5,TestN(newcan,widthecr-spaces6))
ctx.fillRect(widthecr-spaces7,TestN(newcan,widthecr-spaces7),5,TestN(newcan,widthecr-spaces7))
ctx.fillRect(widthecr-spaces8,TestN(newcan,widthecr-spaces8),5,TestN(newcan,widthecr-spaces8))
ctx.fillRect(widthecr-spaces9,TestN(newcan,widthecr-spaces9),5,TestN(newcan,widthecr-spaces9))
  ctx.fillRect(widthecr-spaces0,0,5,Test(newcan,widthecr-spaces0))

  ctx.fillRect(widthecr-spaces1,0,5,Test(newcan,widthecr-spaces1))
  ctx.fillRect(widthecr-spaces2,0,5,Test(newcan,widthecr-spaces2))
  ctx.fillRect(widthecr-spaces3,0,5,Test(newcan,widthecr-spaces3))
  ctx.fillRect(widthecr-spaces4,0,5,Test(newcan,widthecr-spaces4))
  ctx.fillRect(widthecr-spaces5,0,5,Test(newcan,widthecr-spaces5))
  ctx.fillRect(widthecr-spaces6,0,5,Test(newcan,widthecr-spaces6))
  ctx.fillRect(widthecr-spaces7,0,5,Test(newcan,widthecr-spaces7))
  ctx.fillRect(widthecr-spaces8,0,5,Test(newcan,widthecr-spaces8))
  ctx.fillRect(widthecr-spaces9,0,5,Test(newcan,widthecr-spaces9))

 
 
  
  // keyringcode=tablex[0].toString();

  for(let i=20;i>10; i-- ) {
    keyringcode1  =keyringcode1+tablex[i].toString();
    
   }
   for(let i=10;i>0; i-- ) {
    keyringcode  =keyringcode+tablex[i].toString();
    
   }
   document.getElementById('keyringcode').innerHTML=keyringcode;
   document.getElementById('keyringcode1').innerHTML=keyringcode1;
 
}
