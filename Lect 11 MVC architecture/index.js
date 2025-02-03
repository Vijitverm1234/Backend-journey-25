/**
 * schema -> define the structure 
 * schema -> model
 * using model we perform the CRUD operation 
 *
 */
const express=require('express')
const app=express()
const port=8001;
const {connectMongoDb}=require('./connection')
const userRouter=require('./routes/user')
connectMongoDb('mongodb://localhost:27017/youtubeapp1');
app.use("/app",userRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
