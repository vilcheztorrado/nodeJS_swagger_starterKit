var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('foo', function() {

    describe('GET /foo', function() {

      it('should return a default message', function(done) {

        request(server)
          .get('/foo')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res.body.message);
            res.body.message.should.eql('foo the system!');
            done();
          });
      });

    });

  });

});
