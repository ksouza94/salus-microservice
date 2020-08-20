const test = require('tape');

const repository = require('./repository');


function runTests() {
    var id = null;

    test('Repository GetAllFabricantes', (t) => {
        repository.getAllFabricantes((err, fabricantes) => {
            if (fabricantes && fabricantes.length > 0) id = fabricantes[0]._id;
                t.assert(!err && fabricantes && fabricantes.length > 0, "All Fabricantes Returned");
            t.end();
        });
    })

    test('Repository GetFabricanteById', (t) => {
        if (!id) {
            t.assert(false, "Fabricante by Id Returned");
            t.end();
            return;
        }
        repository.getFabricanteById(id, (err, fabricante) => 
        {
            t.assert(!err && fabricante, "Fabricante by Id Returned");
            t.end();
        });
    })
    

    test('Repository Disconnect', (t) => {
        t.assert(repository.disconnect(), "Disconnect Ok");
        t.end();
    })
}


module.exports = { runTests }