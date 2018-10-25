const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateTransactionInput(data) {
  let errors = {};

  data.amount = !isEmpty(data.amount) ? data.amount : '';
  data.typeOfTrans = !isEmpty(data.typeOfTrans) ? data.typeOfTrans : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (!Validator.isFloat(data.amount, { min: 0 })) {
    errors.amount = 'Input amount should be higher than 0';
  }

  data.text = !isEmpty(data.typeOfTrans) ? data.typeOfTrans : '';

  if (Validator.isEmpty(data.typeOfTrans)) {
    errors.typeOfTrans = 'typeOfTrans field is required';
  }

  if (!Validator.isLength(data.description, { min: 3, max: 300 })) {
    errors.description = 'Description must be between 3 and 300 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
