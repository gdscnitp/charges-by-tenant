const mongoose = require("mongoose");

const chargeSchema = new mongoose.Schema({
    site_id:{
        type:mongoose.Schema.Types.ObjectId,
        requred:true,
        ref:"Site",
    },
    tenant_id:{
        type:mongoose.Schema.Types.ObjectId,
        requred:true,
        ref:"Tenant"
    },
    isPaid:{
        type:Boolean,
        default:false,
        required:true
    },
    description:{
        type:Object,
        required:true
    }

    
    
},{timestamps:true});


module.exports = mongoose.models.Charge ||  mongoose.model("Charge",chargeSchema)