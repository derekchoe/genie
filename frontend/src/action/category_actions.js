import axios from 'axios';
import { RECEIVE_ERRORS } from './session_actions';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const CATEGORY_LOADING = 'CATEGORY_LOADING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const fetchCategories = () => dispatch => {
  axios
    .get('/api/categories')
    .then(res =>
      dispatch({
        type: RECEIVE_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: RECEIVE_CATEGORIES,
        payload: null
      })
    );
};

export const fetchCategory = id => dispatch => {
  axios
    .get(`/api/categories/${id}`)
    .then(res =>
      dispatch({
        type: RECEIVE_CATEGORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: RECEIVE_CATEGORY,
        payload: null
      })
    );
};

export const createCategory = categoryData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/categories', categoryData)
    .then(res =>
      dispatch({
        type: RECEIVE_CATEGORY,
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

export const updateCategory = categoryData => dispatch => {
  dispatch(clearErrors());
  axios
    .patch(`/api/categories/${categoryData.id}`, categoryData)
    .then(res =>
      dispatch({
        type: RECEIVE_CATEGORY,
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

export const deleteCategory = id => dispatch => {
  axios
    .delete(`/api/categories/${id}`)
    .then(res =>
      dispatch({
        type: REMOVE_CATEGORY,
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

export const setCategoryLoading = () => {
  return {
    type: CATEGORY_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
