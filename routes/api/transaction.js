const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');

const Transaction = require('../../models/Transaction');
const validatesTransactionInput = require('../../validation/transaction');

router.get('/', (req, res) => {
  Transaction.find()
    .sort({ date: -1 })
    .then(trans => res.json(trans))
    .catch(err => res.status(404).json({ notransctionfound: 'No transaction found' }));
});

router.get('/:id', (req, res) => {
  Transaction.findById(req.params.id)
    .then(trans => res.json(trans))
    .catch(err =>
      res.status(404).json({ notransctionfound: 'No transaction found with that ID' })
    );
});


router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatesTransactionInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newTransaction = new Transaction({
        amount: req.body.amount,
        type: req.body.type,
        description: req.body.description,
        category: req.category.id
      });
  
      newTransaction.save().then(trans => res.json(trans));
    }
  );
module.exports = router;