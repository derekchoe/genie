import { connect } from 'react-redux';
import CreateTransForm from './create_transaction_form';
import { fetchCategories } from '../../action/category_actions';
import { createTransaction } from '../../action/transaction_actions';
import { createCategory } from '../../action/category_actions';

const mapStateToProps = state => ({
  categories: Object.values(state.entities.categories.categories)
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  createTransaction: transactionData =>
    dispatch(createTransaction(transactionData)),
  createCategory: formData => dispatch(createCategory(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTransForm);
