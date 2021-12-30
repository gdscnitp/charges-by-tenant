import { sendSuccess } from "../../../helpers/help";
var constants = require("../../../helpers/constants")
import connectMongoDb from "../../../db/connect";
var Tenant = require("../../../models/tenant")
//const {isEmail} = require("validator");
//var nodemailer = reuire("nodemailer");

connectMongoDb()

export default async function handler(req,res){

    //creating profile
    if(req.method === POST){
        const newData = new Tenant({
            DOB:req.body.DOB,
            occupation:req.body.occupation,
            address:{
                first_line:req.body.first_line,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                pincode:req.body.pincode,
                
            },
            verification:req.body.verification
        })

        try{
        const data = await newData.save();
        return sendSuccess(res.constants.OK);
        }
        catch(err){
            return sendError(res,err,constants.SERVER_ERROR)
        }

    }


    if(req.method === PUT){
        
        if(req.body.userId === req.params.id){
            try{
                const data = await Tenant.findByIdAndUpdate(req.params.id,{$set:req.body})
                return sendSuccess(res,constants.OK)
            }
            catch(err){
                return sendError(res,err,constants.SERVER_ERROR)
            }
        }

    }

    
}