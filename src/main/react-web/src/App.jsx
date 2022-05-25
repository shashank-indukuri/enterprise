import React, { useReducer } from "react";
import "./App.css";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import appReducer from "./store/reducers";
import StateContext from "./store/Contexts";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";

const CALLBACK_PATH = "/login/callback";
const oktaAuth = new OktaAuth({
  issuer: "https://trial-1640146.okta.com/oauth2/default",
  clientId: "0oa168p4r9QWpvKrY697",
  redirectUri: window.location.origin + "/login/callback",
});

const AppWithOkta = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Container>
        <HeaderBar />
        <Route path="/" exact component={HomePage} />
        <Route path={CALLBACK_PATH} exact component={LoginCallback} />
        <Route path="/movies" component={Booking} />
        <SecureRoute path="/booking" component={Booking} />
      </Container>
    </Security>
  );
};

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: {},
  });
  const { user } = state;

  return (
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <Router>
          <AppWithOkta />
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
