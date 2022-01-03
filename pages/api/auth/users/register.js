import connectMongoDb from "../../../../db/connect";
import { sendError } from "../../../../helpers/help";
import { sendSuccess } from "../../../../helpers/help";
var constants = require("../../../../helpers/constants")
const bcrypt = require("bcrypt");
var Tenant = require("../../../../models/tenant")
const {isEmail} = require("validator");
var nodemailer = require("nodemailer");

connectMongoDb()

export default async function handler(req,res){

    var PASSWORD = generatePassword()
    console.log(PASSWORD)
    if(req.method === "POST"){
        const newUser = new Tenant({
            name: req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            username:emailUsername(req.body.email),
            password:PASSWORD,
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

        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(newUser.password,salt,(err,hash) => {
                if(err)return sendError(res,err,constants.SERVER_ERROR)
                newUser.password = hash;
                newUser.save(function(err,data){
                    if(err){
                        return sendError(res,err,constants.SERVER_ERROR)
                    }
                    else{
                        
                        return sendSuccess(res,data)
                    }
                })
            })
        })
    }
}

function generatePassword() {
	//create a function to create a password and send it to the registered mail
    return Math.random().toString(36).slice(-8);
    
}

function emailUsername(EMAIL){
    return EMAIL.match(/^(.+)@/)[1];
}