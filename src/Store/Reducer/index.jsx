import { combineReducers } from 'redux';
import Reducer from './reducerAction'; //add this line
import serviceReducer from './serviceReducer'

const rootReducer = combineReducers({
  serviceReducer, 
  Reducer
  });

  
export default rootReducer;