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
var histId = '61e53b40259ba909fbe0bb14'  //history id   

var histData = await History.findByIdAndUpdate(histId,{$set:{status:"2",left_at:Date.now()}})
if(histData){
var siteData = await Sites.findByIdAndUpdate(histData.site_id,{$set:{status:"0"}}) 
if(siteData){
    return sendSuccess(res,{})
}
else{
    return sendError(res,"no such site",500)
}
}
else{
    return sendError(res,"no such history",500)
}

}

}