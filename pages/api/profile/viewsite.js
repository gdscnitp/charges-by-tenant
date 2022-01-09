import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants")
import connectMongoDb from "../../../db/connect";
//import { ApiError } from "next/dist/server/api-utils";
var Tenant = require("../../../models/tenant")
var Sites = require("../../../models/sites")
const {isEmail, isDate} = require("validator");
const jwt = require("jsonwebtoken")
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const config = require("../../../config/config")
//const {isEmail} = require("validator");
//var nodemailer = reuire("nodemailer");

export default async function handler(req,res){
    if(req.method === "GET"){
        const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
        if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        }

        jwt.verify(req.token, config.SECRET_KEY, async function(err,authData){


            if(err)return sendError(res,err,constants.JWT_VERIFY)
            else{
                const CUR = await Sites.find({current_tenant:authData.id})
                const REQ = await Sites.find({requested_tenant:authData.id})
                if(CUR || REQ){
                    return sendSuccess(res,{CUR,REQ})
                }
                else return sendError(res,"No pending or approved request",constants.TENANT_REQUEST_ERR)
                }
        }) 
    }
    else{
        return sendError(res,"Use get method",constants.USE_GET)
    }
}