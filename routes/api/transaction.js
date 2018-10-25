const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
ObjectId = require('mongodb').ObjectID;

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
    const currentMonth = new Date().getMonth() + 1;
    const months = [];
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const final= {};


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
            },
            user: ObjectId(req.user.id)
          }
        },
        {
          $group: {
            _id: '$typeOfTrans',
            total: { $sum: '$amount' }
          }
        }
      ]);
      return result;
    });

    const dataFinal = {};
    Promise.all(request).then(result => {
      result.forEach( (el, idx) => {
        let monthObject = null;
        if (el.length === 2) {
           monthObject = { [el[0]._id]: el[0].total, [el[1]._id]: el[1].total };
        } else if (el.length == 1) {
           monthObject = { [el[0]._id]: el[0].total};
        } else {
           monthObject = {};
        }
        Object.assign(dataFinal, {[monthNames[months[idx] -1 ]]: monthObject})
      })
    }).then(() => res.json(dataFinal));
  }
);

router.get(
  '/byCategoryIncome',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const currentMonth = new Date().getMonth() + 1;
    let trans = Transaction.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(`2018-${currentMonth}-01`),
            $lt: new Date(`2018-${currentMonth}-31`)
          },
          typeOfTrans: 'income',
          user: ObjectId(req.user.id)
        }
      },
      {
        $group: {
          _id: '$categoryName',
          totalIncome: { $sum: '$amount' }
        }
      },
      {
        $addFields: { categoryName: '$_id' }
      },
      {
        $project: { _id: 0 }
      }
    ]).then(result => res.json(result));
  }
);

router.get(
  '/byCategoryExpense',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const currentMonth = new Date().getMonth() + 1;
    let trans = Transaction.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(`2018-${currentMonth}-01`),
            $lt: new Date(`2018-${currentMonth}-31`)
          },
          typeOfTrans: 'expense',
          user: ObjectId(req.user.id)
        }
      },
      {
        $group: {
          _id: '$categoryName',
          totalExpense: { $sum: '$amount' }
        }
      },
      {
        $addFields: { categoryName: '$_id' }
      },
      {
        $project: { _id: 0 }
      }
    ]).then(result => res.json(result));
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
