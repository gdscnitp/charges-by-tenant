import connectMongoDb from "../../../../db/connect";
import { sendError } from "../../../../helpers/help";
import { sendSuccess } from "../../../../helpers/help";
var constants = require("../../../../helpers/constants")
var Tenant = require("../../../../models/tenant")
const {isEmail} = require("validator");
var nodemailer = require("nodemailer");

connectMongoDb()

export default async function handler(req,res){

    if(req.method === "POST"){
        const newUser = new Tenant({
            name: req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            username:emailUsername(req.body.email),
            password:"adadad"
        })

        var {email} = newUser;

        if(!isEmail(email)){
            return sendError(res,"Email invalid",constants.INVALID_EMAIL);
        }

        Tenant.findOne({email}, function(err,data){
            if(err){
                return sendError(res,"Error",constants.SERVER_ERROR)
            }
            else if(data){
                return sendError(res,"Account already exist",constants.BAD_REQUEST)
            }

        });

        newUser.save(function(err,data){
            if(err){
                return sendError(res,err,constants.SERVER_ERROR)
            }
            else{
                return sendSuccess(res,data)
            }

        })





    }
}

function generatePassword(account_id, email, name, cb) {
	//create a function to create a password and send it to the registered mail
    var randomPass = Math.random().toString(36).slice(-8);
    
}

function emailUsername(EMAIL){
    return EMAIL.match(/^(.+)@/)[1];
}