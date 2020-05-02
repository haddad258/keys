const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
const fs =require('fs')
var mysql = require('mysql');

const image2base64 = require('image-to-base64');
axiosCookieJarSupport(axios);


const cookieJar = new tough.CookieJar();

var params = {email:"johnadmin@none.com",
           password:"password"};

 var urlsend='https://carkeysexpress.com/api/v1/admin/users/authenticate';
 var product_id_url;


 var tabledepths = new Array();
 var tablespaces = new Array();
//mongoose.Promise = global.Promise;


const app = express();
const port = 3000;
var code0;
var code1;
var code2;
var code3;
var code4; 
// Allows cross-origin domains to access this API
var tableimage = new Array();
var tableshidden = new Array();
var hidden= "hidden"
var visible = "visible"
var width ;
var step ;
var bladewidth;
var retour;
app.use(express.static(__dirname + "/public"));
app.engine('js', require('ejs').renderFile);
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

  app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    if (error) {
      
      res.json({
        error: error
      });
    }else{
    var name = 'https://carkeysexpress.com/storage/keyrings/kq5bGNisgUyKh3Aa6Rn4DuLWGlrAW7TKmZNWwtrA.png'; 
   
    res.render(__dirname + "/public/index.html",{name:name});
    
  }
  });

  app.get("/api/:id", (req, res) => {
  
    
    /* var id =req.params.id;
    if(id>5){
      var name = 'hello'; 
      console.log("name");
      res.render(__dirname + "/public/example.html", {name:name});
      console.log("name");

    } else {
      console.log(error)
    }
    } 
      */

     axios.post(urlsend,params, {
      jar: cookieJar, // tough.CookieJar or boolean
      withCredentials: true, // If true, send cookie stored in jar
    })
    .then(resp => {
    //  console.log(resp.data);

      if(resp.data.is_admin ==1) {
        

          let keyringid = req.params.id;
          retour =keyringid ;
     axios.get('https://carkeysexpress.com/api/v1/admin/keyrings/'+keyringid,{
          jar: cookieJar, // tough.CookieJar or boolean
          withCredentials: true, // If true, send cookie stored in jar
        })
        .then(resp => {
        // console.log(resp.data);
         var name = resp.data.id ;
         var product_id = resp.data.product_id;
         product_id_url = product_id ;
        // console.log(name)
         
         var image0 =resp.data.photos[0] ;
         var image1 =resp.data.photos[1];
         var image2 =resp.data.photos[2];
         var image3 =resp.data.photos[3];
         var image4 =resp.data.photos[4];
        /*  image2base64(image0) // you can also to use url
         .then(
             (response) => {
                 console.log(response); //cGF0aC90by9maWxlLmpwZw==
             }
         )
         .catch(
             (error) => {
                 console.log(error); //Exepection error....
             }
         ) */
         
          tableimage[0]=image0;
      
         tableimage[1]=image1;
         tableimage[2]=image2;
         tableimage[3]=image3;
         tableimage[4]=image4;
        //console.log(typeof product_id);
        

       

        


         res.render(__dirname + "/public/example.html", {
           name:name,
           image0 :image0,
           image1 :image1,
           image2 :image2,
           image3 :image3,
           image4 :image4,
           product_id :product_id,
          /*  code0 : code0,
           code1 : code1,
           code2 : code2,
           code3 : code3,
           code4 : code4, */
          
        
        });
         
      })


      .then(()=>{

        axios.get('https://carkeysexpress.com/api/v1/products/getSpecs?product_id='+product_id_url,{
          jar: cookieJar, // tough.CookieJar or boolean
          withCredentials: true, // If true, send cookie stored in jar
        })
        .then(resp => {
         var spaces= resp.data.spaces ;
         var depths = resp.data.depths ;
         
         bladewidth= resp.data.blade_width;
          for(let i=0;i<10; i++ ) {
          //tabledepths[i] = resp.data.depths[i] ;
            tablespaces[i] = resp.data.spaces[i];
            resp.data.spaces[i] == undefined ?  tableshidden[i] = hidden : tableshidden[i] = visible ;

          }
         
          for(let j=0;j<depths.length; j++ ) {
            
            tabledepths[j] = resp.data.depths[j] ;
            
            
                      }



        });
    
      })



      }
    
   })
   
   
  
      
   
  });

  
  app.get("/imagekey0", (req, res) => {
    
    
//console.log(tableshidden)
var j =tablespaces.length;
 //var depths0 =tabledepths[0];
  /*  console.log("space0",typeof tablespaces[0])
   console.log("spacesle",typeof  tablespaces[j-1])
   console.log("space0", tablespaces[0])
   console.log("spacesle",  tablespaces[j-1]) */

var dep0 =  parseFloat(tabledepths[0]) *100
var dep1 =parseFloat(tabledepths[1]) *100 ;


   var step =(dep0 - dep1) *10 ;
    
var blade_width =bladewidth ;
//console.log(step)

//var w0 = parseFloat(tablespaces[0]) *100 ;
//var wl = parseFloat(tablespaces[j-1]) *100 ;
//var width = (w0 - wl) * 10 ;
var width = parseFloat(tablespaces[0]) *1000 ;

//console.log(width);
//var next = 'imagekey0'
   res.render(__dirname + "/public/index.html" ,{ 
     
    image: tableimage[0],
    depths0 : tabledepths[0],
    depths1 : tabledepths[1],
    depths2 : tabledepths[2],
    depths3 : tabledepths[3],
    depths4 : tabledepths[4],
    depths5 : tabledepths[5],
    depths6 : tabledepths[6],
    depths7 : tabledepths[7],
    depths8 : tabledepths[8],
    depths9 : tabledepths[9],
    
    spaces0 : tablespaces[0],
    spaces1 : tablespaces[1],
    spaces2 : tablespaces[2],
    spaces3 : tablespaces[3],
    spaces4 : tablespaces[4],
    spaces5 : tablespaces[5],
    spaces6 : tablespaces[6],
    spaces7 : tablespaces[7],
    spaces8 : tablespaces[8],
    spaces9 : tablespaces[9],
    hide0 : tableshidden[0],
    hide1 : tableshidden[1] ,
    hide2 : tableshidden[2],
    hide3 : tableshidden[3],
    hide4: tableshidden[4],
    hide5 :tableshidden[5] ,
    hide6 : tableshidden[6],
    hide7: tableshidden[7],
    hide8 :tableshidden[8],
    hide9 : tableshidden[9],
    width : width ,
    step :step,
    next : 'imagekey1',
    blade_width:blade_width,
    geturl :'geturl(1)'

  });

  });

