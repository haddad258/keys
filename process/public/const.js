var cv = require('opencv')
let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    
  imgElement.src = URL.createObjectURL(imageurl);
}, false);
function restart(){

    let imgElement = document.getElementById('imageSrc');
    var src = imageurl.toDataURL("blob/png")
    imgElement.setAttribute('src',src)
  }
  


  function cliic(){

    let src = cv.imread('canvasre');
//cv.imshow('canvasOutput2', src);
let src1 = new cv.Mat();
src1 = src.clone();
let dst1 = new cv.Mat();
let dsize1 = new cv.Size(src1.rows, src1.cols);
let center1 = new cv.Point(src1.cols / 2, src1.rows / 2);
// You can try more different parameters

let angle=0;
//src.delete(); dst.delete(); M.delete();
//let src = cv.imread('canvasInput');
let dst = new cv.Mat();
let mat_canny = new cv.Mat();
let select_roi = new cv.Mat();
cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
// You can try more different parameters


//cv.Canny(src, dst, 0, 200, 3, false);


let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
let high = new cv.Mat(src.rows, src.cols, src.type(), [150, 150, 150, 255]);
// You can try more different parameters
cv.inRange(src, low, high, dst);
mat_canny = dst.clone();


let contours = new cv.MatVector();
let hierarchy = new cv.Mat();
cv.findContours(mat_canny, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);

for (let i=0 ; i <300; i++)
{

let cnt = contours.get(i);


// You can try more different parameters
let rotatedRect = cv.minAreaRect(cnt);
let vertices = cv.RotatedRect.points(rotatedRect);
let rect = cv.boundingRect(cnt);
let area = cv.contourArea(cnt, false);

//angle of rectangle
if(area > 1000)
{
perimeterOutput.innerHTML = area;
angle = rotatedRect.angle;
perimeterOutput1.innerHTML = angle;
//var text = "";
let contoursColor = new cv.Scalar(0, 0, 255);
let rectangleColor = new cv.Scalar(255, 0, 0);
cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
// draw rotatedRect
for (let i = 0; i < 4; i++) {
    cv.line(mat_canny, vertices[i], vertices[(i + 1) % 4], rectangleColor, 2, cv.LINE_AA, 0);
   
  }

//perimeterOutput2.innerHTML = text;
  let point1 = new cv.Point(rect.x, rect.y);
let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
cv.rectangle(src, point1,point2,rectangleColor, 2, cv.LINE_AA, 0); 
dst = src.roi(rect);



let M1 = cv.getRotationMatrix2D(center1,angle,1);
cv.warpAffine(src1, dst1, M1, dsize1, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
cv.imshow('canvasOutput', dst1);
}

cv.imshow('canvasOutput3', dst);
cv.imshow('canvasOutput1', mat_canny);
cv.imshow('canvasOutput2', src);

//if (angle<0){
//console.log("inside angle<0");
//let M1 = cv.getRotationMatrix2D(center1,angle+90,1);
//cv.warpAffine(src1, dst1, M1, dsize1, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
//cv.imshow('canvasOutput', dst1);
//}

//else (angle>0)
//{
//console.log("inside angle > 0");
//let M1 = cv.getRotationMatrix2D(center1,angle-90,1);
//cv.warpAffine(src1, dst1, M1, dsize1, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
//cv.imshow('canvasOutput', dst1);
}

src2.delete(); dst.delete(); contours.delete();

  }
function clic(){
    let caa = document.getElementById('canvasre');
   // console.log(caa)
    let src = cv.imread('canvasre');
  //cv.imshow('canvasOutput2', src);
  let src1 = new cv.Mat();
  src1 = src.clone();
  let dst1 = new cv.Mat();
  let dsize1 = new cv.Size(src1.rows, src1.cols);
  let center1 = new cv.Point(src1.cols / 2, src1.rows / 2);

  // You can try more different parameters
  

  
  //cv.Canny(src, dst, 0, 200, 3, false);
  
  
  let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
  let high = new cv.Mat(src.rows, src.cols, src.type(), [150, 150, 150, 255]);
  // You can try more different parameters
  cv.inRange(src, low, high, dst);
  mat_canny = dst.clone();
  
  
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  cv.findContours(mat_canny, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  
  for (let i=0 ; i <300; i++)
  {
  
  let cnt = contours.get(i);
  
  
  // You can try more different parameters
  let rotatedRect = cv.minAreaRect(cnt);
  let vertices = cv.RotatedRect.points(rotatedRect);
  let rect = cv.boundingRect(cnt);
  let area = cv.contourArea(cnt, false);
  
  //angle of rectangle
  if(area > 1000)
  {
  perimeterOutput.innerHTML = area;
  angle = rotatedRect.angle;
  perimeterOutput1.innerHTML = angle;
  //var text = "";
  let contoursColor = new cv.Scalar(0, 0, 255);
  let rectangleColor = new cv.Scalar(255, 0, 0);
  cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
  // draw rotatedRect
  for (let i = 0; i < 4; i++) {
      cv.line(mat_canny, vertices[i], vertices[(i + 1) % 4], rectangleColor, 2, cv.LINE_AA, 0);
     
    }
  
  //perimeterOutput2.innerHTML = text;
    let point1 = new cv.Point(rect.x, rect.y);
  let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
  cv.rectangle(src, point1,point2,rectangleColor, 2, cv.LINE_AA, 0); 
  dst = src.roi(rect);
  
  
  
  let M1 = cv.getRotationMatrix2D(center1,angle,1);
  cv.warpAffine(src1, dst1, M1, dsize1, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
  cv.imshow('canvasOutput', dst1);
  }
  
  cv.imshow('canvasOutput3', dst);
  cv.imshow('canvasOutput1', mat_canny);
  cv.imshow('canvasOutput2', src);
  
  //if (angle<0){
  //console.log("inside angle<0");
  //let M1 = cv.getRotationMatrix2D(center1,angle+90,1);
  //cv.warpAffine(src1, dst1, M1, dsize1, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
  //cv.imshow('canvasOutput', dst1);
  //}
  
  //else (angle>0)
  //{
  //console.log("inside angle > 0");
  //let M1 = cv.getRotationMatrix2D(center1,angle-90,1);
  //cv.warpAffine(src1, dst1, M1, dsize1, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
  //cv.imshow('canvasOutput', dst1);
  }
  
  src2.delete(); dst.delete(); contours.delete();
  
  }
  
  