const test = require('tape');
const supertest = require('supertest');
const fabricantes = require('./fabricantes');
const server = require("../server/server");
const repository = require("../repository/repository");
function runTests() {
    var app = null;
    server.start(fabricantes, repository, (err, app) => {
        var id = null;
        test('GET /fabricantes', (t) => {
            supertest(app)
                .get('/fabricantes')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {

                    if (res.body && res.body.length > 0) id = res.body[0]._id;
                    t.error(err, 'No errors')
                    t.assert(res.body && res.body.length > 0, "All fabricantes returned")
                    t.end()
                })
        })
        test('GET /fabricantes/:id', (t) => {
            if (!id) {
                t.assert(false, "Fabricante by Id Returned");
                t.end();
                return;
            }
            supertest(app)
                .get('/fabricantes/' + id)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    t.error(err, 'No errors')
                    t.assert(res.body, "Fabricantes By Id returned")
                    t.end()
                })
        })

        server.stop();
    })
}
module.exports = { runTests }