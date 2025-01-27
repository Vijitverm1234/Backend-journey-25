// what is URl :uniform resource locator (url)
// https (protocal) :// www.vijit.com (domain name) since we can learn the IP 
// query perameter /about?uerid
const http=require('http')
const fs=require('fs')
const url=require('url')
const myserver=http.createServer((req,res)=>{
    //request the incomming req
    if(req.url==='/favicon.ico'){
        res.end("yo doing well")
    }
const log=`${new Date()}: ${req.url} New Request received \n`
   const myurl=url.parse(req.url,true)
   
   console.log(myurl)
   fs.appendFile('log.txt',log,(err,data)=>{
    res.end("hello server")
   })
 // hence created a log file 
    
}).listen(8000,()=>{
    console.log("server started")
});

