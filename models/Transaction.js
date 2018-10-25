const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  amount: {
    type: Number,
    required: true
  },
  typeOfTrans: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  categoryName: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
