import constants from "../../../helpers/constants";
import { sendSuccess, sendError } from "../../../helpers/help";
// var constants = require("../../../helpers/constants");
import connectMongoDb from "../../../db/connect";
// var config = require("../../../config/config")
import {auth} from "../../../utility/auth"
var Site = require("../../../models/Site");
const {isEmail, isMongoId} = require("validator")
// var History = require("../../../models/history");
// var Sites  = require("../../../models/Site")
var Charge = require("../../../models/Charge")
var Tenant  = require("../../../models/tenant")

export default async function handler(req, res){

    if(req.method == "GET"){
        var tenantId
        auth(req, res, (err, authData) => {
            if(err) return sendError(res, err.message, 500)
            tenantId = authData.id
        })


        Charge.find({tenant_id: tenantId}).populate('site_id').exec(function(err,data){
            if(err) return sendError(res, err.message, 500)
            else{ 
                    return sendSuccess(res, data)
            }
        })
          
    }
    else{
        return sendError(res, "ROUTE NOT FOUND", constants.NOT_FOUND)
    }

}