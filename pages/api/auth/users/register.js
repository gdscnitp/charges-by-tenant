import connectMongoDb from "../../../../db/connect";
import { sendError } from "../../../../helpers/help";
import { sendSuccess } from "../../../../helpers/help";
import { send } from "../../../../utility/sendMail";
var constants = require("../../../../helpers/constants");
const bcrypt = require("bcrypt");
var Tenant = require("../../../../models/tenant");
const { isEmail, isAlpha, isNumeric } = require("validator");
//var nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const config = require("../../../../config/config");

export default async function handler(req, res) {
  var PASSWORD = generatePassword();
  console.log(PASSWORD);

  if (req.method === "POST") {
    if (
      !req.body.email ||
      !req.body.contact ||
      !req.body.firstName ||
      !req.body.lastName
    ) {
      return sendError(res, "Missing fields", constants.MISSING_FIELD_I);
    }

    if (!isEmail(req.body.email)) {
      return sendError(res, "Email invalid", constants.INVALID_EMAIL);
    }

    if (!isAlpha(req.body.firstName)) {
      return sendError(res, "First Name invalid", constants.INVALID_FNAME);
    }

    if (!isAlpha(req.body.lastName)) {
      return sendError(res, "Last Name invalid", constants.INVALID_LNAME);
    }

    if (!isNumeric(req.body.contact)) {
      return sendError(res, "Contact invalid", constants.INVALID_CONTACT);
    }

    const newUser = new Tenant({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      contact: req.body.contact,
      username: emailUsername(req.body.email),
      password: PASSWORD,
    });

    var { email } = newUser;

    Tenant.findOne({ email }, function (err, data) {
      if (err) {
        return sendError(res, "Email Error", constants.EMAIL_ERROR);
      } else if (data) {
        return sendError(
          res,
          "Account already exists",
          constants.ACCOUNT_EXIST
        );
      }
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return sendError(res, err, constants.HASH_PASSWORD);
        newUser.password = hash;
        newUser.save(function (err, data) {
          if (err) {
            return sendError(res, err, constants.REGISTER_ERROR);
          } else {
            send(
              data.email,
              "Password for Charges By tenants",
              `<h3>Your Password for tenant login for ${data.email} is <h1>${PASSWORD}</h1>.</h3><br>Please login with these credentials only.`
            );
            const payload = {
              id: data._id,
            };
            jwt.sign(payload, config.SECRET_KEY, (err, token) => {
              if (err) return sendError(res, err, constants.JWT_ERROR);
              return sendSuccess(res, { token });
            });
          }
        });
      });
    });
  } else {
    return sendError(res, "Page Not Found!", constants.NOT_FOUND);
  }
}

function generatePassword() {
  //create a function to create a password and send it to the registered mail
  return Math.random().toString(36).slice(-8);
}

function emailUsername(EMAIL) {
  return EMAIL.match(/^(.+)@/)[1];
}
