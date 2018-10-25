import { connect } from "react-redux";
import { fetchCategories } from '../../action/category_actions';
import ChartDashboard from './chart_dashboard';

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartDashboard);