/*
1. http get : when you get the data 
eg searching on youtube
2. http get : when you want to send and mutate some data in server 
eg social media (form or data submission)
3. put : uploading file 
4. patch : changing already entered data 
5. delete : deleting the message 

*/
const http=require('http')
const fs=require('fs')
const url=require('url')
const myserver=http.createServer((req,res)=>{
    //request the incomming req
    if(req.url==='/favicon.ico'){
        res.end("yo doing well")
    }
const log=`${new Date()}: ${req.url} : ${req.method} New Request received \n`
   const myurl=url.parse(req.url,true)
   
   console.log(myurl)
   fs.appendFile('log.txt',log,(err,data)=>{
    res.end("hello server")
   })
 // hence created a log file 
    
}).listen(8000,()=>{
    console.log("server started")
});

