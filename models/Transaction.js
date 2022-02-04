const mongoose = require("mongoose");
var Charge  = require("/Charge");
import { sendError } from "/helpers/help";
var constants = require("/helpers/constants");
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

tranSchema.pre('save', (next) => {
    var chargeId = this.charge_id;

    Charge.findById(chargeId, function(err, chargeData){
        if(err) return sendError(res, err.message, 500)
        else{
            if(chargeData.isPaid==true){
                return next();
            }
            else{
                return next("Tenant has not completed the transaction.")
            }
        }
    })
})

module.exports = mongoose.models.Transaction || mongoose.model("Transaction",tranSchema)