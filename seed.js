require('dotenv').config();
require('./lib/utils/connect')();

const seedData = require('./db/seed');

seedData({ authorsToCreate: 10, booksToCreate: 100 })
  .then(() => console.log('done'));

  
