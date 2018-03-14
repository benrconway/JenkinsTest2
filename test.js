//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = "localhost:3000";
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('API test', () => {
/*
  * Test the /GET route
  */
  describe('/GET info', () => {
      it('it should GET all the info', (done) => {
        chai.request(server)
            .get('/api')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.eql({name: "John"});
              done();
            });
      });
  });

});
