/**
 * schema -> define the structure 
 * schema -> model
 * using model we perform the CRUD operation 
 *
 */
const express=require('express')
const app=express()
const port=8000;
const mongoose=require('mongoose')
const users=require('./MOCK_DATA.json')
mongoose.connect('mongodb://localhost:27017/youtubeapp1').then(()=>{
    console.log("Connected with mongoDB")
}).catch((Error)=>{
    console.log("Some Problem occured")
})
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String
    }
    ,gender:{
        type: String
    }
})
const User=mongoose.model('user',userSchema);
app.get('/api/users', async (req, res) => {
    try {
        const allUsers = await User.find({});
        
        // Generate table dynamically
        let table = `
            <html>
            <head>
                <title>User List</title>
                <style>
                    table {
                        width: 80%;
                        margin: 20px auto;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h2 style="text-align:center;">User List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        allUsers.forEach(user => {
            table += `
                <tr>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.email}</td>
                    <td>${user.jobTitle || 'N/A'}</td>
                    <td>${user.gender || 'N/A'}</td>
                </tr>
            `;
        });

        table += `
                    </tbody>
                </table>
            </body>
            </html>
        `;

        res.send(table); // Send the generated HTML

    } catch (error) {
        res.status(500).send("Error fetching users");
    }
});
app.get('/api/users:id', async (req, res) => {
    try {
        const allUsers = await User.findById(req.params.id);
        
        // Generate table dynamically
        let table = `
            <html>
            <head>
                <title>User List</title>
                <style>
                    table {
                        width: 80%;
                        margin: 20px auto;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h2 style="text-align:center;">User List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        allUsers.forEach(user => {
            table += `
                <tr>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.email}</td>
                    <td>${user.jobTitle || 'N/A'}</td>
                    <td>${user.gender || 'N/A'}</td>
                </tr>
            `;
        });

        table += `
                    </tbody>
                </table>
            </body>
            </html>
        `;

        res.send(table); // Send the generated HTML

    } catch (error) {
        res.status(500).send("Error fetching users");
    }
});
app.use(express.urlencoded({extended:false}))
app.post('/app/users', async(req,res)=>{
    const body=req.body;
    if(!body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle 
    ){
        return res.status(400).json({msg:"all the fields are required"})
    }
   const result=await User.create({
    firstName:body.firstName,
    lastName:body.lastName,
    jobTitle:body.jobTitle,
    gender:body.gender,
    email:body.email,
   })
   console.log("result", result);
   return res.status(201).json({msg:"success"})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
