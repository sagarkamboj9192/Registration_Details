const express= require('express');
const router = new express.Router();
const Detail = require('../models/detail');

// router.get("/",(req, res)=>{
//     res.send("HI , THis is working  asf")
// });

// router.post("/Detail",(req, res)=>{
//     console.log(req.body);
//     const user = new Detail(req.body);

//     // yha pe hm promise kr rhe h 
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
//     // res.send("THis is hello from server ");
// })


// Another method which is widely used also for promises purpose -- Async Await
router.post("/data", async (req, res)=>{
    try{
        const user = new Detail(req.body);
        const prom = await user.save();

        res.status(201).send(prom);

    }catch(e){
        res.status(400).send(e); 
    }
})

// to get the all data of Detail collection
router.get("/data", async(req, res)=>{
    try{
        const data = await Detail.find();
        res.send(data);
    }catch(e){
        res.send(e);
    }
})

// IF we want to find the particular Detail data 
// using id
router.get("/data/:id", async(req, res)=>{
    try {
        const getid= req.params.id;
        const studdata=  await Detail.findById(getid);

        if(!studdata){
            res.status(404).send();
        }
        else{
            res.send(studdata);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})


router.get("/data/roll/:roll", async (req, res) => {
    try {
        const getRoll = parseInt(req.params.roll, 10);
        const studdata = await Detail.find({ rollno: getRoll });

        if (!studdata || studdata.length === 0) {
            res.status(404).send();
        } else {
            res.send(studdata);
        }
    } catch (e) {
        console.log("Received roll:", req.params.roll);
        res.status(500).send("Error");
    }
});



router.delete("/data/byid/:id" , async (req, res)=>{
    try {
        const id = req.params.id;
        const data1 = await Detail.findByIdAndDelete(id);

        if(!data1){
            return res.status(400).send();
        } else {
            res.send(data1);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})



module.exports = router;