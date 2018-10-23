const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateTransactionInput(data) {
    let errors = {};

    if (!Validator.isFloat(data.amount, {min: 0})) {
        errors.amount = 'Input amount should be higher than 0';
    }
  
    data.text = !isEmpty(data.type) ? data.type : '';
  
    if (Validator.isEmpty(data.type)) {
      errors.type = 'Type field is required';
    }

    if (!Validator.isLength(data.description, { min: 5, max: 300 })) {
        errors.description = 'Event name must be between 3 and 300 characters';
      }
    

    if (Validator.isEmpty(data.description)) {
        error.description = 'Description is required';
    }


    return {
      errors,
      isValid: isEmpty(errors)
    };
  };