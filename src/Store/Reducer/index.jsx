import { combineReducers } from 'redux';
import Reducer from './reducerAction'; //add this line
import serviceReducer from './serviceReducer'
import firebaseErrorReducer from "./firebaseErrorReducer";
import firebaseAuthReducer from "./firebaseAuthReducer";

const rootReducer = combineReducers({
  serviceReducer,
  firebaseErrorReducer,
  firebaseAuthReducer,
  Reducer
  });

  
export default rootReducer;