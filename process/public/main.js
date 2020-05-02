/* const axios = require('axios');
*/
/* axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => {
   // console.log(res.data.id);
   // console.log(res.data.title);
  })
  .catch(err => {
    console.log(err);
  }); 
 */
var imageurl ;
var imageinitial ;
window.onload = function () {
  'use strict';

   
  var Cropper = window.Cropper;
  var URL = window.URL || window.webkitURL;
 // console.log(Cropper);
  //var typp = document.querySelector('#getCropvasModal');
  var container = document.querySelector('.img-container');
  var image = container.getElementsByTagName('img').item(0);
  var result = document.querySelector('#getCroppedCanvasModal')
  console.log(image)
  var download = document.getElementById('download');
  var actions = document.getElementById('actions');
  //var data = document.querySelector('#data');
  var dataX = document.getElementById('dataX');
  var dataY = document.getElementById('dataY');
  var dataHeight = document.getElementById('dataHeight');
  var dataWidth = document.getElementById('dataWidth');
  var dataRotate = document.getElementById('dataRotate');
  var dataScaleX = document.getElementById('dataScaleX');
  var dataScaleY = document.getElementById('dataScaleY');
  var minCroppedWidth = 30;
      var minCroppedHeight = 15;
      var maxCroppedWidth = 640;
      var maxCroppedHeight = 320;
  var options = {
    aspectRatio: NaN,
    preview: '.img-preview',
    data: {
      rotate:90,
      x : 0 ,
      y : (image.width/3)*1,
      width: (image.height/3)*1.8,
      height: (image.width/3)*0.9,
    },
    
    cropstart: function (e) {
     // console.log(e.type, e.detail.action);
    },
    cropmove: function (e) {
      //console.log(e.type, e.detail.action);
    },
    cropend: function (e) {
     // console.log(e.type, e.detail.action);
    },
    crop: function (event) {
      var width = event.detail.width;
      var height = event.detail.height;

      if (
        width < minCroppedWidth
        || height < minCroppedHeight
        || width > maxCroppedWidth
        || height > maxCroppedHeight
      ) {
        cropper.setData({
          width: Math.max(minCroppedWidth, Math.min(maxCroppedWidth, width)),
          height: Math.max(minCroppedHeight, Math.min(maxCroppedHeight, height)),
        });
      }

     // data.textContent = JSON.stringify(cropper.getData(true));
      //console.log(cropper.getData(true).rotate)
   
    },
    ready: function (e) {
      
     /*  var image = new Image();
      image.src =  cropper.getCroppedCanvas1().toDataURL('image/jpeg');
      image.width = 300;
      image.height=200;
    result.appendChild(image); */
    var res = cropper.getCroppedCanvas1();
    res.id="calcul"
    result.appendChild(res);
     
    },
    zoom: function (e) {
     // console.log(e.type, e.detail.ratio);
    }
  };
  var cropper = new Cropper(image, options);
  var originalImageURL = image.src;
  var uploadedImageType = 'image/jpeg';
  var uploadedImageName = 'cropped.jpg';
  var uploadedImageURL;

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Buttons
  if (!document.createElement('canvas').getContext) {
    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
  }

  if (typeof document.createElement('cropper').style.transition === 'undefined') {
    $('button[data-method="rotate"]').prop('disabled', true);
    $('button[data-method="scale"]').prop('disabled', true);
  }

  /* $(() => {
    $("#getFirmList").click(checkServerFirms);
    $("#getLocalFirmList").click(checkLocalFirms);
    $("#start-flash").click(() => flash(currentFirmware));
    checkLocalFirms();
    checkServerFirms();
  }); */
  $('#typclic').click(convert);
  // Options
  actions.querySelector('.docs-toggles').onchange = function (event) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var cropBoxData;
    var canvasData;
    var isCheckbox;
    var isRadio;

    if (!cropper) {
      return;
    }

    if (target.tagName.toLowerCase() === 'label') {
      target = target.querySelector('input');
    }

    isCheckbox = target.type === 'checkbox';
    isRadio = target.type === 'radio';

    if (isCheckbox || isRadio) {
      if (isCheckbox) {
        options[target.name] = target.checked;
        cropBoxData = cropper.getCropBoxData();
        canvasData = cropper.getCanvasData();

        options.ready = function () {
      //    console.log('ready');
          cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
        };
      } else {
        options[target.name] = target.value;
        options.ready = function () {
        //  console.log('ready');
        };
      }

      // Restart
      cropper.destroy();
      cropper = new Cropper(image, options);
    }
  };

  // Methods
  actions.querySelector('.docs-buttons').onclick = function (event) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var cropped;
    var result;
    var input;
    var data;

    if (!cropper) {
      return;
    }

    while (target !== this) {
      if (target.getAttribute('data-method')) {
        break;
      }

      target = target.parentNode;
    }

    if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
      return;
    }

    data = {
      method: target.getAttribute('data-method'),
      target: target.getAttribute('data-target'),
      option: target.getAttribute('data-option') || undefined,
      secondOption: target.getAttribute('data-second-option') || undefined
    };

    cropped = cropper.cropped;

    if (data.method) {
      if (typeof data.target !== 'undefined') {
        input = document.querySelector(data.target);

        if (!target.hasAttribute('data-option') && data.target && input) {
          try {
            data.option = JSON.parse(input.value);
          } catch (e) {
        //    console.log(e.message);
          }
        }
      }

      switch (data.method) {
        case 'rotate':
          if (cropped && options.viewMode > 0) {
            cropper.clear();
          }

          break;

        case 'getCroppedCanvas':
          try {
            data.option = JSON.parse(data.option);
          } catch (e) {
          //  console.log(e.message);
          }

          if (uploadedImageType === 'image/jpeg') {
            if (!data.option) {
              data.option = {};
            }

            data.option.fillColor = '#fff';
          }

          break;
      }

      result = cropper[data.method](data.option, data.secondOption);

      switch (data.method) {
        case 'rotate':
          if (cropped && options.viewMode > 0) {
            cropper.crop();
          }

          break;

        case 'scaleX':
        case 'scaleY':
          target.setAttribute('data-option', -data.option);
          break;

        case 'getCroppedCanvas':
          if (result) {
         //   console.log(result)
//             var myObstacle1;
//             var myObstacle2;
//             var myObstacle3;
//             var myObstacle4;
//             var myObstacle5;
//             function component(width, height, color, x, y) {
//               this.width = width;
//               this.height = height;
//               this.speedX = 0;
//               this.speedY = 0;    
//               this.x = x;
//               this.y = y;    
//               this.update = function() {
                  
//                   context.fillRect(this.x, this.y, this.width, this.height);
//               }
//               this.newPos = function() {
//                   this.x += this.speedX;
//                   this.y += this.speedY;        
//               }    
//           }
//     console.log( result.width)
//     console.log(result.height)
//     var context = result.getContext('2d');

//     context.beginPath();
//     context.moveTo(120, 50);
//     context.fillStyle = "#FF0000";
//     context.fillRect(440,0,0.5,300);
//     context.fillRect(400,0,0.5,300);
//    context.fillRect(360,0,0.5,300);
//    context.fillRect(315,0,0.5,300);
//     context.fillRect(280,0,0.5,300);
//     context.fillRect(240,0,0.5,300);
//      context.fillRect(210,0,0.5,300);
//    context.fillRect(170,0,0.5,300);
//       context.fillRect(140,0,0.5,300);
//  context.fillRect(90,0,0.5,300);
//         context.fillRect(1,80,480,0.5);
//      context.fillRect(1,100,480,0.5);
//      context.fillRect(1,120,480,0.5);
//       context.fillRect(1,10,480,0.5);
//          context.fillRect(1,28,480,0.5);
//       context.fillRect(1,40,480,0.5);
//     context.fillRect(1,60,480,0.5);
//     var myObstacle;

//     myObstacle1  = new component(10, 15, "black", 90, 10 );  
//     myObstacle  = new component(10, 15, "black", 140, 10);  
//    myObstacle2  = new component(10, 15, "black", 170, 10); 
//  myObstacle3  = new component(10, 15, "black", 210, 10); 
//  myObstacle4  = new component(10, 155, "black", 240, 10);
//  myObstacle5  = new component(4,  1, "black", 280, 10);
//  myObstacle.update();
//  myObstacle1.update();
// myObstacle2.update();
// myObstacle3.update();
// myObstacle4.update();
// myObstacle5.update();
// myObstacle.newPos();
//    myObstacle1.newPos();
// myObstacle3.newPos();
// myObstacle2.newPos();
// myObstacle4.newPos();
// myObstacle5.newPos();
//            // $('#getCroppedCanvasModal').append(`<canvas width="480" height="270" id="res" style="background: rgba(0, 0, 0, 0) url("${result.srcElement}") no-repeat scroll 0% 0%;"></canvas> `);
  
//            // $('#getCroppedCanvasModal').append(result);
//        //   $('#getCroppedCanvasModal').append(`<img src="${result}" alt="" height="220" width="500" >`)

          
//             //<img src="smiley.gif" alt="Smiley face" height="42" width="42"> 
//             $('#getCroppedCanvasModal').append(result);
//          /*  var m = result.toDataURL('image/jpeg');
//           console.log(typeof m)
//           var mage = new Image()
//           console.log(mage);
//            mage.src = toString(m) ; */
//    /*  var k=0 ;
//    do {
//            var source1 = `<img src="${result}" alt="" height="220" width="500" id="${k}" >`
//            $('#getCroppedCanvasModal').append(source1);
//            k=k+1;
//           } while(k<5) */
//             /*  var image = new Image();
//     }
//             image.src = result.toDataURL('image/png');
//             console.log(image.src)
//             result.appendChild(image);
//             console.log( cropper.getCroppedCanvas()) */
//           //convertcanvas(result);
//           //  console.log(result.width);
//             // Bootstrap's Modal
//          /*  var r=  $('#getCvas').append(trouver());
//             console.log(makeGetRequest()); */
//            /*   var imageee = result.toDataURL('image/png') ;
//                 typp.appendChild(imageee); */
//      // $('#getCroppedCanvasModal').appendChild(imageee); 
             
//       /* var  typp = $('getCropvasModal')
//       console.log(typp);
//        console.log(imageee) */

// //console.log(r);

//          
//var k =`background: url("${result[1]}")  no-repeat`
// var canvas1 = result[1];
// console.log(canvas1)
// var context = result[0].getContext('2d');

//     context.beginPath();
//     context.moveTo(120, 50);
//     context.fillStyle = "#FF0000";
//     context.fillRect(440,0,0.5,300);
//     context.fillRect(400,0,0.5,300);
//    context.fillRect(360,0,0.5,300);
//    context.fillRect(315,0,0.5,300);
//     context.fillRect(280,0,0.5,300);
//     context.fillRect(240,0,0.5,300);
//      context.fillRect(210,0,0.5,300);
//    context.fillRect(170,0,0.5,300);
//       context.fillRect(140,0,0.5,300);
//  context.fillRect(90,0,0.5,300);
//         context.fillRect(1,80,480,0.5);
//      context.fillRect(1,100,480,0.5);
//      context.fillRect(1,120,480,0.5);
//       context.fillRect(1,10,480,0.5);
//          context.fillRect(1,28,480,0.5);
//       context.fillRect(1,40,480,0.5);
//     context.fillRect(1,60,480,0.5);
// result[0].style= `background: url("${result[1]}")  no-repeat`;

traiter(result[0],result[1]);
result[0].id = "calcul1";
//result[0].width=480 ;
//result[0].height = 270;

for(let i=11;i<21; i++ ) {
  tablex[i]=tablex[i-10];
  
 }
$('#getCroppedCanvasModal').append(trouver(result[0]));
var getspace1 = parseFloat(document.getElementById('spaces1').getAttribute("value")) *1000  ;
//console.log(getspace1)
 imageinitial = jQuery.extend({}, result[0]);
 //console.log('thiis' , imageinitial)
 imageurl = result[0];

 copied()
//imageurl = imageurl1.toString();


}

          break;

        case 'destroy':
          cropper = null;

          if (uploadedImageURL) {
            URL.revokeObjectURL(uploadedImageURL);
            uploadedImageURL = '';
            image.src = originalImageURL;
          }

          break;
      }

      if (typeof result === 'object' && result !== cropper && input) {
        try {
          input.value = JSON.stringify(result);
        } catch (e) {
          console.log(e.message);
        }
      }
    }
  };

  document.body.onkeydown = function (event) {
    var e = event || window.event;

    if (e.target !== this || !cropper || this.scrollTop > 300) {
      return;
    }

    switch (e.keyCode) {
      case 37:
        e.preventDefault();
        cropper.move(-1, 0);
        console.log(e.keyCode)
        break;

      case 38:
        e.preventDefault();
        cropper.move(0, -1);
        break;

      case 39:
        e.preventDefault();
        cropper.move(1, 0);
        break;

      case 40:
        e.preventDefault();
        cropper.move(0, 1);
        break;
    }
  };

  // Import image
  var inputImage = document.getElementById('inputImage');

  if (URL) {
    inputImage.onchange = function () {
      var files = this.files;
      var file;

      if (cropper && files && files.length) {
        file = files[0];

        if (/^image\/\w+/.test(file.type)) {
          uploadedImageType = file.type;
          uploadedImageName = file.name;

          if (uploadedImageURL) {
            URL.revokeObjectURL(uploadedImageURL);
          }

          image.src = uploadedImageURL = URL.createObjectURL(file);
          cropper.destroy();
          cropper = new Cropper(image, options);
          inputImage.value = null;
        } else {
          window.alert('Please choose an image file.');
        }
      }
    };
  } else {
    inputImage.disabled = true;
    inputImage.parentNode.className += ' disabled';
  }




};
function trouver(ab){
 
  $('#getCroppedCanvasModal').html(ab);
 
 
  /*  return ` 
  <div >
  <button class="fa fa-arrow-up btn-success" onmousedown="moveup1()" onmouseup="clearmove()" ontouchstart="moveup1()"></button>
  <button class="fa fa-arrow-up  btn-success" onmousedown="moveup()" onmouseup="clearmove()" ontouchstart="moveup()"></button>
<button class="fa fa-arrow-up  btn-success" onmousedown="moveup2()" onmouseup="clearmove()" ontouchstart="moveup2()"></button>
<button class="fa fa-arrow-up  btn-success" onmousedown="moveup3()" onmouseup="clearmove()" ontouchstart="moveup3()"></button>
<button  class="fa fa-arrow-up  btn-success" onmousedown="moveup4()" onmouseup="clearmove()" ontouchstart="moveup4()"></button>
<button  class="fa fa-arrow-up  btn-success" onmousedown="moveup5()" onmouseup="clearmove()" ontouchstart="moveup5()"></button>
<button class="fa fa-arrow-up  btn-success" onmousedown="moveup6()" onmouseup="clearmove()" ontouchstart="moveup6()"></button>
<button class="fa fa-arrow-up  btn-success" onmousedown="moveup7()" onmouseup="clearmove()" ontouchstart="moveup7()"></button>
<button class="fa fa-arrow-up  btn-success" onmousedown="moveup8()" onmouseup="clearmove()" ontouchstart="moveup8()"></button>
<button class="fa fa-arrow-up  btn-success" onmousedown="moveup9()" onmouseup="clearmove()" ontouchstart="moveup9()"></button>
</div>
<br><br>

<button class="fa fa-arrow-down  btn-success" onmousedown="movedown1()" onmouseup="clearmove()" ontouchstart="movedown()"></button>
  <button class="fa fa-arrow-down  btn-success" onmousedown="movedown()" onmouseup="clearmove()" ontouchstart="movedown()"></button>
<button  class="fa fa-arrow-down  btn-success" onmousedown="movedown2()" onmouseup="clearmove()" ontouchstart="movedown2()"></button>
<button class="fa fa-arrow-down  btn-success" onmousedown="movedown3()" onmouseup="clearmove()" ontouchstart="movedown3()"></button>
<button class="fa fa-arrow-down  btn-success" onmousedown="movedown4()" onmouseup="clearmove()" ontouchstart="movedown4()"></button>
<button class="fa fa-arrow-down  btn-success" onmousedown="movedown5()" onmouseup="clearmove()" ontouchstart="movedown5()"></button>
<button class="fa fa-arrow-down  btn-success" onmousedown="movedown6()" onmouseup="clearmove()" ontouchstart="movedown6()"></button>
<button class="fa fa-arrow-down  btn-success" onmousedown="movedown7()" onmouseup="clearmove()" ontouchstart="movedown7()"></button>
<button class="fa fa-arrow-down  btn-success" onmousedown="movedown8()" onmouseup="clearmove()" ontouchstart="movedown8()"></button>
<button class="fa fa-arrow-down  btn-success" onmousedown="movedown9()" onmouseup="clearmove()" ontouchstart="movedown9()"></button>

</div>

` ; */
}

