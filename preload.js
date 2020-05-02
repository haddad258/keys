const $ = require('jquery')
const request = require('request')
const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
const net = require('net')
const fs = require('fs');
axiosCookieJarSupport(axios);





var table = new Array();
const cookieJar = new tough.CookieJar();

var params = {email:"johnadmin@none.com",
           password:"password"};

 var urlsend='https://carkeysexpress.com/api/v1/admin/users/authenticate';
axios
  .post(urlsend,params, {
    jar: cookieJar, // tough.CookieJar or boolean
    withCredentials: true, // If true, send cookie stored in jar
  })
 
  .then(()=>{
 axios.get('https://carkeysexpress.com/api/v1/admin/orders',{
      jar: cookieJar, // tough.CookieJar or boolean
      withCredentials: true, // If true, send cookie stored in jar
    })
    .then(resp => {
      var data = resp.data;
      var datetimee = new Date();
  for(let i=0;i<data.length; i++ ) {
  
table[i]= data[i];
if(datetimee < new Date('12/01/2024 00:00')){
    $('#demott').append(trouver(data[i], i));
} else{
  console.log("err")
}
  }

 /*  require('getmac').getMac(function(err,macAddress){
    if (err)  throw err;
    $('#mac').append(macAddress)    
  });
 */
 

$('#mac').append(datetimee)

        }) 

        
       
  })
  /* .then( ) */




  
function trouver(data,i){
  var idpr =data.lines[0]
return ` <tr id="${i}" >
<th scope="row">${data.user_id}</th>
<td id="aelem${i}">${data.id}</td>
<td>${data.billing_address.first_name}  ${data. billing_address.last_name}</td>
<td>${idpr.data.vehicle_id}</td>
<td>${idpr.data.product_id}</td>
<td>${idpr.data.quantity}</td>
<td>

   <a   onclick="getspec(${idpr.data.product_id})" href="http://localhost:2000/${data.user_id}" |  rel="noopener" class="btn btn-sm btn-success">Show  users Keyring </a>
   <a href="" class="btn btn-sm btn-danger">Delete</a>
 </td>
</tr>`;
/* return ` <tr id="${i}" >
<th scope="row">${data.user_id}</th>
<td id="aelem${i}">${data.id}</td>
<td>${data.billing_address.first_name}  ${data. billing_address.last_name}</td>
<td>${idpr.data.vehicle_id}</td>
<td>${idpr.data.product_id}</td>
<td>${idpr.data.quantity}</td>
<td>

   <a   onclick="getspec(${idpr.data.product_id})" |  ett" rel="noopener" class="btn btn-sm btn-success">Show  users Keyring </a>
   <a href="/delete/<%= player.id %>" class="btn btn-sm btn-danger">Delete</a>
 </td>
</tr>`; */


}
 

 function getorde(){
  for(let i=0;i<table.length; i++ ) {
    var k = table[i].user_id;
  axios.get('https://carkeysexpress.com/api/v1/admin/orders?user_id='+k,{
    jar: cookieJar, 
    withCredentials: true, 
  })
  .then(resp => { 
//console.log(resp.data)
$('#demo').append(resp.data[0].id)

  })
  }
}  
function goBack() {
  window.history.back();
}


 function webse(){

  axios.get('https://carkeysexpress.com/api/v1/admin/keyrings',{
    jar: cookieJar, // tough.CookieJar or boolean
    withCredentials: true, // If true, send cookie stored in jar
  })

  .then(resp => { 
    $('#demo').append(resp.data[0].label);
    //console.log(resp.data);
  
  })
}
webse(); 


function getspec(i){
  axios.get('https://carkeysexpress.com/api/v1/products/getSpecs?product_id='+i)
  .then(res => {
    //console.log(i)
   
    var m = res.data.depths[0];
 
  })
  
}

function Login(){
  var login = document.getElementById('login');
  var password = document.getElementById('password');


  
var params2 = {email: login.value ,
  password: password.value};
  var datetime = new Date();
  //console.log(login.value)
  if(datetime < new Date('12/01/2021 00:00')){
console.log(datetime)
var urlsend='https://carkeysexpress.com/api/v1/admin/users/authenticate';
axios.post(urlsend,params2) 
.then((reep) => {
//console.log(reep.data)
if (reep.data.email == login.value){
  window.location.replace("./index.html")
}
else {
  window.location.replace("./login.html")
}

 

})
}else {
  console.log("error")
}
}

