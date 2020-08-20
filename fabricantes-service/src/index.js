require("dotenv-safe").config();
const fabricantes = require('./api/fabricantes');
const server = require("./server/server");
const repository = require("./repository/repository");

server.start(fabricantes,repository,(err,app)=>{
    console.log("just started");
});