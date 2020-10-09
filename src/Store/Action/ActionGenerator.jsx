import * as ActionType from  './ActionType';

/**
 * Function to return the actionType to add the name
 * @param {*} firstName first name
 * @param {*} lastName last name
 */
export function setName(firstName, lastName) {
    return {
        type: ActionType.ADD_NAME,
        firstName: firstName,
        lastName: lastName
    };
}

/**
 * Function to return the actionType to set the weather data recieved
 * @param {*} data weather details
 */
export function setWeatherDate(data) {
   return {
        type: ActionType.SET_WEATHER_DATA,
        data: data,
    };
}

/**
 * Function to return the actionType to set the forecast data recieved
 * @param {*} data weather forecast details
 */
export function setWeatherForcastDate(data) {
    return {
        type: ActionType.SET_WEATHER_FORCAST_DATA,
        data: data,
    };
}



//Firebase auth

//Password Reset
export const passwordResetSuccess = (decoded) => {
    return {
      type: ActionType.PASSWORD_RESET_SUCCESS,
      payload: decoded,
    };
  };

//Set logged in user
export const setCurrentUser = (decoded) => {
    return {
      type: ActionType.SET_CURRENT_USER,
      payload: decoded,
    };
  };
  
  //User loading
  export const setUserLoading = () => {
    return {
      type: ActionType.USER_LOADING,
    };
  };

  export const getErrors = (error) => {
      return {
          type: ActionType.GET_ERRORS,
          payload: error
      }
  }

  export const registerSuccess = (successMessage) => {
    return {
        type: ActionType.REGISTER_SUCCESS,
        payload: successMessage
    }
}