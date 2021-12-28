const mongoose = require("mongoose");

const chargeSchema = new mongoose.Schema({
    site_id:{
        type:mongoose.Schema.Types.ObjectId,
        requred:true
    },
    tenant_id:{
        type:mongoose.Schema.Types.ObjectId,
        requred:true
    },
    isPaid:{
        type:Boolean,
        required:true
    },
    description:[{
        electricity:{
            type:Number,
            
        },
        rent:{
            type:Number,
            
        },
        water:{
            type:Number,
            
        },
        food:{
            type:Number,
            
        },
        internet:{
            type:Number,
            
        },
    }],

    
    
},{timestamps:true});

module.exports = mongoose.model("Charges",chargeSchema)