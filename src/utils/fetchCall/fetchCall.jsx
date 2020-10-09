/*
This function is a network manager which manages the api call with respect to the Http methods.
*/
// Resuable fetch function, returns the result

import axios from "axios";
import { logMessage } from "../Logger";

// Network manager function for managing http requests i.e., get, post, put and delete
const FetchCall = async (url, methodType, token, body) => {
  // Checking if the browser is connected to the internet
  if (navigator.onLine) {
    switch (methodType.toLowerCase()) {
      case "get":
        // axios get call
        return await axios.get(url, {
          // Here the body will be there, if passed by the by the user as paraqmeter. Below is the example
          // params: {
          //   id: "12345"
          // }
        });
      case "post":
        // axios post call
        return await axios.post(
          url,
          // Here the body will be there, if passed by the by the user as paraqmeter. Below is the example
          //   {
          //   // firstName: 'Fred',
          //   // lastName: 'Flintstone'
          // }
          body
        );
      case "put":
        // axios put call
        // In this the url will contain the id of the record to be edited.
        return await axios.put(
          url,
          // Here the body will be there, if passed by the by the user as paraqmeter. Below is the example
          //   {
          //   // firstName: 'Fred',
          //   // lastName: 'Flintstone'
          // }
          body
        );
      case "delete":
        // axios delete call
        // In this the url will contain the id of the record to be deleted.
        return await axios.delete(url, {
          // Here the body will be there, if passed by the by the user as paraqmeter. Below is the example
          // firstName: 'Fred',
          // lastName: 'Flintstone'
        });
      // Switch case default case, it will be invoked if invalid methodType is sent as parameter.
      default:
        logMessage("Invalid methodType");
    }
  } // This else will be invoked if the browser is not connected to the internet
  else
    alert(
      "You are not connected to the internet. Please check your connection"
    );
};

export default FetchCall;
