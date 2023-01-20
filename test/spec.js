const { expect } = require('chai');
const app = require('../app');
const supertest = require('supertest');

const name = 'scott lucas';
const name2 = 'antonia b.';

describe('name', () => {
  it('is a string', () => {
    expect(typeof name).to.equal('string');
  });
});

describe('name', () => {
  it('is ten chars', () => {
    expect(name2.length).to.equal(10);
  });
});

describe('GET /', function () {
  it('it should has status code 200', function (done) {
    supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
