const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {isEmail,isDate} = require("validator")
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
        min:2,
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
        required:true,
        validate:[isDate,'Please enter a valid date']
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
    occupation:{
        type:String,
        required:[true,'Please enter your occupation']
    },
    verification:{
        type:String,
        enum:['Aadhar','VoterID','PanCard'],
        required:[true,'Please enter your verification id']
    },
    customerId:{
        electricity:String,
        internet:String,
        water:String,
        required:true
    }
},{timestamps:true});

//when tenant updates password
tenantSchema.pre('save',(next)=>{

    if(!this.isModified('password')){
        return next();
    }
    const user = this;
    bcrypt.genSalt(10, function(err, salt){
        if (err){ return next(err) }

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){return next(err)}

            user.password = hash;
            next();
        })
    })

});

module.exports = mongoose.model("Tenant",tenantSchema);