const express = require('express');
const app = express();
const port = 8002;
const { connectMongoDb } = require('./connect');
const urlRouter = require('./routes/url');
const URL=require('./models/url')
connectMongoDb('mongodb://localhost:27017')
    .then(() => console.log("✅ Database connected"))
    .catch(err => console.error("❌ Database connection failed", err));

app.use(express.json()); // ✅ Important: Middleware to parse JSON

app.use("/url", urlRouter); // Define routes after middleware
app.get('/:shortID',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
    {
        shortId
    },{$push:{
        visitHistory:{
            timestamp:Date.now(),
        }
    }})
    res.redirect(entry.redirectURL);
})
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
