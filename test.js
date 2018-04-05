// During the test the env variable is set to test
// This part presumes a config that is not present in this file. A way to make
// your tests use a DB that isn't the one you use for production etc.
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = "localhost:3000";
const should = chai.should();

// Here we tell Chai to use the Chai-HTTP package.
chai.use(chaiHttp);

// Our parent describe block
describe('API functionality test', () => {
  // Possible hooks are before, beforeEach, afterEach and after.
  // * Example beforeEach *
  //    beforeEach((done) => {
  //       function-to-perform({}, (err) => {
  //         done();
  //       });
  //     });

// Child describe block testing the /api GET route
  describe('testing /api GET route', () => {
      it('it should GET appropriate information', (done) => {
        chai.request(server)
            .get('/')
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.be.eql({message: "Nothing to see here"});
              done();
            });
        });
    });
});
