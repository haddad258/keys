var canvas = document.getElementById("res");

function getPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}



/* canvas.addEventListener("mousemove",function(e){
    var pos = getPosition(this);
  var x = e.pageX - pos.x;
  var y = e.pageY - pos.y;
  var coord = "x=" + x + ", y=" + y;
  var c = this.getContext('2d');
  var p = c.getImageData(x, y, 1, 1).data; 
       console.log(p[1])
  // If transparency on the image
  if((p[0] == 0) && (p[1] == 0) && (p[2] == 0) && (p[3] == 0)){
               coord += " (Transparent color detected, cannot be converted to HEX)";
               
  }
  
  var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
  
  document.getElementById("status").innerHTML = p[0];
  document.getElementById("color").innerHTML = p[1];
},false); */



function gethex (canvase,x){
    var c = canvase.getContext('2d');
    var coord = new Array();
    for (i = 0; i < 500; i++) {

        var p = c.getImageData(i, x, 1, 1).data; 
        if((p[0] == 0) && (p[1] == 0) && (p[2] == 0) && (p[3] == 0)){
            coord[i] += " (Transparent color detected, cannot be converted to HEX)";
         //   console.log(i)
}

var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

document.getElementById("status").innerHTML = coord[i];
document.getElementById("color").style.backgroundColor = hex;

    }
    


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

function getexample(){

//console.log(Test(canvas,100))

}