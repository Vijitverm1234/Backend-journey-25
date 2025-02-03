const mongoose = require('mongoose');

async function connectMongoDb(url) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB successfully!");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1); // Stop the server if the connection fails
    }
}

module.exports = { connectMongoDb };
