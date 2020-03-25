const { getBooks, getAuthor } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');


describe('author routes', () => {
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

  it('gets an author by id', async() => {
    const author = await getAuthor();
    const books = await getBooks({ authorId: author._id });

    return request(app)
      .get(`/api/v1/authors/${author._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...author,
          books
        });
      }); 
  });

});




