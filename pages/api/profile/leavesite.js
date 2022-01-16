import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants")
import connectMongoDb from "../../../db/connect";
//import sites from "../../../models/sites";
//import { ApiError } from "next/dist/server/api-utils";
var Tenant = require("../../../models/tenant")
var Sites = require("../../../models/sites")
var History = require("../../../models/history")
const {isEmail, isDate} = require("validator");
const jwt = require("jsonwebtoken")
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const config = require("../../../config/config")

export default async function handler(req,res){

if(req.method === "PUT"){
var id = '61dd55b9536a096f22fa8b23'  //history id   
History.findByIdAndUpdate(id,{status:"2",left_at:Date.now()}).populate('site_id').exec(function(err,d){
    d.site_id.status = "0" //status 0 means this site is empty now as tenant left
    d.status = "2"
    d.left_at = Date.now()
    if(err)return sendError(res,"Error in updating History and Sites Collection (LEAVE SITE)",constants.HISTORY_ERROR_III)
    else{return sendSuccess(res,{d})}

})
//return sendError(res,"finding error",constants.SERVER_ERROR)
}

}