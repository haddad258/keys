var canvas = document.getElementById("canvasre");
var canvas2 = document.getElementById("canvasse");
var original = new MarvinImage();
var image;
var x ;
var y ;
var wi ;
var he ;



function grayScale(){
	image = original.clone();
  Marvin.grayScale(original, image);
  image.draw(canvas);
}

function blackAndWhite(){
	image = original.clone();
  Marvin.blackAndWhite(original, image, 0);
  image.draw(canvas);
}

function thresholding(){
	image = original.clone();
  Marvin.thresholding(original, image, 200);
  image.draw(canvas);
}

function sepia(){
  image = original.clone();
  Marvin.sepia(original, image, 30);
  image.draw(canvas);
}

function emboss(){
  image = original.clone();
  Marvin.emboss(original, image, 30);
  image.draw(canvas);
}

function halftone(){
  image = original.clone();
	Marvin.halftoneErrorDiffusion(original, image);
  image.draw(canvas);
}

function invert(){
	image = original.clone();
	Marvin.invertColors(original, image);
  image.draw(canvas);
}

function edgeDetection1(){
	image = original.clone();
  image.clear(0xFF000000);
	Marvin.prewitt(original, image);
	image.draw(canvas);
}

function edgeDetection2(){
	image = original.clone();
  image.clear(0xFF000000);
	Marvin.prewitt(original, image);
	Marvin.invertColors(image, image);
	Marvin.thresholding(image, image, 200);
	image.draw(canvas);
}

function crop(){
  image = original.clone();
	Marvin.crop(original, image, x, y, wi, he);
	canvas2.width=wi;
	canvas2.height=he ;
	canvas2.getContext("2d").clearRect(0,0,canvas2.width, canvas2.height);
	image.draw(canvas2);


 
	

	
	var imagloo ;
var cai = canvas2;
var fbi =canvas2.toDataURL("image/png");
rotate90(fbi,function(res){
			   
	var img_res = document.createElement('img')
	img_res.id="imageload"
	img_res.src = res
	imagloo=res;
	document.getElementById('getCroppedCanvasModal').appendChild(img_res)
	traiter(cai,imagloo);
cai.id = "calcul1";
//result[0].width=480 ;
//result[0].height = 270;
//document.getElementById('getCroppedCanvasModal').append(cai)
//$('#getCroppedCanvasModal').append(trouver(cai));
imageurl=cai
//console.log(cai)
 });


 
}

function scale(){
	image1 = original.clone();
	Marvin.scale(original, image1, 200);
	canvas.getContext("2d").clearRect(0,0,canvas.width, canvas.height);
	image1.draw(canvas);
}

function reset(){
	original.draw(canvas);
}

function onloo(){
//	var imaa=document.getElementById('margin').getAttribute("src")
var imaa = imageurl.toDataURL();
    original.load(imaa, function(){
        // Draw the original image 
		original.draw(canvas);
		var canvasz = document.getElementById('canvasre');
        coppy(canvasz);
	 });
	
}

