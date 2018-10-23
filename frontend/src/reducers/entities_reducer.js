import { combineReducers } from 'redux';
import categoryReducer from './categories_reducer'
import transactionReducer from './transactions_reducer'
export default combineReducers({
    categories: categoryReducer,
    transactions: transactionReducer
});