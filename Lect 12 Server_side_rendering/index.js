// const express=require('express');
// const app=express()
// const users=require('./users.json')
// app.get('/users',(req,res)=>{
    
        
//     // Generate table dynamically
//     let table = `
//         <html>
//         <head>
//             <title>User List</title>
//             <style>
//                 table {
//                     width: 80%;
//                     margin: 20px auto;
//                     border-collapse: collapse;
//                 }
//                 th, td {
//                     border: 1px solid black;
//                     padding: 10px;
//                     text-align: left;
//                 }
//                 th {
//                     background-color: #f2f2f2;
//                 }
//             </style>
//         </head>
//         <body>
//             <h2 style="text-align:center;">User List</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
                       
//                     </tr>
//                 </thead>
//                 <tbody>
//     `;

//     users.forEach(user => {
//         table += `
//             <tr>
//                 <td>${user.first_name}</td>
//                 <td>${user.last_name}</td>
                
//             </tr>
//         `;
//     });

//     table += `
//                 </tbody>
//             </table>
//         </body>
//         </html>
//     `;
//     res.send(table)
// })
// app.listen(8000,()=>{
//     console.log("server is created and running");
// })
const express = require("express");
const path=require('path')
const app = express();
const PORT = 3000;
const students = [
  {
    name: "Aman Shrey",
    email: "aman@gmail.com",
    enrolledCourse: "Python",
  },
  {
    name: "Shreya Gupta",
    email: "shreya@example.com",
    enrolledCourse: "Web Development",
  },
  {
    name: "Rahul Mishra",
    email: "rahul@example.com",
    enrolledCourse: "DSA in Java",
  },
];

// Configure Express to use EJS
app.set("view engine", "ejs");
app.set('views',path.resolve("./views"))
app.get("/api", (req, res) => {
  return res.render('home')
});

app.listen(PORT, (req, res) => {
  console.log("App Started on App:" + PORT);
});