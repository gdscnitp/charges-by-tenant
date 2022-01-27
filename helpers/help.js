var error = require("./error");
var constants  = require("./constants")
import Moment from 'moment'

module.exports = {
    sendError: function(res,msg,status_code=500){
        console.trace(msg);
        
        status_code=String(status_code);
        res.status(status_code).json({
            code: status_code,
            message: msg ? msg : "Contact adminstator",
            success:false,
            time: Date.now()
        });
        return;
    },

    sendSuccess: function(res,data){
        res.status(constants.OK).json({
            success:true,
            data:data,
            time: Date.now()
        });

    }
};