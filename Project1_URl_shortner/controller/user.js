const User = require('../models/user');

async function handleCreateUserSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new user
        const newUser = await User.create({ name, email, password });

        // Render the home page after successful signup
        return res.render("home", { user: newUser });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ message: "Signup failed", error: error.message });
    }
}




async function handleCreateUserSignin(req, res) {
    try {
        const {  email, password } = req.body;
        const user=await User.findOne({email,password});
        // Check if all fields are provided
        if (!user) {
            return res.status(400).json({ message: "Invalid user name or password" });
        }

        // Create a new user
        

        // Render the home page after successful signup
        return res.json({msg : user.name});

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ message: "Signup failed", error: error.message });
    }
}
module.exports = {
    handleCreateUserSignup,
    handleCreateUserSignin
};
