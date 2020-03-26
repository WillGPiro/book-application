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
bookSchema.statics.topBooks = function() {
  return this
    .aggregate(
      [
        {
          '$group': {
            '_id': '$title', 
            'count': {
              '$sum': 5
            }
          }
        }, {
          '$sort': {
            'count': -1
          }
        }
      ]
    );
};

module.exports = mongoose.model('Book', bookSchema);
