import connectMongoDb from "../../../../db/connect";
import { sendError } from "../../../../helpers/help";
import { sendSuccess } from "../../../../helpers/help";
var constants = require("../../../../helpers/constants")
var Tenant = require("../../../../models/tenant")
const {isEmail} = require("validator");
const jwt = require("jsonwebtoken")
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const config = require("../../../../config/config");



export default async function handler(req,res) {

if(req.method === "POST"){ 
var email = req.body.email
var password = req.body.password
if(!email || !password){return sendError(res,"email or password is empty",constants.MISSING_FIELD_II)}
if(!isEmail(email)){
    return sendError(res,"Email invalid",constants.INVALID_EMAIL);
}

Tenant.findOne({email}, function(err,data){
    if(err){
        return sendError(res,err,constants.EMAIL_ERROR)
    }
    else if(!data){
        return sendError(res,"Email does not exist",constants.ACCOUNT_NOT_EXIST)
    }

    bcrypt.compare(password,data.password).then(match => {
        if(match){
            const payload = {
                id:data._id
            }

            jwt.sign(payload,config.SECRET_KEY,(err,token) => {
                if(err)return sendError(res,err,constants.JWT_ERROR)
                return sendSuccess(res,{token})
            })
        }
        else{
            return sendError(res,"Incorrect password",constants.INCORRECT_PASSWORD)
        }
    })
})

}
else{
    return sendError(res, "server error", 500)
  }
}