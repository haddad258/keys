

const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
axiosCookieJarSupport(axios);


const cookieJar = new tough.CookieJar();

var params = {email:"johnadmin@none.com",
           password:"password"};

 var urlsend='https://carkeysexpress.com/api/v1/admin/users/authenticate';
module.exports = {
  keyring : (req, res) => {
    axios.post(urlsend,params, {
      jar: cookieJar, // tough.CookieJar or boolean
      withCredentials: true, // If true, send cookie stored in jar
    })
    
    .then(resp => {
     // console.log(resp.data);

      if(resp.data.is_admin ==1) {
        

          let ordersid = req.params.id
        //  console.log(ordersid)
     axios.get('https://carkeysexpress.com/api/v1/admin/keyrings?user_id='+ordersid,{
          jar: cookieJar, // tough.CookieJar or boolean
          withCredentials: true, // If true, send cookie stored in jar
        })
        .then(resp => {
          var nameid = ordersid;
        // console.log(resp.data);
         res.render('keyring.ejs', {
          title: "ALL Keyring of userid "+nameid
          ,orders: resp.data
          ,nameid:nameid

      });
      })


      }
    
   })
   
   
}    
    
};