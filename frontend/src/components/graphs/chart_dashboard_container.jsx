import { connect } from "react-redux";
import { fetchCategories } from '../../action/category_actions';
import ChartDashboard from './chart_dashboard';

const mapStateToProps = state => ({
  categories: Object.keys(state.entities.categories.categories)
    .map(id => state.entities.categories.categories[id])
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartDashboard);