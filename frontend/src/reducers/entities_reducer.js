import { combineReducers } from 'redux';
import categoryReducer from './categories_reducer'
export default combineReducers({
    categories: categoryReducer,
});