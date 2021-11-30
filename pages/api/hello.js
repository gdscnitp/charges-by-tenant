// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const logger4js = require("../../logger/log4js_module");
const logger = logger4js.getLogger("hello");

export default function handler(req, res) {

  //giving the example how to use logger to save the errors or warnings
  logger.error({r:"<enter the route in which the api is called>", m: "<Enter the method of the APi (for e.g GET, POST, PUT>", msg: "<Just send the error callback object for this key"})
  //the above line of code will save the error log in the folder name logs with the file name you alloted on line 4
  //we don't need to the log the error in the console using logger for that we will create seperate helper
  return res.status(200).json({ name: 'John Doe' })
}
