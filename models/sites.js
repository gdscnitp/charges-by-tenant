const mongoose = require("mongoose");
const {isDate} = require("validator")
const sitesSchema = new mongoose.Schema({
    landlord_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },

    alias_name:{
        type:String,
        required:true
    },

    address:[{
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
        Country:{
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

    }],

    rent:{
        required:Number,
        required:[true,'Please enter rent']
    },

    deposit:{
        type:Number,
        required:[true,'Please enter deposit amount']
    },

    isOcuupied:{
        type:Boolean,
    },

    charges_param:[
        {
            electricity:{
                type:Number,
                required:Boolean
            },
            water:{
                type:Number,
                required:Boolean
            },
            food:{
                type:Number,
                required:Boolean
            },
        }
    ],

    type:{
        enum:['Room','Land','Shops'],
        required:String,
        required:true
    },

    alloted_tenant:{
        type:Array
    },

    date:{
        type:Date,
        required:[true,'Please generate date'],
        default:Date.now
    },

    history:{
        type:Array
    },
    current_tenant:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    requested_tenant:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Sites",sitesSchema)