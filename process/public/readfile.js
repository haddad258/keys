const readline = require('readline');
const fs = require('fs');

// create instance of readline
// each instance is associated with single input stream

function readfile(){
    let rl = readline.createInterface({
        input: fs.createReadStream('Output.txt')
    });
    
    let line_no = 0;
   
    /* var fileUrl = new URL('Output.txt')
    fs.readFileSync(fileUrl); */
    // event is emitted after each line
  /*   fs.readFile("Output.txt", function(err, buf) {
        console.log(buf.toString());
        document.getElementById('espace').innerHTML=buf;
      });

 */



    rl.on('line', function(line) {
    
       // console.log('Line number ' + line_no + ': ' + line);
      //  console.log(typeof line_no)
       document.getElementById(line_no.toString()).innerHTML=line;
       
       
       line_no++;
       
        
    });
    
    // end
    rl.on('close', function(line) {
       // console.log('Total lines : ' + line_no);
    });

}


function deletefile() {
    
    fs.unlink('Output.txt', function (err) {
        if (err) throw err;
      //  console.log('File deleted!');
      }); 
}


function loadfile(){
    let rl = readline.createInterface({
        input: fs.createReadStream('Output.txt')
    });
    
    let line_no = 0;
    var indice0 = new Array();

    rl.on('line', function(line) {
    
         console.log('Line number ' + line_no + ': ' + line[0]);
       //  console.log(typeof line_no)
       // document.getElementById(line_no.toString()).innerHTML=line;
        indice0[line_no]=line[0];
        
         
        line_no++;
        
        
     });



   
     
     // end
     rl.on('close', function(line) {
        // console.log('Total lines : ' + line_no);
     });
    var messag =   document.getElementById('1');
   // console.log("ic" , messag )
}