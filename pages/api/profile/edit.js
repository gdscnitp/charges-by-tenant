import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants")
import connectMongoDb from "../../../db/connect";
var Tenant = require("../../../models/tenant")
const {isEmail} = require("validator");
const jwt = require("jsonwebtoken")
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
//const {isEmail} = require("validator");
//var nodemailer = reuire("nodemailer");

connectMongoDb()

export default async function handler(req,res){
    if(req.method === "PUT"){
        if(req.body.password){
        
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password =  await bcrypt.hash(req.body.password,salt);
            }
            catch(err){
            //error beacuse new password was unable to has
            return sendError(res,err,constants.SERVER_ERROR)
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
      jwt.verify(req.token, "qwert12345", (err,authData) => {
        if(err)return sendError(res,"verifying error",constants.SERVER_ERROR)
        else{
            
            Tenant.findByIdAndUpdate(authData.id,{$set:req.body,},function(err,data){
                if(err)return sendError(res,err,constants.SERVER_ERROR)
                else if(data)return sendSuccess(res,constants.OK)
            })

            return sendSuccess(res,constants.OK)    
        }
    })
      
    } else {
      // Forbidden
      //currently not possible because we are loged in and token is available to us
      res.sendStatus(403);
    }
}
}