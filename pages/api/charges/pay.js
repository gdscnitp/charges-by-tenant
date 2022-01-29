import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants");
import connectMongoDb from "../../../db/connect";
var config = require("../../../config/config")
import {auth} from "../../../utility/auth"
var Site = require("../../../models/Site");
const {isEmail, isMongoId} = require("validator")
var History = require("../../../models/history");
var Sites  = require("../../../models/Site")
var Charge = require("../../../models/Charge")
var Transaction = require("../../../models/Transaction")

export default async function handler(req, res) {
    if(req.method === "POST"){
        
        var chargeId = req.body.chargeId;
        var landlordId;
        var tenantId;

        if(!chargeId){
            return sendError(res, "chargeId not provided", 500)
        }

        if(!isMongoId(chargeId)){
            return sendError(res, "invalid chargeId", 500)
        }

        auth(req, res, (err, authData) => {
            if(err) return sendError(res, err.message, 500)
            tenantId = authData.id
        })

        // Charge.findById(chargeId).populate("site_id").exec(function(err, Data){
            
        //     if(err) return sendError(res, err.message, 500)
        //     else if(Data === null){return sendError(res, "No such ChargeId exist", 500)}
        //     else{
        //         landlordId = Data.site_id.landlord_id.toString()
        //         console.log(Data.site_id.landlord_id.toString())
                
        //     }
        // })
        
        var Data = await Charge.findById(chargeId).populate("site_id")
        if(Data==null){
            return sendError(res, "No such chargeID exist")
        }
        else if(Data){
            landlordId = Data.site_id.landlord_id
        }
        else{
            return sendError(res, "error occur  while finding charges data", 500)
        }

        
        var newTrans = new Transaction({
            charge_id: chargeId,
            tenant_id: tenantId,
            landlord_id: landlordId
        })
        
        // console.log(newTrans)

        //before saving the new transaction we have to verify that the tenant sending request to pay 
        //is registered against that site or not

        if(Data.tenant_id != tenantId) return sendError(res, "UnAuth Access", constants.FORBIDDEN)
        else{
            if(Data.isPaid) return sendError(res, "Already Paid", constants.CAHRGES_SCHEMA_ERROR);
            else{
                newTrans.save(function(err, TransData){
            
                    if(err) return sendError(res, err.message, 500)
                    else{
                        Charge.findByIdAndUpdate(chargeId, {$set: {isPaid: true}}, function(err, Data){
                            if(err){
                                return sendError(res, err.message, 500)
                            }
                            else{
                                Transaction.findById(TransData._id).populate('charge_id').exec(function(err,data){
                                    if(err)return sendError(res, err.message, 500)
                                    else{
                                        return sendSuccess(res,data)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    }
    else{
        return sendError(res, "ROUTE NOT FOUND", constants.NOT_FOUND)
    }
    
}