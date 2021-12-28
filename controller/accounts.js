var mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
var log4jsLogger = require("../logger/log4js_module");


require("../models/accounts");
require("../models/profiles");

var Account = mongoose.model("Account");
var Profile = mongoose.model("Profile");

var constants = require("../helpers/constants");

var { emailPizzaVerifier } = require("../mailgun/email_pizza_verify");

var logger = log4jsLogger.getLogger("Account");

var helper = require("../helpers/help");

var sendError = helper.sendError;
var sendSuccess = helper.sendSuccess;


exports.createAccount = (req, res) => {
	var { name, email } = req.body;

	Profile.findOne({ email }, function (err, account) {
		if (err) {
			logger.error({ r: "cr_acc", method: "post", msg: err });
			return sendError(res, err, "server_error", constants.SERVER_ERROR);
		}
		if (account) {
			logger.error({
				r: "cr_acc",
				method: "post",
				msg: "Account already exists",
			});
			return sendError(res, "Account Already exist", "account_already_exist", constants.BAD_REQUEST);
		}

		emailPizzaVerifier(email, function (err, resp) {
			console.log(resp);
			if (resp["status"] == 400 || resp["disposable"] == true) {
				logger.error({
					r: "cr_acc",
					method: "post",
					msg: "Email is not valid or disposal",
				});
				return sendError(res, "Email is not valid or disposal", "email_invalid", constants.BAD_REQUEST);
			}
			var avatar = "https:" + gravatar.url(email);

			var vrfy = false;
			var accounts = new Account({ name, email, password, vrfy, avatar });
			accounts.save(function (err, accSave) {
				if (err) {
					logger.error({ r: "cr_acc", method: "post", msg: err });
					return sendError(res, err, "server_error", constants.SERVER_ERROR);
				}

				var account_id = accSave["_id"];

				generatePassword(account_id, email, name, function (err, emailSent) {
					if (err) {
						logger.error({ r: "cr_acc", method: "post", msg: err });
						return sendError(res, err, "email_not_sent", constants.SERVER_ERROR);
					}
					console.log(accSave);
					console.log(emailSent);
					return sendSuccess(res, accSave);
				});
			});
		});
	});
};

function generatePassword(account_id, email, name, cb) {
	//create a function to create a password and send it to the registered mail
}
