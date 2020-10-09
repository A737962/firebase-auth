import * as ActionType from "../Action/ActionType";

const firebaseInitialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  registered: false,
  passwordResetData: false
};

//Function reducer to set the weather and forecast data in a data set.
function firebaseAuthReducer(state = firebaseInitialState, action) {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      let loginData = action.payload;
      return {
        ...state,
        isAuthenticated: !loginData ? false : true,
        user: loginData,
      };
    case ActionType.USER_LOADING:
      return { ...state, loading: true };
    case ActionType.REGISTER_SUCCESS:
      return { ...state, registered: action.payload };
    case ActionType.PASSWORD_RESET_SUCCESS:
      return { ...state, passwordResetData: action.payload };
    default:
      return state;
  }
}

export default firebaseAuthReducer;
