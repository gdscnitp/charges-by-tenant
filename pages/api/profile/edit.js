import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants")
import connectMongoDb from "../../../db/connect";
//import { ApiError } from "next/dist/server/api-utils";
var Tenant = require("../../../models/tenant")
const {isEmail, isDate} = require("validator");
const jwt = require("jsonwebtoken")
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const config = require("../../../config/config")
//const {isEmail} = require("validator");
//var nodemailer = reuire("nodemailer");

export default async function handler(req,res){
    if(req.method === "PUT"){
        if(req.body.password){
        
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password =  await bcrypt.hash(req.body.password,salt);
            }
            catch(err){
            //error beacuse new password was unable to hash
            return sendError(res,err,constants.HASH_PASSWORD)
            }
            
            }
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      jwt.verify(req.token, config.SECRET_KEY, (err,authData) => {
        if(err)return sendError(res,err,constants.JWT_VERIFY)
        else{
          if(!req.body.DOB || !req.body.address || !req.body.verification || !req.body.occupation){
            return sendError(res,"Missing fields",constants.MISSING_FIELD_III)
           }

           if(!isDate(req.body.DOB)){
            return sendError(res,"Email invalid",constants.INVALID_DATE);
          }
            Tenant.findByIdAndUpdate(authData.id,{$set:req.body,},function(err,data){
                if(err)return sendError(res,err,constants.UPDATE_ERROR)
                else if(data)return sendSuccess(res,constants.OK)
            })

            return sendSuccess(res,constants.OK)    
        }
    })
      
    } else {
      // Forbidden
      //currently not possible because we are loged in and token is available to us
      return sendError(res,"token not availanle",constants.NULL_TOKEN)
    }
}
else{
  return sendError(res, "server error", 500)
}
}