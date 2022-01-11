const mongoose = require("mongoose");
const {isDate,isPostalCode} = require("validator")
const sitesSchema = new mongoose.Schema({
    landlord_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },

    alias_name:{
        type:String,
        required:true
    },

    address:{
        first_line:{
            type:String,
            required:[true,'Please enter your address'],
            
        },
        city:{
            type:String,
            required:[true,'Please enter your city']
        },
        state:{
            type:String,
            required:[true,'Please enter your state']
        },
        country:{
            type:String,
            required:[true,'Please enter your country']
        },
        pincode:{
            type:Number,
            required:[true,'Please enter your pincode'],
            validate:[isPostalCode,'Please enter proper pin code']
        },
        landmark:{
            type:String,
            //not setting required as true, keeping it optional
        }

    },

    rent:{
        type:Number,
        required:[true,'Please enter rent']
    },

    deposit:{
        type:Number,
        required:[true,'Please enter deposit amount']
    },

    status:{
        type:String,
        default:"0"
    },

    charges_param:
        {
            electricity:{
                type:Number,
                
            },
            water:{
                type:Number,
                
            }
            
        }
    ,

    Type:{
        enum:['Room','Land','Shops'],
        type:String,
        required:true
    },

    alloted_tenant:{
        type:Array
    },

    history:{
        type:Array
    },
    tenant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tenant",
    }
    

},{timestamps:true});

module.exports = mongoose.model("Sites",sitesSchema)