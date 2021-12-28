const request = require('supertest');
const task = require('fake-todos');
const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
});

describe('GET /api/v1/info', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/info')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, '{"message":"This project was completed by Anmol Arora and Elina Widdowson"}', done);
  });
});
