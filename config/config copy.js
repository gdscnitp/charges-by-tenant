// This is the example of the config file add your username and password and rename the file to config.js


let config = {
    MONGO_URL: `mongodb+srv://<username>:<password>@cluster0.heazp.mongodb.net/charges-by-tenants?retryWrites=true&w=majority`,
    DB_CONNECTION_RETTEMPT_LIMIT_NODE: 5,
}

module.exports = config;