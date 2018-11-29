import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import {
  composeWithDevTools
} from 'redux-devtools-extension';

const preloadedState = {};

const middleware = [thunk];
// const composeEnhancers = composeWithDevTools({
//   // options like actionSanitizer, stateSanitizer
// });

const store = createStore(
  rootReducer,
  preloadedState,
  // compose(
  //   applyMiddleware(...middleware)
  //   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
          composeWithDevTools(
            /* logger must be the last middleware in chain to log actions */
            applyMiddleware(thunk)
          )
);

export default store;
