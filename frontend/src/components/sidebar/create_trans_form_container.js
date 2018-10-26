import { connect } from 'react-redux';
import CreateTransForm from './create_transaction_form';
import { fetchCategories } from '../../action/category_actions';
import { createTransaction } from '../../action/transaction_actions';

const mapStateToProps = state => ({
  categories: Object.values(state.entities.categories.categories)
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  createTransaction: transactionData =>
    dispatch(createTransaction(transactionData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTransForm);
