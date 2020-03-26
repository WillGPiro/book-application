const mongoose = require ('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
      // delete ret.__v;
    }
  }
});

authorSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'authorId'
});

module.exports = mongoose.model('Author', authorSchema);

