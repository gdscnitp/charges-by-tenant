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
historySchema.pre("save",(next) => {

    var tenantId = this.tenant_id;
    var siteId = this.site_id;

    if(tenantId && siteId){
        if(this.status<2){
            return Promise.reject('New document cannot be created');
        }
            else{
                return next();
        }
    }

})

