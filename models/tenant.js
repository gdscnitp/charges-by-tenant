const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {isEmail,isDate} = require("validator");
const { default: isPostalCode } = require("validator/lib/isPostalCode");
const tenantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a name'],
        min:3,
        max:25
    },
    username:{
        type:String,
        required:[true,'Please enter a username'],
        min:3,
        max:25,
        unique:true
    },
    email:{
        type:String,
        required:[true,'Please enter a email'],
        unique:true,
        validate:[isEmail,'Please Enter a valid email']
    },
    contact:{
        type:Number,
        required:[true,'Please enter your contact number']
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
        min:5
    },
    DOB:{
        type:Date,
        // required:true,
        validate:[isDate,'Please enter a valid date']
    },
    address:[{
            first_line:{
                type:String,
                //required:[true,'Please enter your address'],
                
            },
            city:{
                type:String,
                //required:[true,'Please enter your city']
            },
            state:{
                type:String,
                //required:[true,'Please enter your state']
            },
            country:{
                type:String,
                //required:[true,'Please enter your country']
            },
            pincode:{
                type:Number,
                //required:[true,'Please enter your pincode'],
                validate:[isPostalCode,'Please enter proper pin code']
            },
            landmark:{
                type:String,
                //not setting required as true, keeping it optional
            }

        }],

    occupation:{
        type:String,
        //required:[true,'Please enter your occupation']
    },
    verification:{
        type:String,
        enum:['Aadhar','VoterID','PanCard'],
        //required:[true,'Please enter your verification id']
    },
    
    history:{
        type:Array,
    }

},{timestamps:true});

//when tenant updates password
/*
tenantSchema.pre('save',(next)=>{

    var user = this;
    console.log(user)
    
    bcrypt.genSalt(10, function(err, salt){
        if (err){ return next(err) }

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){return next(err)}

            else if(user.password == hash){
                return next("new password cannot be same as current password")
            }

            user.password = hash;
            next();
        })
    })

});
*/

module.exports = mongoose.models.Tenant || mongoose.model("Tenant",tenantSchema);