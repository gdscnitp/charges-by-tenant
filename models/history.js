const mongoose = require("mongoose");

const {isEmail,isDate} = require("validator");

const historySchema = new mongoose.Schema({
    tenant_id:{
        type:mongoose.Schema.Types.ObjectId,
        requred:true
    },
    site_id:{
        type:mongoose.Schema.Types.ObjectId,
        requred:true
    },
    requested_at:{
        type:Date,
    },
    joined_at:{
        type:Date,
    },
    leave_at:{
        type:Date,
    }

},{timestamps:true})

historySchema.pre("save",(next) => {

if(this.requested('requested_at')){
   this.requested_at = Date.now;
   next(); 
}

else if(this.joined('joined_at')){
    this.joined_at = Date.now;
    next(); 
}

else if(this.left('leave_at')){
    this.leave_at = Date.now;
    next(); 
}

else{
    return next();
}

})

module.exports = mongoose.model("History",historySchema);