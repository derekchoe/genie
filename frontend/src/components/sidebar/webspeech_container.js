import { connect } from 'react-redux';
import WebSpeech from './webspeech';
import {createTransaction} from '../../action/transaction_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
    createTransaction: transaction => dispatch(createTransaction(transaction)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WebSpeech);