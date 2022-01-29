const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail, isDate, isPostalCode } = require("validator");

const landlordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
      min: 3,
      max: 25,
    },
    username: {
      type: String,

      min: 3,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter a email"],
      unique: true,
      validate: [isEmail, "Please Enter a valid email"],
    },
    contact: {
      type: Number,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: 5,
    },
    DOB: {
      type: Date,

      validate: [isDate, "Please enter a valid date"],
    },
    address: {
      first_line: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      Country: {
        type: String,
      },
      pincode: {
        type: String,
      },
      landmark: {
        type: String,
        //not setting required as true, keeping it optional
      },
    },
    occupation: {
      type: String,
    },
    verification: {
      type: String,
      enum: ["Aadhar", "VoterID", "PanCard"],
    },
    account: {
      acc_num: {
        type: String,
      },
      ifsc: {
        type: String,
      },
    },
    site_list: {
      type: Array,
    },
  },
  { timestamps: true }
);

//when landlord updates password
// landlordSchema.pre('save',(next)=>{

//     if(!this.isModified('password')){
//         return next();
//     }
//     const user = this;
//     bcrypt.genSalt(10, function(err, salt){
//         if (err){ return next(err) }

//         bcrypt.hash(user.password, salt, null, function(err, hash){
//             if(err){return next(err)}

//             else if(user.password == hash){
//                 return next("new password cannot be same as previous password")
//             }

//             user.password = hash;
//             next();
//         })
//     })

// });

module.exports =
  mongoose.models.Landlord || mongoose.model("Landlord", landlordSchema);