function convertcanvas(canv){
  var ctx= canv.getContext("2d");
  canv.id="res";

//canv.id="res"; 
//canv.style.width=500;
//console.log(canv.style.width);

$('#getCroppedCanvasModal').append(canv);

//console.log(canv)


}

function convert(){
  var container = document.querySelector('.img-container');
  var image = container.getElementsByTagName('img').item(0);
 var  originalImageURL=image.src ;
  
  document.getElementById("getCropvasModal").src=originalImageURL;

 

}
/* async function makeGetRequest() {
  let res = await axios.get('http://localhost:8000/products');
  var data = res.data;
console.log(data[1]); 
} 
makeGetRequest(); */

function traiter(a,b){

  var context = a.getContext('2d');

 /*  context.beginPath();
  context.moveTo(120, 50); */
 
 /*  context.fillStyle = "#2682c4";
  context.fillRect(0,0,2,a.height-1);
  context.fillStyle = "#F9A41E";
  context.fillRect(a.width-2,0,2,a.height);
  context.fillStyle = "#371F57";
  context.fillRect(0,0,a.width,2);
  context.fillStyle = "#FF0000";
  context.fillRect(0,a.height-0,a.width,2); */ ////this color
  //     context.fillRect(440,0,0.5,300);
  //     context.fillRect(400,0,0.5,300);
  //    context.fillRect(360,0,0.5,300);
  //    context.fillRect(315,0,0.5,300);
  //     context.fillRect(280,0,0.5,300);
  //     context.fillRect(240,0,0.5,300);
  //      context.fillRect(210,0,0.5,300);
  //    context.fillRect(170,0,0.5,300);
  //       context.fillRect(140,0,0.5,300);
  //  context.fillRect(90,0,0.5,300);
  //         context.fillRect(1,80,480,0.5);
  //      context.fillRect(1,100,480,0.5);
  //      context.fillRect(1,120,480,0.5);
  //       context.fillRect(1,10,480,0.5);
  //          context.fillRect(1,28,480,0.5);
  //       context.fillRect(1,40,480,0.5);
  //     context.fillRect(1,60,480,0.5);
   
/* p=5;
  for (let i=0;i<a.width;i++){
    context.fillRect(20*i,0,0.5,300);
} */
a.style= `background: url("${b}")  no-repeat`;

}

