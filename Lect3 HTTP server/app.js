const http=require('http')
const fs=require('fs')
const myserver=http.createServer((req,res)=>{
    //request the incomming req
const log=`${new Date()}: ${req.url} New Request received \n`
   fs.appendFile('log.txt',log,(err,data)=>{
    res.end("hello server")
   })
 // hence created a log file 
    
}).listen(8000,()=>{
    console.log("server started")
});

