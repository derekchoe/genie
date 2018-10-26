import { connect } from "react-redux";
import { fetchCategoriesByExpenses } from "../../action/transaction_actions";
import ChartDashboard from './chart_dashboard';

const mapStateToProps = state => ({
  transactionByCategory: Object.keys(
    state.entities.transactions.transactionByCategory
  ).map(id => state.entities.transactions.transactionByCategory[id])
});

const mapDispatchToProps = dispatch => ({ fetchCategoriesByExpenses: () => dispatch(fetchCategoriesByExpenses()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartDashboard);