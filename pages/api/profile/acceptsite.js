import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants");
import connectMongoDb from "../../../db/connect";
var config = require("../../../config/config")
import {auth} from "../../../utility/auth"
var Site = require("../../../models/Site");
const {isEmail, isMongoId} = require("validator")
var History = require("../../../models/history");
var Sites  = require("../../../models/Site")

export default async function handler(req, res) {
  if (req.method === "POST") {
    var histId = req.body.histId; //history id

    if(!histId){
        return sendError(res,"histId not provided")
    }

    if(!isMongoId(histId)){
        return sendError(res,"invalid histId",500)
    }

    History.findById(histId, function(err,histData){
        console.log(histData)
        if(err) return sendError(res,err.message,500)
        else if(histData === null)return sendError(res,"the history you are looking for dosen't exist",500)
        else{
            var tenantId;
            auth(req,res,(err,Data) => {
                if(err) return sendError(res,err.message,500)
                tenantId = Data.id
            })

            if(tenantId === histData.tenant_id){
                if(histData.status === "0"){
                    History.findByIdAndUpdate(histId, {$set: {joined_at: Date.now(), status: "1"}}, function(err, histNewData){
                        if(err) return sendError(res, err.message, 500)
                        else{
                            Sites.findByIdAndUpdate(histData.site_id, {$set: {status:"2"}}, function(err, d){
                                if(err) return sendError(res, err.message, 500)
                                else{
                                    History.findById(histId, function(err, data ){
                                        if(err) return sendError(res, err.message, 500)
                                        else{
                                            return sendSuccess(res, data)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
                else{
                    return sendError(res,"can't send as status is not 0 for this history",500)
                }
            }
            else{
                return sendError(res,"Unauthorized",500)
            }
        }
    })
  }
}
