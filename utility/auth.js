exports.auth = async (req, res, cb) => {
    const jwt = require("jsonwebtoken");
    const config = require("../config/config");
    const constants = require("../helpers/constants");
    //verifying the token
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
      // Split at the space
      const bearer = bearerHeader.split(" ");
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      jwt.verify(req.token, config.SECRET_KEY, (err, authData) => {
        //if (err) return sendError(res, err, constants.JWT_VERIFY);
        cb(err, authData);
      });
    } else {
      cb( {message:"token not available"}, null);
    }
  };