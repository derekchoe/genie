import { connect } from 'react-redux';
import Sidebar from './sidebar';
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
)(Sidebar);