function imageLoaded() {
    
    
  
	image = original.clone();
	var width = image.getWidth();
	var factor = width / 80;
  
	
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
	//console.log(segments)
	
	// 6. Show the segments in the original image
	for (var i = 1; i < segments.length; i++) {
	  var seg = segments[i];
	  if (Math.floor(seg.width * factor) * Math.floor(seg.height * factor) < 200){
		//  console.log('espace insuffsene')
	  } else{
	 original.drawRect(Math.floor(seg.x1 * factor), Math.floor(seg.y1 * factor), Math.floor(seg.width * factor), Math.floor(seg.height * factor), 0xFFFFFF00);
	 original.drawRect(Math.floor(seg.x1 * factor) + 1, Math.floor(seg.y1 * factor) + 1, Math.floor(seg.width * factor) - 2, Math.floor(seg.height * factor) - 2, 0xFFFAFF00);
	 original.drawRect(Math.floor(seg.x1 * factor) + 1, Math.floor(seg.y1 * factor) + 1, Math.floor((seg.width * factor)/2) - 2, Math.floor((seg.height * factor)) - 2, 0xFFFFFF00);
	 x=Math.floor(seg.x1 * factor)+13;
	 y=Math.floor(seg.y1 * factor);
	wi =Math.floor(seg.width * factor)-13 ;
	he =Math.floor(width ) ;
	
	  }
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
		if (g>254 && r>254 && b>254) {
		  image.setIntColor(x, y, 10, 10, 10);
		}
	  }
	}
  }
  var img = new Image();
  function copy() {
	var canvas = document.getElementById('canvasre');
	var ctx    = canvas.getContext('2d');
	ctx.drawImage(img,0,0);
	var pixels = ctx.getImageData(0,0,canvas.width,canvas.height);
	thresholdHsl(pixels,[0,0.5,0],[1,1,1]);
	ctx.putImageData(pixels, 0, 0);
	}

	function rgbToHsl( r, g, b ){
		r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;
	  
		if(max == min){
			h = s = 0; // achromatic
		}else{
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
			}
			h /= 6;
		}
		return [h, s, l];
	  }
	  
	  function thresholdHsl(pixels,lower,upper){
		var d = pixels.data;
		 var createTest = function( lower, upper ){
		   return lower <= upper
				  ? function(v){ return lower <= v && v <= upper; }
				  : function(v){ return lower <= v || v <= upper; };
		 }
		 var h = createTest( lower[0], upper[0] );
		 var s = createTest( lower[1], upper[1] );
		 var l = createTest( lower[2], upper[2] );
	  
		for (var i=0; i<d.length; i+=4) {
		 var hsl = rgbToHsl( d[i], d[i+1], d[i+2] );
		 if ( !h(hsl[0]) || !s(hsl[1]) || !l(hsl[2]) ){
		   d[i+3] = 0;
		 }
		}
	  }

	  function coppy() {
		var canvas = document.getElementById('canvasre');
		var ctx    = canvas.getContext('2d');
		ctx.drawImage(img,0,0);
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		
for (i = 0; i < imgData.width * imgData.height * 4; i += 4) {
    var r = imgData.data[i + 0];
    var g = imgData.data[i + 1];
    var b = imgData.data[i + 2];
    var a = imgData.data[i + 3];
    // compare rgb levels for green and set alphachannel to 0;
    selectedR = 105;
    selectedG = 150;
    selectedB = 105;
    if (r >= selectedR && g >= selectedG && b >= selectedB) {
        imgData.data[i + 3] = 0;
    }
}

ctx.putImageData(imgData, 0, 0);

imageurl = canvas.toDataURL()
		}


		function coppy(canvas) {
			
			var ctx    = canvas.getContext('2d');
		
	
			ctx.drawImage(img,0,0);
			var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
			
	for (i = 0; i < imgData.width * imgData.height * 4; i += 4) {
		var r = imgData.data[i + 0];
		var g = imgData.data[i + 1];
		var b = imgData.data[i + 2];
		var a = imgData.data[i + 3];
		// compare rgb levels for green and set alphachannel to 0;
		selectedR = 105;
		selectedG = 150;
		selectedB = 105;
		if (r >= selectedR && g >= selectedG && b >= selectedB) {
			imgData.data[i + 3] = 0;
		}
	}
	
	ctx.putImageData(imgData, 0, 0);
			}


			function rotatee() {
				var src2 = imageurl;
			  var src = src2.toDataURL('image/png')
				var img_src = document.createElement('img')
				img_src.src = src
				document.getElementById('container').appendChild(img_src)
				rotate90(src,function(res){
			   
				   var img_res = document.createElement('img')
				   img_res.src = res
				   document.getElementById('container').appendChild(img_res)
				})
			  }
			  
			  function rotate90(src, callback){
				var img = new Image()
				img.src = src
				img.onload = function() {
				  var canvas = document.createElement('canvas')
				  canvas.width = img.height
				  canvas.height = img.width
				  canvas.style.position = "absolute"
				  var ctx = canvas.getContext("2d")
				  ctx.translate(img.height, img.width / img.height)
				  ctx.rotate(Math.PI / 2)
				  ctx.drawImage(img, 0, 0)
				  callback(canvas.toDataURL())
				}
			  }


			  function rotate90(canvasTarget, image, w, h)
			  {
				canvasTarget.width = h;
				canvasTarget.height = w;
				var ctxtarget = canvasTarget.getContext("2d");   
				ctxtarget.translate(h, 0);
				ctxtarget.rotate(Math.PI / 2);  
				ctxtarget.drawImage(image, 0, 0);  
			  }


			  function rotatee() {
				var src2 = imageurl;
		//		console.log(imageurl)
			  var src = src2.toDataURL('image/png')
				var img_src = document.createElement('img')
				img_src.src = src
				document.getElementById('container').appendChild(img_src)
				rotate90(src,function(res){
			   
				   var img_res = document.createElement('img')
				   img_res.id="imageload"
				   img_res.src = res
				   document.getElementById('container').appendChild(img_res)
				})
			  }
			  
			  function rotate90(src, callback){
				var img = new Image()
				img.src = src
				img.onload = function() {
				  var canvas = document.createElement('canvas')
				  canvas.width = img.height
				  canvas.height = img.width
				  canvas.style.position = "absolute"
				  var ctx = canvas.getContext("2d")
				  ctx.translate(img.height, img.width / img.height)
				  ctx.rotate(Math.PI / 2)
				  ctx.drawImage(img, 0, 0)
				  callback(canvas.toDataURL())
				}
			  }