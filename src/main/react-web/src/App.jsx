import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import HomePage from "./pages/HomePage";
import Login from "./components/User/Login";
import Booking from "./pages/Booking";
import config from "./config";
import "./App.css";
import HeaderBar from "./pages/HeaderBar";
import { Container } from "react-bootstrap";

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "", window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}
        >
          <Container>
            <HeaderBar />
            <Route path="/" exact component={HomePage} />
            <SecureRoute path="/booking" component={Booking} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/login/callback" component={LoginCallback} />
          </Container>
        </Security>
      </header>
    </div>
  );
};

export default App;
