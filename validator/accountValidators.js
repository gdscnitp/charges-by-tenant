const { check, query } = require("express-validator");
const { profile_url } = require("gravatar");
var mongoose = require("mongoose");

exports.addAccountValidator = [
	check("name").not().isEmpty().withMessage("name is required").isString().withMessage("only string is allowed as name"),
	check("email").not().isEmpty().withMessage("email is required").isEmail().withMessage("email is not valid"),
	check("password")
		.not()
		.isEmpty()
		.withMessage("password is required")
		.isString()
		.withMessage("only string is allowed as password")
		.isLength({ min: 8 })
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
		.withMessage("Use Strong Password"),
	//validation for the all the field should be strong
];


/*


psuedo code for checking the mongo id


check("aid")
		.not()
		.isEmpty()
		.withMessage("account id is required")
		.custom((value) => {
			if (!value) return false;
			var regex = /^[0-9a-f]{24}$/;
			return regex.test(value);
		})
		.withMessage("Id is not valid mongo id")
		.custom((value, { req }) => {
			return Account.find({ _id: mongoose.Types.ObjectId(value) }, function (err, account) {
				if (err) {
					return Promise.reject("Server Error");
				}
				if (account.length == 0) {
					return Promise.reject("Account Id is invalid or Not found");
				}
				return true;
			});
		}),

        
    */