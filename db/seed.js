const Book = require('../lib/models/Book');
const Author = require('../lib/models/Author');
const chance = require('chance').Chance();

// specifying the number of authors to create with our seed function
module.exports = async({ authorsToCreate = 10, booksToCreate = 100, } = {}) => {
  // creating  bookes
  // creating an array of books length
  // map through the array
  // -> for each item in the array we create an object with { title, pages }
  // for each author in the mapped array we create a author in our mongodb
  const name = ['Palichuck', 'Kennedy OJohn', 'GiKahn'];
  const authors = await Author.create([...Array(authorsToCreate)].map(() => ({
    name: chance.pickone(name),
  })));

  await Book.create([...Array(booksToCreate)].map(() => ({
    authorId: chance.pickone(authors)._id,
    title: chance.sentence(),
    pages: chance.d100()
  })));
};
