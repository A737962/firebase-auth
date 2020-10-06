import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ForgotPassword from "./components/ForgotPassword"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/forgotPassword" component={ForgotPassword } />
        </Switch>
      </Router>
      {/* <Login /> */}
      {/* <Registration /> */}
    </div>
  );
}

export default App;
