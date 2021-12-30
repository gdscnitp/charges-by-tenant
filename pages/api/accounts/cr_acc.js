import { sendError } from "../../../helpers/help";
import { sendSuccess } from "../../../helpers/help";

export default function handler(req, res) {

    if(req.method==="POST")
    {
      var {name, email} = req.body;
      var data = {}
      name? data.name = name : "";
      email? data.email = email : "";
      return sendSuccess(res,data)
    }
    return sendError(res,"checking error", 500)
  }