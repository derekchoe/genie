import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../action/session_actions';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default errorsReducer;
