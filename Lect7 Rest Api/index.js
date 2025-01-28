const express = require("express");
const bodyParser = require("body-parser");
const port = 8001;
const app = express();
const users = require('./MOCK_DATA.json'); 
const fs=require('fs');
const { error } = require("console");
app.use(express.urlencoded({extended:false}));//middleware
// Middleware to parse JSON body
app.use(bodyParser.json());

/**
 * Routes:
 * GET /api/users - Get all users
 * GET /api/users/:id - Get a user by ID
 * POST /api/users - Add a new user
 * PATCH /api/users/:id - Update an existing user
 * DELETE /api/users/:id - Delete a user
 */

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
});

// Add a new user

app.post('/api/users',(req,res)=>{
    const body=req.body;
   console.log(body)

   users.push({...body,id:users.length+1});
   fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,res)=>{
    return  res.json({status:"Succes",id : users.length+1})
   })
   return  res.json({status:"pending"});
})
app.patch('/api/users/:id',(req,res)=>{
    return  res.json({status:"pending"});
 })
 app.delete('/api/users/:id',(req,res)=>{
    return  res.json({status:"pending"});
 })
// Render HTML list of users
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>    
    `;
    res.send(html);
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
