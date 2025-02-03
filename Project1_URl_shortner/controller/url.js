const shortid = require('shortid');  // Correct import
const URL = require('../models/url'); // Ensure model name is correct

async function handleGenerateShortURl(req, res) {
    try {
        const shortId = shortid.generate(); // Generate short ID correctly
        const body = req.body;

        if (!body.url) {
            return res.status(400).json({ msg: "URL is required" });
        }

        await URL.create({
            shortid: shortId,
            redirectURL: body.url,
            visitedHistory: []
        });

        return res.json({ id: shortId });

    } catch (error) {
        console.error("Error creating short URL:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = {
    handleGenerateShortURl
};
