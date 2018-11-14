import {
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  REMOVE_TRANSACTION,
  RECEIVE_MONTHLY_TRANSACTIONS,
  RECEIVE_CATEGORY_EXPENSE
} from '../action/transaction_actions';

const initialState = {
  transactions: [],
  transaction: {},
  transactionByCategory: [],
  monthlytransactions: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };
    case RECEIVE_CATEGORY_EXPENSE:
      return {
        ...state,
        transactionByCategory: action.payload,
        loading: false
      };
    case RECEIVE_TRANSACTION:
      const transactions = state.transactions;
      const newTransaction = { [state.transactions.length]: action.payload };
      const updatedTransactions = Object.assign(transactions, newTransaction);
      return {
        ...state,
        transaction: action.payload,
        transactions: updatedTransactions,
        loading: false
      };
    case RECEIVE_MONTHLY_TRANSACTIONS:
      return {
        ...state,
        monthlytransactions: action.payload,
        loading: false
      };
    case REMOVE_TRANSACTION:
      return {
        ...state,
        transaction: {},
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload
        )
      };
    default:
      return state;
  }
}
