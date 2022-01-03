import connectMongoDb from "../../../../db/connect";
import { sendError } from "../../../../helpers/help";
import { sendSuccess } from "../../../../helpers/help";
var constants = require("../../../../helpers/constants")
var Tenant = require("../../../../models/tenant")
const {isEmail} = require("validator");
const jwt = require("jsonwebtoken")
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

connectMongoDb()

export default async function handler(req,res) {

if(req.method === "POST"){ 
var email = req.body.email
var password = req.body.password
if(!email || !password){return sendError(res,"email or password is empty",constants.SERVER_ERROR)}
if(!isEmail(email)){
    return sendError(res,"Email invalid",constants.INVALID_EMAIL);
}

Tenant.findOne({email}, function(err,data){
    if(err){
        return sendError(res,err,constants.SERVER_ERROR)
    }
    else if(!data){
        return sendError(res,"Email does not exist",constants.SERVER_ERROR)
    }

    bcrypt.compare(password,data.password).then(match => {
        if(match){
            const payload = {
                id:data._id,
                name:data.name
            }

            jwt.sign(payload,"qwert12345",(err,token) => {
                if(err)return sendError(res,err,constants.SERVER_ERROR)
                return sendSuccess(res,{token})
            })
        }
        else{
            return sendError(res,"Incorrect password",constants.SERVER_ERROR)
        }
    })
})

}
}