import {
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  REMOVE_TRANSACTION,
  RECEIVE_MONTHLY_TRANSACTIONS,
  RECEIVE_CATEGORY_EXPENSE,
  RECEIVE_CATEGORY_INCOME,
  RECEIVE_NET,
  // TRANSACTION_LOADING
} from "../action/transaction_actions";

const initialState = {
    transactions: [],
    transaction: {},
    transactionByCategory: [],
    monthlytransactions: [],
    transactionIncome: [],
    netMonthly: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
      // case TRANSACTION_LOADING:
      //     return {
      //         ...state,
      //         loading: true
      //     };
      case RECEIVE_TRANSACTIONS:
        return { ...state, transactions: action.payload, loading: false };
      case RECEIVE_CATEGORY_EXPENSE:
        return { ...state, transactionByCategory: action.payload, loading: false };
      case RECEIVE_CATEGORY_INCOME:
            return { ...state, transactionIncome: action.payload, loading: false };
      case RECEIVE_TRANSACTION:
        const transactions = state.transactions;
        transactions.push(action.payload);
        return { ...state, transaction: action.payload, transactions: transactions, loading: false };
      case RECEIVE_MONTHLY_TRANSACTIONS:
        return { ...state, monthlytransactions: action.payload, loading: false };
      case RECEIVE_NET:
        return { ...state, netMonthly: action.payload, loading: false };
      case REMOVE_TRANSACTION:
        return { ...state, transaction: {}, transactions: state.transactions.filter(transaction => transaction._id !== action.payload) };
      default:
        return state;
    }
}
