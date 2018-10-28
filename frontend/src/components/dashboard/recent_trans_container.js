import { connect } from 'react-redux';
import RecentTrans from './recent_trans';
import { deleteTransaction } from '../../action/transaction_actions';

const mdp = dispatch => ({
    deleteTransaction: (id) => dispatch(deleteTransaction(id)),
});

export default connect(null, mdp)(RecentTrans);