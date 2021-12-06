var error = require("./error");
var constants  = require("./constants")

module.exports = {
    sendError: function(res,err,error_index,status_code){
        console.trace(err);
        if(typeof error_index == undefined){
            status_code  = constants.SERVER_ERROR;
        }

        res.status(status_code).json({
            code: error[error_index] ? error[error_index][0] : 404,
            message: error[error_index] ? error[error_index][1] : error_index,
            success:false
        });
        return;
    },

    sendSuccess: function(req,data){
        res.status(constants.OK).json({
            sucess:true,
            data:data
        });

    }
};