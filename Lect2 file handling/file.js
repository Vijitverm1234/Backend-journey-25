const fs=require('fs');
//synchronous call and specified the path 
// fs.writeFile('./test1.txt',"hey there s",(err)=>console.log(err))
const data=fs.readFileSync('./test.txt','utf-8');
fs.appendFileSync('./test.txt'," " + new Date().getDay().toLocaleString())
console.log(data)
const os=require('os')
console.log(os.cpus().length)
// delete the file using unlink function 

// so we can use the os module for knowing about the cpu etc