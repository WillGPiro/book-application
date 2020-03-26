const { getBooks, getAuthor, getAuthors } = require('../db/data-helpers');

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

  it('gets all authors', async() => {
    const authors = await getAuthors();

    return request(app)
      .get('/api/v1/authors/')
      .then(res => {
        expect(res.body).toEqual(authors);
      });
  });

  it('updates an author by id', async() => {
    const author = await getAuthor();

    return request(app)
      .patch(`/api/v1/authors/${author._id}`)
      .send({ name: 'Ghikan' })
      .then(res => {
        expect(res.body).toEqual({
          ...author,
          name: 'Ghikan'
        });
      });
  });

  it('deletes an author by id', async() => {
    const author = await getAuthor();

    return request(app)
      .delete(`/api/v1/authors/${author._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...author
        });
      });
  });

});









