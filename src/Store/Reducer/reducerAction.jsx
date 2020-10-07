import * as ActionType from  '../Action/ActionType';

function reducerAction (state = {}, action) {
 
    switch (action.type) {
      case ActionType.ADD_NAME:
         return { ...state, firstName: action.firstName, lastName: action.lastName  };
      default:
        return state
    }
  }

export default reducerAction;
