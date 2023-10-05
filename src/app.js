const express = require('express');
const app = express();
app.use(express.json());
require('./database/dbconn');
// const Student = require('./models/student');
const port = process.env.port ||  8002;

const cors = require('cors');
app.use(cors());

// // app.get("/",(req, res)=>{
// //     res.send("HI , THis is working  asf")
// // });

// // app.post("/student",(req, res)=>{
// //     console.log(req.body);
// //     const user = new Student(req.body);

// //     // yha pe hm promise kr rhe h 
// //     user.save().then(()=>{
// //         res.status(201).send(user);
// //     }).catch((e)=>{
// //         res.status(400).send(e);
// //     })
// //     // res.send("THis is hello from server ");
// // })


// // Another method which is widely used also for promises purpose -- Async Await
// app.post("/student", async (req, res)=>{
//     try{
//         const user = new Student(req.body);
//         const prom = await user.save();

//         res.status(201).send(prom);

//     }catch(e){
//         res.status(400).send(e); 
//     }
// })

// // to get the all data of student collection
// app.get("/data", async(req, res)=>{
//     try{
//         const data = await Student.find();
//         res.send(data);
//     }catch(e){
//         res.send(e);
//     }
// })

// // IF we want to find the particular student data 
// // using id
// // app.get("/data/:id", async(req, res)=>{
// //     try {
// //         const getid= req.params.id;
// //         const studdata=  await Student.findById(getid);

// //         if(!studdata){
// //             res.status(404).send();
// //         }
// //         else{
// //             res.send(studdata);
// //         }
// //     } catch (e) {
// //         res.status(500).send(e);
// //     }
// // })


// // using name
// app.get("/data/:name", async(req, res)=>{
//     // console.log(req.params.name);
//     // res.send(req.params.name);
//     try {

//         const getname= req.params.name;
//         const studdata=  await Student.find({name:getname});

//         if(!studdata){
//             res.status(404).send();
//         }
//         else{
//             res.send(studdata);
//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })


// ye sb app. method ko ek alag file me rkhlenge
const studroute = require('./routes/studentroute');
app.use(studroute);



const path = require('path');
// console.log(path.join(__dirname,"../public/"));
// const static_path = path.join(__dirname,"../public");

// app.use(express.static(static_path));

// app.get("/",(req,res)=>{
//     res.send("This is login page");
// })



app.listen(port, ()=>{
    console.log(`Your port number is ${port} `);
});