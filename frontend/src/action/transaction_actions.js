import axios from 'axios';
import { RECEIVE_ERRORS } from './session_actions';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_MONTHLY_TRANSACTIONS = 'RECEIVE_MONTHLY_TRANSACTIONS';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const TRANSACTION_LOADING = 'TRANSACTION_LOADING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_CATEGORY_EXPENSE = 'RECEIVE_CATEGORY_EXPENSE';
export const RECEIVE_CATEGORY_INCOME = 'RECEIVE_CATEGORY_INCOME';
export const RECEIVE_NET = 'RECEIVE_NET';

export const fetchTransactions = () => dispatch => {
  // dispatch(setTransactionLoading());
  axios
    .get('/api/transactions')
    .then(res =>
      dispatch({
        type: RECEIVE_TRANSACTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: RECEIVE_TRANSACTIONS,
        payload: null
      })
    );
};

export const fetchCategoriesByExpenses = () => dispatch => {
  // dispatch(setCategoryLoading());
  axios.get('/api/transactions/byCategoryExpense').then(res =>
    dispatch({
      type: RECEIVE_CATEGORY_EXPENSE,
      payload: res.data
    })
  );
};

export const fetchCategoriesByIncome = () => dispatch => {
    // dispatch(setCategoryLoading());
  axios.get('/api/transactions/byCategoryIncome').then(res =>
    dispatch({
      type: RECEIVE_CATEGORY_INCOME,
      payload: res.data
    })
  );
};

export const fetchNet = () => dispatch => {
  // dispatch(setCategoryLoading());
  axios.get('/api/transactions/currentNetIncome').then(res =>
    dispatch({
      type: RECEIVE_NET,
      payload: res.data
    })
  );
};

export const fetchTransactionMonthly = () => dispatch => {
  axios
    .get('api/transactions/monthly')
    .then(res =>
      dispatch({
        type: RECEIVE_MONTHLY_TRANSACTIONS,
        payload: Object.values(res.data)
      })
    )
    .catch(err =>
      dispatch({
        type: RECEIVE_MONTHLY_TRANSACTIONS,
        payload: null
      })
    );
};

export const fetchTransaction = id => dispatch => {
  // dispatch(setTransactionLoading());
  axios
    .get(`/api/transactions/${id}`)
    .then(res =>
      dispatch({
        type: RECEIVE_TRANSACTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: RECEIVE_TRANSACTION,
        payload: null
      })
    );
};

export const createTransaction = transactionData => dispatch => {
  dispatch(clearErrors());
  axios
    .post(
      `/api/categories/${transactionData.category}/transactions`,
      transactionData
    )
    .then(res =>
      dispatch({
        type: RECEIVE_TRANSACTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: RECEIVE_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteTransaction = id => dispatch => {
  axios
    .delete(`/api/transactions/${id}`)
    .then(res =>
      dispatch({
        type: REMOVE_TRANSACTION,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: RECEIVE_ERRORS,
        payload: err.response.data
      })
    );
};

export const setTransactionLoading = () => {
  return {
    type: TRANSACTION_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
