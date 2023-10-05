const mongoose= require('mongoose');
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        minlength:3
    },
    rollno:{
        type:Number,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:true,
        unique:[true, "Email-id is also present"],
        validate(value)
        {
            if(!validator.isEmail(value)){
                alert("Invalid Email, Try Again!");
            }
        }
    },
    phone:{
        type:Number, 
        required:true,
        unique:true,
        minlength:10, 
        maxlength:10
    },
    address:{ 
        type:String,
        required:true
    },
});


// Creating a new collection
const Detail = new mongoose.model('Detail', studentSchema);

module.exports = Detail;