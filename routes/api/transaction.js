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

router.get(
  '/monthly',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let monthlyInfo = {};
    const currentMonth = new Date().getMonth() + 1;
    const months = [];

    for (let i = 0; i < 5; i++) {
      months.push(currentMonth - i);
    }

    let request = months.map(month => {
      const result = Transaction.aggregate([
        {
          $match: {
            date: {
              $gte: new Date(`2018-${month}-01`),
              $lt: new Date(`2018-${month}-31`)
            }
          }
        },
        {
          $group: {
            _id: '$typeOfTrans',
            total: { $sum: '$amount' }
          }
        },
        {
          $addFields: { typeOfTrans: '$_id' }
        },
        {
          $project: { _id: 0 }
        }
      ]);
      return result;
    });

    Promise.all(request).then(result => res.json(result));
  }
);

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
  Transaction.findById(req.params.id, (err, trans) => {
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
