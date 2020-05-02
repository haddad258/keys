

const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
axiosCookieJarSupport(axios);


const cookieJar = new tough.CookieJar();

var params = {email:"johnadmin@none.com",
           password:"password"};

 var urlsend='https://carkeysexpress.com/api/v1/admin/users/authenticate';
module.exports = {
  allorders : (req, res) => {
    axios.post(urlsend,params, {
      jar: cookieJar, // tough.CookieJar or boolean
      withCredentials: true, // If true, send cookie stored in jar
    })
    .then(resp => {
      //console.log(resp.data);

      if(resp.data.is_admin ==1) {
        

     axios.get('https://carkeysexpress.com/api/v1/admin/keyrings',{
          jar: cookieJar, // tough.CookieJar or boolean
          withCredentials: true, // If true, send cookie stored in jar
        })
        .then(resp => {
          var nameid = 'all keyrings';
        // console.log(resp.data);
         res.render('allorders.ejs', {
          title: "ALL Keyring of userid "+nameid
          ,orders: resp.data
          ,nameid:nameid

      });
      })


      }
    
   })
   
   
}    
    
};