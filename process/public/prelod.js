



const  axios = require('axios')
 

var table = new Array();

/*async function example() {
   let res = await axios.get('https://carkeysexpress.com/api/v1/vehicles/getMakes');
   var data = res.data;
console.log(res);
for(let i=0;i<data.length; i++ ) {
  // $('#example').append(data[i].price)
   $('#demott').append(trouver(data[i], i));
}  
} 
makeGetRequest();

*/
 function myFunction() {
   axios.get('https://carkeysexpress.com/api/v1/vehicles/getMakes')
   .then(res => {
   //  console.log(res.data);
    
 /*  
  var x = document.createElement("SELECT");
  x.setAttribute("id", "mySelect");
  x.setAttribute("onclick","model()")
  x.setAttribute("class","btn btn-sm btn-success")
  //class="btn btn-sm btn-success"
  document.body.appendChild(x); */
 for(let i=0;i<res.data.length; i++ ) {
    //console.log(res.data[i].name)
  var z = document.createElement("option");
 

 //  z.setAttribute("value", res.data[i].name);
   z.setAttribute("value", res.data[i].id);
   var t = document.createTextNode(res.data[i].name);
   z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
  }
})
}
function model() {
   var x = document.getElementById("mySelect").value;
 /*   document.getElementById("demo").innerHTML = x; */

var urlbase = 'https://carkeysexpress.com/api/v1/vehicles/getModels?make_id=';
var url = urlbase.concat(x);

   axios.get(url)
   .then(resp => {
     //console.log(res.data[1].name)
     
  /*  var p = document.createElement("SELECT");
   p.setAttribute("id", "mymodel");
   p.setAttribute("onclick","years()")
   p.setAttribute("class","btn btn-sm btn-success")
   document.body.appendChild(p); */
  for(let i=0;i<resp.data.length; i++ ) {
    // console.log(resp.data[i].name)

   var k = document.createElement("option");
   //console.log(k)
  //  z.setAttribute("value", res.data[i].name);
    k.setAttribute("value", resp.data[i].id);
    var tn = document.createTextNode(resp.data[i].name);
    k.appendChild(tn);
   document.getElementById("mymodel").appendChild(k);
   }
   
   
   })



 }


 function years(){
   var x = document.getElementById("mySelect").value;
 
  var y = document.getElementById("mymodel").value;
  // document.getElementById("demo2").innerHTML = y;
  // console.log(y)
  // console.log(x)
  //12208
//https://carkeysexpress.com/api/v1/vehicles/getYears?make_id=12&model_id=208
var urlbase = 'https://carkeysexpress.com/api/v1/vehicles/getYears?make_id=';
var urlbase2 ='&model_id='
var url = urlbase +x+urlbase2+y;
console.log(url)

  axios.get(url)
   .then(resp => {
//console.log(resp.data)
/* var p = document.createElement("SELECT");
   p.setAttribute("id", "myears");
   p.setAttribute("onclick","idvehicule()")
   p.setAttribute("class","btn btn-sm btn-success")
   document.body.appendChild(p); */
  for(let i=0;i<resp.data.length; i++ ) {
    // console.log(resp.data[i].name)

   var k = document.createElement("option");
   //console.log(k)
  //  z.setAttribute("value", res.data[i].name);
    k.setAttribute("value", resp.data[i].id);
    var tn = document.createTextNode(resp.data[i].year);
    k.appendChild(tn);
   document.getElementById("myears").appendChild(k);
   }

   }) 

 }

 function idvehicule() {
   var x = document.getElementById("myears").value;
    /*  document.getElementById("demo2").innerHTML = x;
 */
     var baseurl ='https://carkeysexpress.com/api/v1/products/findByVehicle?vehicle_id=' ;
     var url = baseurl +x ;
     axios.get(url)
   .then(resp => {
     /*  var p = document.createElement("SELECT");
      p.setAttribute("id", "myidvec");
      p.setAttribute("class","btn btn-sm btn-success")
      
      document.body.appendChild(p); */
     for(let i=0;i<resp.data.length; i++ ) {
       // console.log(resp.data[i].name)
   
      var k = document.createElement("option");
     // console.log(k)
     //  z.setAttribute("value", res.data[i].name);
       k.setAttribute("value", resp.data[i].id);
       var tn = document.createTextNode(resp.data[i].title);
       k.appendChild(tn);
      document.getElementById("myidvec").appendChild(k);
      }
   
   
   
   })


 }

 function speckey(){
   var x = document.getElementById("myidvec").value;

  
   var baseurl ='https://carkeysexpress.com/api/v1/products/getSpecs?product_id=';
   var url  = baseurl + x ;
  // console.log(url) ;
   axios.get(url)
   .then(resp => {   

      var depths = resp.data ;
      //console.log(depths)
      //document.getElementById("idforproc").html(x)
      document.getElementById("changetable").setAttribute("value",x)
      $('#idforproc').html(x)
   
 })

 }

