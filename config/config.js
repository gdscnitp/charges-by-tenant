let config = {
    MONGO_URL: `mongodb://admin:admin@cluster0-shard-00-00.evrtj.mongodb.net:27017,cluster0-shard-00-01.evrtj.mongodb.net:27017,cluster0-shard-00-02.evrtj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xnzvxt-shard-0&authSource=admin&retryWrites=true&w=majority`,
    DB_CONNECTION_RETTEMPT_LIMIT_NODE: 5,
    SECRET_KEY: "jksdo"
}

module.exports = config;