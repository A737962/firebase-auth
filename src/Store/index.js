import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';

//Function applying middleware with the rootReducer to the store.
export const store = createStore (
  rootReducer,
  applyMiddleware(thunk)
);