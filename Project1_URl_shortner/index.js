const express = require('express');
const app = express();
const port = 8002;
const path = require('path');
const { connectMongoDb } = require('./connect');
const urlRouter = require('./routes/url');
const userRouter = require('./routes/user');
const URL = require('./models/url');
const cookieParser=require('cookie-parser')

const { restrictToLogin } = require('./middlewares/auth');
// Connect to MongoDB
connectMongoDb('mongodb://localhost:27017/URLAPPLICATION')
    .then(() => console.log("✅ Database connected"))
    .catch(err => console.error("❌ Database connection failed", err));

// Middleware
app.use(express.json());  // Allows Express to parse JSON body
app.use(express.urlencoded({ extended: true })); // Allows form data parsing

// Route Handletrrs
app.use("/url",restrictToLogin, urlRouter);
app.use("/user", userRouter); 
app.use('/',cookieParser)
// Setting up the view engine
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

// URL Shortener Redirection
app.get('/:shortID', async (req, res) => {
    const shortId = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            }
        }
    );
    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("URL not found");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
