const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/record", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("NO connection is made" , e , " sagar");
})   