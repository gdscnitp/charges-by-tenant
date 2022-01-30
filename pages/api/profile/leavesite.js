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


      //Leave the site means change the status of the history and status of the site
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

            if(tenantId == histData.tenant_id){
                if(histData.status === "1"){
                    History.findByIdAndUpdate(histId, {$set: {left_at: Date.now(), status: "2"}}, function(err, histNewData){
                        if(err) return sendError(res, err.message, 500)
                        else{
                            Sites.findByIdAndUpdate(histData.site_id, {$set: {status:"0"}}, function(err, d){
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
                    return sendError(res,"Request For Site Site is not accepetd or you already left",500)
                }
            }
            else{
                return sendError(res,"Unauthorized",500)
            }
        }
    })
  }
  else{
      return sendError(res, "Please select POST method", 500)
  }
}
