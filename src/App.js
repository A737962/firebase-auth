import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFound from "./components/PageNotFound";
import Routes from "./components/Routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {Routes.map((route) =>
            route.route === "PrivateRoute" ? (
              <PrivateRoute
                exact
                path={route.path}
                key={route.path}
                component={route.componentName}
              ></PrivateRoute>
            ) : (
              <Route
                exact
                path={route.path}
                key={route.path}
                component={route.componentName}
              ></Route>
            )
          )}
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
