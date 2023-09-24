import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true
    },
    file : {
        type: String,
        required : true
    }
})

export default  mongoose.model('User' , userSchema)