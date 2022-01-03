import connectMongoDb from "../../../../db/connect";
import { sendError } from "../../../../helpers/help";
import { sendSuccess } from "../../../../helpers/help";
var constants = require("../../../../helpers/constants")
var Tenant = require("../../../../models/tenant")
const {isEmail} = require("validator");
const jwt = require("jsonwebtoken")
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");


export default async function handler(req,res,next){
    if(req.method === "POST"){
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
        if(err)return sendError(res,err,constants.SERVER_ERROR)
        else{
            res.json({
                message:'SUCCESS',
                authData
            });
        }
    })
      
    } else {
      // Forbidden
      res.sendStatus(403);
    }
}
}