function getwidth(elem) {

  var width = elem.width;
return width;
//return height;
}
function getheight(elem) {

  var height = elem.height;
return height;
//return height;
}

/* function clii(){
  var canvasA = document.getElementById("canvasA");
var canvasB = document.getElementById("canvasB");
var image = new MarvinImage();
  image.load("https://carkeysexpress.com/storage/keyrings/ywMbvdnFBbmOATOWgLzTqW3HTmOrpaBmfk3lUVwd.png", function(){
		image.draw(canvasA);
		Marvin.colorChannel(image, image, 14, 0, -8);
		image.draw(canvasB);
	});
}
 */

/* function cliic(){
  var container = document.querySelector('.img-container');
  var imagei = container.getElementsByTagName('img').item(0);
  var m = imagei.getAttribute("src")
console.log(m)
 var canvas = document.getElementById("canvas");
image = new MarvinImage();
console.log(image)
//image.load(m, imageLoaded); 
}
function imageLoaded() {

var width = image.getWidth();
var factor = width / 80;

var original = image.clone();
Marvin.scale(image.clone(), image, 80);

// 2. Change green pixels to white
filterGreen(image);

// 3. Use threshold to separate foreground and background.
var bin = MarvinColorModelConverter.rgbToBinary(image, 145);

// 4. Morphological closing to group separated parts of the same object
Marvin.morphologicalClosing(bin.clone(), bin, MarvinMath.getTrueMatrix(6, 6));

// 5. Use Floodfill segmention to get image segments
image = MarvinColorModelConverter.binaryToRgb(bin);
var segments = Marvin.floodfillSegmentation(image);

// 6. Show the segments in the original image
for (var i = 1; i < segments.length; i++) {
  var seg = segments[i];
  
 original.drawRect(Math.floor(seg.x1 * factor), Math.floor(seg.y1 * factor), Math.floor(seg.width * factor), Math.floor(seg.height * factor), 0xFFFFFF00);
  original.drawRect(Math.floor(seg.x1 * factor) + 1, Math.floor(seg.y1 * factor) + 1, Math.floor(seg.width * factor) - 2, Math.floor(seg.height * factor) - 2, 0xFFFFFF00);
}

original.draw(canvas);
}

function filterGreen(image) {
var r, g, b;
for (var y = 0; y < image.getHeight(); y++) {
  for (var x = 0; x < image.getWidth(); x++) {
    r = image.getIntComponent0(x, y);
    g = image.getIntComponent1(x, y);
    b = image.getIntComponent2(x, y);
    if (g>15 && r>15 && b>15) {
      image.setIntColor(x, y, 255, 255, 255);
    }
  }
}
}
 */

  
