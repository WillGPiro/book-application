const mongoose = require ('mongoose');

const bookSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Book', bookSchema);
