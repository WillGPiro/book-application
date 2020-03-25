const { getComment, getTweet } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');


describe(' author routes', () => {
  it('creates a author', async() => {
    return request(app)
      .post('/api/v1/authors')
      .send({
        name: 'Palichuck'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Palichuck',
          __v: 0
        });
      });
  });

});




