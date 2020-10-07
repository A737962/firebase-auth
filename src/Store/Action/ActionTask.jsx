import { setWeatherDate, setWeatherForcastDate, setLoginData, setRegisterData } from './ActionGenerator';
import * as Constant from '../../constant/constant';
import fetchCall from "../../utils/fetchCall/fetchCall";
import {logMessage} from "../../utils/Logger";

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

export const login = (credentials) => {
  const methodType = "post";
  return (dispatch) => {
    fetchCall(`${Constant.Firebase_Login_url} + ${Constant.firebase.firebaseApiKey}`, methodType, null, credentials).then((res) => dispatch(setLoginData(res))).catch(err => logMessage(">>>>>>> Firebase API Error: "+err));
  }
}

export const register = (credentials) => {
  const methodType = "post";
  const registerData = {
    email: credentials.email,
    password: credentials.password1
  }
  return (dispatch) => {
    fetchCall(`${Constant.Firebase_Registration_url} + ${Constant.firebase.firebaseApiKey}`, methodType, null, registerData).then((res) => dispatch(setRegisterData(res))).catch(err => logMessage(">>>>>>> Firebase API Error: "+err));
  }
}

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