app.get("/imagekey1", (req, res) => {
  
  var j =tablespaces.length;
  //var depths0 =tabledepths[0];
   /*  console.log("space0",typeof tablespaces[0])
    console.log("spacesle",typeof  tablespaces[j-1])
    console.log("space0", tablespaces[0])
    console.log("spacesle",  tablespaces[j-1]) */
 
 var dep0 =  parseFloat(tabledepths[0]) *100
 var dep1 =parseFloat(tabledepths[1]) *100 ;
 
 
    var step =(dep0 - dep1) *10 ;
    var blade_width =bladewidth ;
 //console.log(step)
 
 //var w0 = parseFloat(tablespaces[0]) *100 ;
 //var wl = parseFloat(tablespaces[j-1]) *100 ;
 //var width = (w0 - wl) * 10 ;
 var width = parseFloat(tablespaces[0]) *1000 ;
 
 //console.log(width);
 res.render(__dirname + "/public/index.html" ,{
   
  image: tableimage[1],
  depths0 : tabledepths[0],
  depths1 : tabledepths[1],
  depths2 : tabledepths[2],
  depths3 : tabledepths[3],
  depths4 : tabledepths[4],
  depths5 : tabledepths[5],
  depths6 : tabledepths[6],
  depths7 : tabledepths[7],
  depths8 : tabledepths[8],
  depths9 : tabledepths[9],
  
  spaces0 : tablespaces[0],
  spaces1 : tablespaces[1],
  spaces2 : tablespaces[2],
  spaces3 : tablespaces[3],
  spaces4 : tablespaces[4],
  spaces5 : tablespaces[5],
  spaces6 : tablespaces[6],
  spaces7 : tablespaces[7],
  spaces8 : tablespaces[8],
  spaces9 : tablespaces[9],
  hide0 : tableshidden[0],
    hide1 : tableshidden[1] ,
    hide2 : tableshidden[2],
    hide3 : tableshidden[3],
    hide4: tableshidden[4],
    hide5 :tableshidden[5] ,
    hide6 : tableshidden[6],
    hide7: tableshidden[7],
    hide8 :tableshidden[8],
    hide9 : tableshidden[9],
    width : width ,
    step :step,
    next: 'imagekey2',
    blade_width :blade_width ,
    geturl :'geturl(2)'


});
});
app.get("/imagekey2", (req, res) => {
  
  var j =tablespaces.length;
 //var depths0 =tabledepths[0];
  /*  console.log("space0",typeof tablespaces[0])
   console.log("spacesle",typeof  tablespaces[j-1])
   console.log("space0", tablespaces[0])
   console.log("spacesle",  tablespaces[j-1]) */

var dep0 =  parseFloat(tabledepths[0]) *100
var dep1 =parseFloat(tabledepths[1]) *100 ;


   var step =(dep0 - dep1) *10 ;

//console.log(step)

//var w0 = parseFloat(tablespaces[0]) *100 ;
//var wl = parseFloat(tablespaces[j-1]) *100 ;
//var width = (w0 - wl) * 10 ;
var width = parseFloat(tablespaces[0]) *1000 ;
var blade_width =bladewidth ;
//console.log(width);
  res.render(__dirname + "/public/index.html" ,{
    
    image: tableimage[2], 
     depths0 : tabledepths[0],
    depths1 : tabledepths[1],
    depths2 : tabledepths[2],
    depths3 : tabledepths[3],
    depths4 : tabledepths[4],
    depths5 : tabledepths[5],
    depths6 : tabledepths[6],
    depths7 : tabledepths[7],
    depths8 : tabledepths[8],
    depths9 : tabledepths[9],
    
    spaces0 : tablespaces[0],
    spaces1 : tablespaces[1],
    spaces2 : tablespaces[2],
    spaces3 : tablespaces[3],
    spaces4 : tablespaces[4],
    spaces5 : tablespaces[5],
    spaces6 : tablespaces[6],
    spaces7 : tablespaces[7],
    spaces8 : tablespaces[8],
    spaces9 : tablespaces[9],
    hide0 : tableshidden[0],
    hide1 : tableshidden[1] ,
    hide2 : tableshidden[2],
    hide3 : tableshidden[3],
    hide4: tableshidden[4],
    hide5 :tableshidden[5] ,
    hide6 : tableshidden[6],
    hide7: tableshidden[7],
    hide8 :tableshidden[8],
    hide9 : tableshidden[9],
    width : width ,
    step :step,
     blade_width :blade_width ,
    next :'imagekey3',
    geturl:'geturl(3)'
  
  });
 });
 app.get("/imagekey3", (req, res) => {
  var j =tablespaces.length;
  //var depths0 =tabledepths[0];
   /*  console.log("space0",typeof tablespaces[0])
    console.log("spacesle",typeof  tablespaces[j-1])
    console.log("space0", tablespaces[0])
    console.log("spacesle",  tablespaces[j-1]) */
 
 var dep0 =  parseFloat(tabledepths[0]) *100
 var dep1 =parseFloat(tabledepths[1]) *100 ;
 
 
    var step =(dep0 - dep1) *10 ;
 
// console.log(step)
 
 //var w0 = parseFloat(tablespaces[0]) *100 ;
 //var wl = parseFloat(tablespaces[j-1]) *100 ;
 //var width = (w0 - wl) * 10 ;
 var width = parseFloat(tablespaces[0]) *1000 ;
 var blade_width =bladewidth ;
 //console.log(width);
  res.render(__dirname + "/public/index.html" ,{ 
    
    image: tableimage[3],
    depths0 : tabledepths[0],
    depths1 : tabledepths[1],
    depths2 : tabledepths[2],
    depths3 : tabledepths[3],
    depths4 : tabledepths[4],
    depths5 : tabledepths[5],
    depths6 : tabledepths[6],
    depths7 : tabledepths[7],
    depths8 : tabledepths[8],
    depths9 : tabledepths[9],
    
    spaces0 : tablespaces[0],
    spaces1 : tablespaces[1],
    spaces2 : tablespaces[2],
    spaces3 : tablespaces[3],
    spaces4 : tablespaces[4],
    spaces5 : tablespaces[5],
    spaces6 : tablespaces[6],
    spaces7 : tablespaces[7],
    spaces8 : tablespaces[8],
    spaces9 : tablespaces[9],
    hide0 : tableshidden[0],
    hide1 : tableshidden[1] ,
    hide2 : tableshidden[2],
    hide3 : tableshidden[3],
    hide4: tableshidden[4],
    hide5 :tableshidden[5] ,
    hide6 : tableshidden[6],
    hide7: tableshidden[7],
    hide8 :tableshidden[8],
    hide9 : tableshidden[9],
    width : width ,
    step :step ,
    next : 'imagekey4',
     blade_width :blade_width ,
     geturl : 'geturl(4)',
  });
 });
 app.get("/imagekey4", (req, res) => {
  var j =tablespaces.length;
 //var depths0 =tabledepths[0];
  /*  console.log("space0",typeof tablespaces[0])
   console.log("spacesle",typeof  tablespaces[j-1])
   console.log("space0", tablespaces[0])
   console.log("spacesle",  tablespaces[j-1]) */

var dep0 =  parseFloat(tabledepths[0]) *100
var dep1 =parseFloat(tabledepths[1]) *100 ;


   var step =(dep0 - dep1) *10 ;
   var blade_width =bladewidth ;
//console.log(step)

//var w0 = parseFloat(tablespaces[0]) *100 ;
//var wl = parseFloat(tablespaces[j-1]) *100 ;
//var width = (w0 - wl) * 10 ;
var width = parseFloat(tablespaces[0]) *1000 ;

//console.log(width);

  //console.log(tableimage)
  res.render(__dirname + "/public/index.html" ,{ 
    
    image: tableimage[4],
    depths0 : tabledepths[0],
    depths1 : tabledepths[1],
    depths2 : tabledepths[2],
    depths3 : tabledepths[3],
    depths4 : tabledepths[4],
    depths5 : tabledepths[5],
    depths6 : tabledepths[6],
    depths7 : tabledepths[7],
    depths8 : tabledepths[8],
    depths9 : tabledepths[9],
    
    spaces0 : tablespaces[0],
    spaces1 : tablespaces[1],
    spaces2 : tablespaces[2],
    spaces3 : tablespaces[3],
    spaces4 : tablespaces[4],
    spaces5 : tablespaces[5],
    spaces6 : tablespaces[6],
    spaces7 : tablespaces[7],
    spaces8 : tablespaces[8],
    spaces9 : tablespaces[9],
    hide0 : tableshidden[0],
    hide1 : tableshidden[1] ,
    hide2 : tableshidden[2],
    hide3 : tableshidden[3],
    hide4: tableshidden[4],
    hide5 :tableshidden[5] ,
    hide6 : tableshidden[6],
    hide7: tableshidden[7],
    hide8 :tableshidden[8],
    hide9 : tableshidden[9],
    width : width,
    step :step ,
    next : 'api/'+retour,
    blade_width : blade_width,
    geturl :'geturl(5)'
  });
 });

 /* app.post("/transfer/:id",(req, res) => {

  let keyringid = req.params.id;
  var con = mysql.createConnection({
    host: 'localhost',
      user: 'root',
      password: '',
       database: "mydb"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO keyring (id_keyring, code0,code1,code2,code3,code4) VALUES ("+ keyringid+", '555', '555', '555', '555', '005')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }); 


 })
 */

  app.listen(port, () => {
    console.log(`keyapp version1`);

});
