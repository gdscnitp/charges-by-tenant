import connectMongoDb from "../../../db/connect";
import { sendError } from "../../../helpers/help";
import { sendSuccess } from "../../../helpers/help";
var Tenant = require("../../../models/tenant")

connectMongoDb()

export default async function handler(req, res) {

    if(req.method==="POST")
    {
      var {name, email, contact} = req.body;
      var password = "123456789"
      var tenant = new Tenant({
        name, email, password, contact, username: email
      })
      console.log(tenant)
      await tenant.save();
      return sendSuccess(res,tenant)
    }
    return sendError(res,"checking error", 500)
  }