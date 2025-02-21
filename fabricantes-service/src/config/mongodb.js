const MongoClient = require('mongodb').MongoClient;

var connection = null;

var db = null;

////conectando no banco
function connect(callback) {

    if (connection) return callback(null, db);

    MongoClient.connect(process.env.MONGO_CONNECTION, (err, conn) => {
        if (err)
            return callback(err, null);
        else {
            connection = conn;
            db = conn.db(process.env.DATABASE_NAME);

            return callback(null, db);
        }
    })
}
///desconectando do banco
function disconnect() {
    if (!connection) return true;
    connection.close();
    connection = null;
    return true;

}

module.exports = { connect, disconnect }
