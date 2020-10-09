import * as ActionType from "../Action/ActionType";
import initialState from "../../DataJson/data.json";

//Function reducer to set the weather and forecast data in a data set.
function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_WEATHER_DATA:
      let obj = JSON.parse(JSON.stringify(action.data));

      let updatedContent = Object.assign({}, state.modelData.content, {
        bannerInfo: {
          icon: obj.weather[0].icon,
          tempDetails: {
            temp: obj.main.temp,
            main: obj.weather[0].main,
            description: obj.weather[0].description,
            wind: obj.wind,
          },
          weather: obj.weather[0],
          name: obj.name,
        },
        details: {
          ...state.modelData.content.details,
          report: {
            wind: obj.wind.speed,
            humidity: obj.main.humidity,
          },
        },
      });
      let updatedState = Object.assign({}, state, {
        modelData: { content: { ...updatedContent } },
      });

      return {
        ...updatedState,
        coord: obj.coord,
        lat: obj.coord.lat,
        lon: obj.coord.lon,
      };
    case ActionType.SET_WEATHER_FORCAST_DATA:
      let foreCastDetails = JSON.parse(JSON.stringify(action.data));
      return { ...state, foreCastDetails };
    default:
      return state;
  }
}

export default serviceReducer;
