import { connect } from "react-redux";
import { fetchCategoriesByExpenses } from "../../action/transaction_actions";
import ChartDashboard from './chart_dashboard';
import { fetchTransactionMonthly } from '../../action/transaction_actions';

const mapStateToProps = state => ({
  transactionByCategory: Object.keys(
    state.entities.transactions.transactionByCategory
  ).map(id => state.entities.transactions.transactionByCategory[id]),

  netIncome: state.entities.transactions.monthlytransactions
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesByExpenses: () => dispatch(fetchCategoriesByExpenses()),
  fetchTransactionMonthly: () => dispatch(fetchTransactionMonthly())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartDashboard);