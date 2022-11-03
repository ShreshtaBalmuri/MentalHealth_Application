import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "../assets/css/demo.css";
import LandingPage from "./LandingPage/Landing_page.js";
import Login from "./Login/Login";
import SignUp from "./Signup/Signup.js";
import AdminLayout from "./Dashboard/Admin.js";

//Create a Main Component
class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={LandingPage} />
          <Switch>
            <Route
              path="/patient"
              render={(props) => <AdminLayout {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
//Export The Main Component
export default Main;
