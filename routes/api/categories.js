const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/key');
const passport = require('passport');

const Category = require('../../models/Category');
const Transaction = require('../../models/Transaction');
const validateCategoryInput = require('../../validation/category');
const validatesTransactionInput = require('../../validation/transaction');

router.get('/test', (req, res) => res.json({ msg: 'Categories works' }));

// return current user's categories
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Category.find({ user: req.user.id })
      .then(categories => res.json(categories))
      .catch(err => res.status(404).json(err));
  }
);

router.get(
  '/monthly',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let monthlyInfo = {};
    const currentMonth = new Date().getMonth();
    const months = [];

    for (let i = 0; i < 5; i++) {
      months.push(currentMonth - i);
    }

    // months.forEach(month => {
    // Transaction.find(
    //   {
    //     date: {
    //       $gte: new Date(`2018-10-01`),
    //       $lt: new Date(`2018-10-31`)
    //     },
    //     type: 'income'
    //   },
    //   (err, transactions) => res.json(transactions)
    // );

    Transaction.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(`2018-10-01`),
            $lt: new Date(`2018-10-31`)
          }
        }
      },
      {
        $group: {
          _id: '$typeOfTrans',
          total: { $sum: '$amount' }
        }
      }
    ])
      .then(result => res.json(result))
      .catch(err => res.json(err));

    // .toArray()
    // .then(result => res.json(result))
    // .catch(err => res.json(err));
    // (err, transactions) => {
    //   monthlyInfo = transactions;
    // }
    // );
    // });
    // res.json(monthlyInfo);
  }
);

// return one category
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Category.findById(req.params.id)
      .then(category => res.json(category))
      .catch(err => res.json(err));
  }
);

// create categories
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Category.findOne({ name: req.body.name, user: req.user.id }).then(
      category => {
        if (category) {
          return res.status(400).json({ name: 'That category already exists' });
        } else {
          const { errors, isValid } = validateCategoryInput(req.body);

          if (!isValid) {
            return res.status(400).json(errors);
          }

          const CategoryFields = {};
          CategoryFields.user = req.user.id;
          if (req.body.name) CategoryFields.name = req.body.name;
          if (req.body.description) {
            CategoryFields.description = req.body.description;
          }
          if (req.body.budget) CategoryFields.budget = req.body.budget;
          new Category(CategoryFields)
            .save()
            .then(category => res.json(category))
            .catch(err => res.json(err));
        }
      }
    );
  }
);

// eidt categories
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Category.findById(req.params.id)
      .then(category => {
        if (req.body._id) {
          delete req.body._id;
        }
        for (let key in req.body) {
          category[key] = req.body[key];
        }
        category.save().then(category => res.json(category));
      })
      .catch(err => res.status(404).json(err));
  }
);

// delete category and related transactions
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Category.findById(req.params.id)
      .then(category => {
        category.remove();
        Transaction.find({ category: category.id })
          .then(transactions => {
            if (transactions.length !== 0) {
              transactions.forEach(transaction => transaction.remove());
            }
          })
          .catch(err => res.status(404).json(err));
      })
      .then(res.json({ category: 'Category and related transactions removed' }))
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  '/:categoryId/transactions',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatesTransactionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTransaction = new Transaction({
      amount: req.body.amount,
      typeOfTrans: req.body.typeOfTrans,
      description: req.body.description,
      category: req.params.categoryId
    });

    newTransaction
      .save()
      .then(trans => res.json(trans))
      .catch(err => res.json(err));
  }
);

module.exports = router;
