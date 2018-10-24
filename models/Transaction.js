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
  }
});

module.exports = Transation = mongoose.model('transaction', TransactionSchema);
