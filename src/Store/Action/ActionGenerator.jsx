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

export function setLoginData(data) {
    return {
         type: ActionType.SET_LOGIN_DATA,
         data: data,
     };
 }

 export function setRegisterData(data) {
    return {
         type: ActionType.SET_REGISTER_DATA,
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

