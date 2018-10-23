const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');

const Transaction = require('../../models/Transaction');

router.get('/', (req, res) => {
  Transaction.find()
    .sort({ date: -1 })
    .then(trans => res.json(trans))
    .catch(err =>
      res.status(404).json({ notransctionfound: 'No transaction found' })
    );
});

router.get('/:id', (req, res) => {
  Transaction.findById(req.params.id)
    .then(trans => res.json(trans))
    .catch(err =>
      res
        .status(404)
        .json({ notransctionfound: 'No transaction found with that ID' })
    );
});

router.delete('/:id', (req, res) => {
  Transaction.findById(req.params.id, (err, tarns) => {
    trans.remove(err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('removed');
      }
    });
  });
});
module.exports = router;
