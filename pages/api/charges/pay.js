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
        
        var chargeId = req.body.chargeId
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

        Charge.findById(chargeId).populate("site_id").exec(function(err, Data){
            
            if(err) return sendError(res, err.message, 500)
            else if(Data === null){return sendError(res, "No such ChargeId exist", 500)}
            else{
                landlordId = Data.site_id.landlord_id
            }
        })

        var newTrans = new Transaction({
            charges_id: chargeId,
            tenant_id: tenantId,
            landlord_id: landlordId
        })

        newTrans.save(function(err, TransData){
            if(err) return sendError(res, err.message, 500)
            else{
                Charge.findByIdAndUpdate(chargeId, {$set: {isPaid: true}}, function(err, data){
                    if(err){
                        return sendError(res, err.message, 500)
                    }
                    else{
                        return sendSuccess(res, data)
                    }
                })
            }
        })


    }
    else{
        return sendError(res, "Please use POST method", 500)
    }
}