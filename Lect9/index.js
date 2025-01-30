/**
 * status code not found 404 
 * 100-199 information responses
 * 200-299 successfull
 * 300-299 redirection 
 * 400-499 client error response
 * 500-599 server error response
 * 
 * 
 * 200 ok response that everything is Ok
 * 201 created 
 * 202 accepted
 * 400 bad request 
 * 401 unauthorised 
 * 402 payment required
 */
const express = require("express");
const app=express();
const port=8001
const fs=require('fs')
/* 
client ->   Middle ware -> server
request goes to middleware first 
*/
app.use((req,res,next)=>{   // syntax for middleware
console.log("hello from middele ware1")
req.a="Vijitverma"
next();
})
app.use((req, res, next) => {
    const logMessage = `${Date.now()} || ${req.method} ${req.url}\n`;
    fs.appendFile("log.txt", logMessage, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });
    next();
});
app.use((req,res,next)=>{   // syntax for middleware
    console.log("hello from middele ware2"+req.a)
    next();
    })
app.get('/user',(req,res)=>{
    console.log("I am in get route "+req.a);
    res.send("new user added");
    return res.status(201)
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
