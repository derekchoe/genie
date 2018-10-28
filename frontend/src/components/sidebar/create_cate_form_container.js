import { connect } from 'react-redux';
import CreateCategoryForm from './create_cate_form';
import { createCategory } from '../../action/category_actions';

const mapStateToProps = state => ({
  categories: Object.values(state.entities.categories.categories)
});

const mapDispatchToProps = dispatch => ({
  createCategory: formData => dispatch(createCategory(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryForm);
