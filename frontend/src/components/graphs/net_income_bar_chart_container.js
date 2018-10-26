import { connect } from "react-redux";
import NetIncomeBarChart from './net_income_bar_chart';
import {fetchTransactionMonthly} from '../../action/transaction_actions';

const mapStateToProps = state => ({
  monthlyTransactions: state.entities.transactions.monthlytransactions,
});

const mapDispatchToProps = dispatch => ({
  monthly: () => dispatch(fetchTransactionMonthly())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetIncomeBarChart);