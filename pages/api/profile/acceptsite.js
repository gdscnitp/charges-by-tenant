import { sendSuccess, sendError } from "../../../helpers/help";
var constants = require("../../../helpers/constants");
import connectMongoDb from "../../../db/connect";
var Site = require("../../../models/Site");
var History = require("../../../models/history");

export default async function handler(req, res) {
  if (req.method === "PUT") {
    var histId = "61e53b40259ba909fbe0bb14"; //history id

    var histData = await History.findByIdAndUpdate(histId, {
      $set: { status: "1", joined_at: Date.now() },
    });
    if (histData) {
      var siteData = await Site.findByIdAndUpdate(histData.site_id, {
        $set: { status: "2", tenant: histData.tenant_id },
      });
      if (siteData) {
        return sendSuccess(res, {});
      } else {
        return sendError(res, "no such site", 500);
      }
    } else {
      return sendError(res, "no such history", 500);
    }

    //return sendError(res,"finding error",constants.SERVER_ERROR)
  }
}
