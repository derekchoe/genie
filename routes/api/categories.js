const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/key');
const passport = require('passport');

const Category = require('../../models/Category');
<<<<<<< HEAD
=======
// const Transaction = require('../../models/Transaction');
>>>>>>> 4bdf4232f2d1c22909675cd4f0e3eb1a9fb9cdf5
const validateCategoryInput = require('../../validation/category');

router.get('/test', (req, res) => res.json({ msg: 'Categories works' }));

// return current user's categories
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Category.find({ user: req.user.id })
      .then(categories => res.json(categories)) //TODO: it is an empty array???
      .catch(err => res.status(404).json(err));
  }
);

// return one category with all transactions
<<<<<<< HEAD
router.get('/:id', (req, res) => {});

// create categories
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
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
      new Category(CategoryFields).save().then(category => res.json(category));
    }
);

// edit categories
router.patch('/:id', (req, res) => {});

// delete categories
router.delete('/', (req, res) => {});
=======
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Category.findById(req.params.id)
      .populate('transactions')
      .then(category => res.json(category))
      .catch(err => res.status(404).json(err));
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
            .then(category => res.json(category));
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
        // const transactionId = category.transactions;
        category.remove();
        // Transaction.find({ category: category.id })
        //   .then(transactions => {
        //     if (transactions.length !== 0) {
        //       transactions.forEach(transaction => transaction.remove());
        //     }
        //   })
        //   .catch(err => res.status(404).json(err));
      })
      .then(res.json({ category: 'Category removed' }))
      .catch(err => res.status(404).json(err));
  }
);
>>>>>>> 4bdf4232f2d1c22909675cd4f0e3eb1a9fb9cdf5

module.exports = router;
