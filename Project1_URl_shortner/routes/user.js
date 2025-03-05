const express = require('express');
const router = express.Router();
const { handleCreateUserSignup, handleCreateUserSignin } = require('../controller/user');
const multer = require('multer');
const path = require('path');

// Storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Keeps original file extension
    }
});

const upload = multer({ storage: storage });

router.get('/signup', (req, res) => {
    return res.render("signup");
});

router.get('/signin', (req, res) => {
    return res.render("login");
});

// Signup & Signin routes
router.post('/signup', handleCreateUserSignup);
router.post('/signin', handleCreateUserSignin);

// File upload route
router.post('/upload', upload.single('profileImage'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    return res.json({ 
        message: "File uploaded successfully", 
        filePath: `/uploads/${req.file.filename}`,
        originalName: req.file.originalname
    });
});

module.exports = router;
