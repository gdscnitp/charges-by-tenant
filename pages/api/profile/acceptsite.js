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
    var accept = true;
    accept = req.body.accept; //by default setting the route to accept this

    if(req.method === "PUT"){
        var histId = req.body.histId  //history id
        //var siteId=req.body.siteId;

        History.findById(histId, function(err, histData){
            if(err) return sendError(res, err.message, 500)
            else{
                const bearerHeader = req.headers['authorization'];
                if(typeof bearerHeader !== 'undefined') {
                const bearer = bearerHeader.split(' ');
                const bearerToken = bearer[1];
                req.token = bearerToken;
                
                jwt.verify(req.token, config.SECRET_KEY, (err, authData) => {
                    if(err)
                    return sendError(res,err,constants.JWT_VERIFY)
                    else{
                        if(histData.tenant_id == tenant._id){
                            if(histData.status==="0"){
                                var histData = await History.findByIdAndUpdate(histId,{$set:{status:"1",joined_at:Date.now()}})
                                if(histData){
                                    var siteData = await Sites.findByIdAndUpdate(histData.site_id,{$set:{status:"2",tenant:histData.tenant_id}}) 
                                    if(siteData){
                                        return sendSuccess(res,{})
                                    }else{
                                        return sendError(res,"No such site",500)
                                    }
                                }else{
                                    return sendError(res,"No such history",500)
                                }
                               
                            }else{
                                return sendError(res,err.message,500)
                            }
                        }
                        else{
                            return sendError(res, "Unauthorized Access", 500)
                        }
                    }
                })
                
                } else {
                // Forbidden
                return sendError(res,"Token not provided", constants.NULL_TOKEN)
                }

            
            }
        })
    } 
    else{
        return sendError(res, err.message, 500)
    }
}
