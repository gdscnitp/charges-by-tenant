var express = require("express");
var mongoose = require("mongoose");
var config = require("../config/config");
const passport = require("passport");

var router = express.Router();

/**
 * @api {post} api/accounts/cr_acc Create Tenants Account
 * @apiVersion 0.1.0
 * @apiName CreateUser
 * @apiGroup Account
 *
 * @apiParam {String}  name  Name of User.
 * @apiParam {String}  email  Email of User.
 * @apiParam {String}  password  password of User.
 *
 * @apiSuccess {String} name   name of the User.
 * @apiSuccess {String} _id   unique account id of the User.
 * @apiSuccess {Date}   registered Date of Registration.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5dfffkkd55f5fnfk4d",
 *       "name": "manish",
 *       "user_name":"manish"
 *     }
 *
 * @apiError UserAlreadyFound The id of the User was  found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserAlreadyFound"
 *     }
 */
router.post("/cr_acc", addAccountValidator, runValidation, createAccount);

module.exports = router;