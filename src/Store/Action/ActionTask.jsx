import {
  setWeatherDate,
  setWeatherForcastDate,
  getErrors,
  setCurrentUser,
  registerSuccess,
  passwordResetSuccess,
} from "./ActionGenerator";
import * as Constant from "../../constant/constant";
import fetchCall from "../../utils/fetchCall/fetchCall";
import { logMessage } from "../../utils/Logger";

/**
 * Function to get the weather data
 * @param {*} cityName city name
 */
export const GetWeather = (cityName) => {
  const methodType = "get";
  return (dispatch) => {
    fetchCall(
      Constant.Weather_API + cityName + "&APPID=" + Constant.APPID,
      methodType
    )
      .then((res) => dispatch(setWeatherDate(res)))
      .catch((err) => logMessage(">>>>> API Error component: " + err));
  };
};

/**
 * Function to get the weather data with respect to the place coordinates
 * @param {*} coordinates location coordinates
 */
export const GetWeatherFromCoordinates = (coordinates) => {
  const methodType = "get";
  return (dispatch) => {
    fetchCall(
      Constant.Weather_From_coordinates +
        `lat=${coordinates[0]}&lon=${coordinates[1]}` +
        "&APPID=" +
        Constant.APPID,
      methodType
    )
      .then((res) => dispatch(setWeatherDate(res)))
      .catch((err) => logMessage(">>>>> API Error component: " + err));
  };
};

/**
 * Function to get the forecast data
 * @param {*} lat latitude of the location
 * @param {*} lon longitude of the location
 */
export const GetDailyForcast = (lat, lon) => {
  const methodType = "get";
  return (dispatch) => {
    fetchCall(
      Constant.Daily_Weather_Forcast_API +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely,current&appid=" +
        Constant.APPID,
      methodType
    )
      .then((res) => dispatch(setWeatherForcastDate(res)))
      .catch((err) =>
        logMessage(">>>>> GetDailyForcast API Error : " + JSON.stringify(err))
      );
  };
};

//Firebase auth

export const resetPassword = (email) => {
  const methodType = "post";
  const request = {
    requestType: "PASSWORD_RESET",
    email: email,
  };
  return (dispatch) => {
    fetchCall(
      `${Constant.Firebase_Password_Reset_url} + ${Constant.firebase.firebaseApiKey}`,
      methodType,
      null,
      request
    )
      .then((res) => {
        dispatch(passwordResetSuccess(res.data));
      })
      .catch((err) => dispatch(getErrors(err.response.data)));
  };
};

export const logoutUser = () => (dispatch) => {
  //Remove token from local storage
  localStorage.removeItem("token");
  //Remove auth header for future requests
  // Set current user to empty object {} ehich will set isAuthenticated to false
  dispatch(setCurrentUser(false));
};

export const login = (credentials) => {
  const methodType = "post";
  return (dispatch) => {
    fetchCall(
      `${Constant.Firebase_Login_url} + ${Constant.firebase.firebaseApiKey}`,
      methodType,
      null,
      credentials
    )
      .then((res) => {
        const token = res.idToken;
        localStorage.setItem("token", token);
        dispatch(setCurrentUser(res.email));
      })
      .catch((err) => dispatch(getErrors(err.response.data)));
  };
};

export const resetError = () => {
  return (dispatch) => {
    dispatch(getErrors({}));
  };
};

export const register = (credentials, history) => {
  const methodType = "post";
  const registerData = {
    email: credentials.email,
    password: credentials.password1,
  };
  return (dispatch) => {
    fetchCall(
      `${Constant.Firebase_Registration_url} + ${Constant.firebase.firebaseApiKey}`,
      methodType,
      null,
      registerData
    )
      .then((res) => dispatch(registerSuccess(res.data)))
      .then(() => dispatch(registerSuccess(false)))
      .catch((err) => dispatch(getErrors(err.response.data)));
  };
};
