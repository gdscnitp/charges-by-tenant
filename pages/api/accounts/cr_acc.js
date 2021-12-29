import { sendError } from "next/dist/server/api-utils";
import { sendSuccess } from "../../../helpers/help";

export default function handler(req, res) {

    return sendError(res,"checking error", 500)
  }