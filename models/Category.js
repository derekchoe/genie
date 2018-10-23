const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  budget: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  transactions: { type: Schema.Types.ObjectId, ref: 'transaction' }
});

module.exports = Category = mongoose.model('category', CategorySchema);