function changreper(){

 var m= document.getElementById("changetable").getAttribute('value');
 axios.get('https://carkeysexpress.com/api/v1/products/getSpecs?product_id='+m)
 .then(res => { 

//console.log(res.data)
$('#blade_width').html(res.data.blade_width)
$('#blade_width').attr("value",res.data.blade_width)
$('#depths0').html(res.data.depths[0])
$('#depths0').attr("value",res.data.depths[0])
$('#depths1').html(res.data.depths[1])
$('#depths1').attr("value",res.data.depths[1])
$('#depths2').html(res.data.depths[2])
$('#depths2').attr("value",res.data.depths[2])
$('#depths3').html(res.data.depths[3])
$('#depths3').attr("value",res.data.depths[3])
$('#depths4').html(res.data.depths[4])
$('#depths4').attr("value",res.data.depths[4])
$('#depths5').html(res.data.depths[5])
$('#depths5').attr("value",res.data.depths[5])
$('#depths6').html(res.data.depths[6])
$('#depths6').attr("value",res.data.depths[6])
$('#depths7').html(res.data.depths[7])
$('#depths7').attr("value",res.data.depths[7])
$('#depths8').html(res.data.depths[8])
$('#depths8').attr("value",res.data.depths[8])
$('#depths9').html(res.data.depths[9])
$('#depths9').attr("value",res.data.depths[9])

$('#spaces0').html(res.data.spaces[0])
$('#spaces0').attr("value",res.data.spaces[0])
$('#spaces1').html(res.data.spaces[1])
$('#spaces1').attr("value",res.data.spaces[1])
$('#spaces2').html(res.data.spaces[2])
$('#spaces2').attr("value",res.data.spaces[2])
$('#spaces3').html(res.data.spaces[3])
$('#spaces3').attr("value",res.data.spaces[3])
$('#spaces4').html(res.data.spaces[4])
$('#spaces4').attr("value",res.data.spaces[4])
$('#spaces5').html(res.data.spaces[5])
$('#spaces5').attr("value",res.data.spaces[5])
$('#spaces6').html(res.data.spaces[6])
$('#spaces6').attr("value",res.data.spaces[6])
$('#spaces7').html(res.data.spaces[7])
$('#spaces7').attr("value",res.data.spaces[7])
$('#spaces8').html(res.data.spaces[8])
$('#spaces8').attr("value",res.data.spaces[8])
$('#spaces9').html(res.data.spaces[9])
$('#spaces9').attr("value",res.data.spaces[9])
$('#width').html(parseFloat(res.data.spaces[0])*1000)
$('#width').attr("value",parseFloat(res.data.spaces[0])*1000)
$('#step').html(((parseFloat(res.data.depths[0]) - parseFloat(res.data.depths[1])) *1000) )
$('#step').attr("value",parseFloat(res.data.spaces[0])*1000)


})
}
