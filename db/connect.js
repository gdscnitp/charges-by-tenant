const mongoose = require("mongoose");
const log4jsLogger = require("../logger/log4js_module");
const config = require("../config/config");
var logger = log4jsLogger.getLogger("DataBase");

// mongoose.set("useCreateIndex", true);

connectMongoDb();

var connectionAttempt = 0;
var Database;

mongoose.connection.on("error", function (err) {
	console.trace("Mongodb connection failed ❌", err);
	if (connectionAttempt == config.DB_CONNECTION_RETTEMPT_LIMIT_NODE || 1) {
		//send a mail to admin
		console.log("email has beeen sent");
	} else {
		connectionAttempt++;
		connectMongoDb();
	}
});

mongoose.connection.on("connected", function (success) {
	console.log("Successfully opened mongodb connection 👍🏻");
	connectionAttempt = 0;
});

function connectMongoDb() {
	console.log(config.MONGO_URL)
	mongoose.connect(
		config.MONGO_URL || "mongodb://localhost:27017/charges-by-tenants",
		// {
		// 	useUnifiedTopology: true,
		// 	useNewUrlParser: true,
		// 	useCreateIndex: true,
		// 	useFindAndModify: false,
		// },
		(err) => {
			if (err) {
				logger.error({
					r: "mongodb",
					msg: "mongodb_connection_error",
					body: err,
				});
				console.log(err);
				return;
			}

			logger.info({
				r: "mongodb",
				msg: "Database_successfully_connected",
				body: "success",
			});
			console.log("Database successfully connected ✅");
		}
	);
}

module.exports = connectMongoDb