import { connect } from 'react-redux';
import RecentTrans from './recent_trans';
import { deleteTransaction, fetchCategoriesByExpenses, fetchTransactionMonthly } from '../../action/transaction_actions';


const mdp = dispatch => ({
    deleteTransaction: (id) => dispatch(deleteTransaction(id)),
    fetchCategoriesByExpenses: () => dispatch(fetchCategoriesByExpenses()),
    fetchTransactionMonthly: () => dispatch(fetchTransactionMonthly())
});

export default connect(null, mdp)(RecentTrans);