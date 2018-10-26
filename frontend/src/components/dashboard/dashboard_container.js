import { connect } from 'react-redux';
import DashBoard from './dashboard';
import { fetchTransactions } from '../../action/transaction_actions';

const mapStateToProps = state => ({
  transactions: Object.values(state.entities.transactions.transactions)
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: () => dispatch(fetchTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
