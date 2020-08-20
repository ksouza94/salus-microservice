const mongodb = require("../config/mongodb");

function getAllFabricantes(callback) {
    mongodb.connect((err, db) => {
         db.collection("salus_fabricantes").find().toArray(callback);
        
    })

}


   
function getFabricanteById(id, callback) {
    mongodb.connect((err, db) => {
        db.collection("salus_fabricantes").findOne({ _id: require("mongodb").ObjectId(id)}, callback);

    });
}



function disconnect() {
    return mongodb.disconnect();
}

module.exports = { getAllFabricantes, getFabricanteById, disconnect }