/*

fast framework


verson ^ 4.18.3 

1st major release / breaking  (madatory to update ) 
2nd recommended or security fix
3rd minor fixes (optional update)
^ capmatible with version ie update all recoomended and minor updates
~ will change the minor updates
*/


const http=require('http')

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    return res.send("helllo from the other side"+req.query.name+".")
})
app.get('/about',(req,res)=>{
    return res.send("helllo from the other side")
})
app.get('/event',(req,res)=>{
    return res.send("helllo from the front side")
})
const myserver=http.createServer(app)
myserver.listen(8001,()=>{
    console.log("server running")
});