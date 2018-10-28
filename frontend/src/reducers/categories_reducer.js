import {
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES,
  REMOVE_CATEGORY,
  CATEGORY_LOADING
} from '../action/category_actions';

const initialState = {
  categories: [],
  category: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case RECEIVE_CATEGORY:
      const categories = state.categories;
      const newCategory = { [state.categories.length]: action.payload };
      const updatedCategories = Object.assign(categories, newCategory);
      return {
        ...state,
        categories: updatedCategories,
        category: action.payload,
        loading: false
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category._id !== action.payload
        )
      };
    default:
      return state;
  }
}
