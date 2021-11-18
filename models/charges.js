const mongoose = require("mongoose");

const chargeSchema = new mongoose.Schema({
    site_id:{
        type:String,
        requred:true
    },
    isPaid:{
        type:Boolean,
        required:true
    },
    electricity:{
        type:Number,
        required:true,
    },
    rent:{
        type:Number,
        required:true
    },
    water:{
        type:Number,
        required:true
    },
    internet:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Charges",chargeSchema)