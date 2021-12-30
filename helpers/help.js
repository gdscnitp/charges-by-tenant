var error = require("./error");
var constants  = require("./constants")
import Moment from 'moment'

module.exports = {
    sendError: function(res,err,status_code=500){
        console.trace(err);
        
        status_code=String(status_code);
        res.status(status_code).json({
            code: status_code,
            message: error[status_code] ? error[status_code] : "Server Error",
            success:false,
            time: Date.now()
        });
        return;
    },

    sendSuccess: function(res,data){
        res.status(constants.OK).json({
            sucess:true,
            data:data,
            time: Date.now()
        });

    }
};