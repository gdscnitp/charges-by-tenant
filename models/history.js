var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const {isEmail,isDate} = require("validator");

const historySchema = new mongoose.Schema({
    tenant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tenant",
        required:true
    },
    site_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Site",
        required:true
    },
    status:{
        type:String,
        default:"0"
        // 0 means requested, 1 means joined and 2 means lefted    
    },
    requested_at:{
        type:Date
        
    },
    joined_at:{
        type:Date,
        
    },
    rejected_at: {
        type: Date,
    },
    left_at:{
        type:Date,
        
    }

},{timestamps:true})

module.exports = mongoose.models.History || mongoose.model("History",historySchema)
/*historySchema.pre("save",(next) => {

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
*/
