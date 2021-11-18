const mongoose = require("mongoose");
const {isDate} = require("validator")
const sitesSchema = new mongoose.Schema({
    landlord_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    tenant_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    address:{
        first_line:String,
        city:String,
        state:String,
        Country:String,
        pincode:Number,
        landmark:String,
        required:true
    },
    price:{
        required:Number,
        required:[true,'Please enter price']
    },
    deposit:{
        type:Number,
        required:[true,'Please enter deposit amount']
    },
    joinedDate:{
        type:Date,
        validate:[isDate,'Please enter a valid Date'],
        required:true
    },
    type:{
        enum:['Room','Land','Shops'],
        required:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Sites",sitesSchema)