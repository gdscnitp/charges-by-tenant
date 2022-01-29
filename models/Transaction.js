const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const tranSchema = new mongoose.Schema({
    charge_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Charge'
    },
    order_date:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,
        default: ""
    },
    landlord_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Landlord'
    },
    tenant_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Tenant'
    }
},{timestamps:true});

module.exports = mongoose.models.Transaction || mongoose.model("Transaction",tranSchema)