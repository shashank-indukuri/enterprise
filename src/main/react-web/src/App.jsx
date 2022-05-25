import React from "react";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./Home";
import Protected from "./Protected";

const oktaAuth = new OktaAuth({
  issuer: "https://trial-1640146.okta.com/oauth2/default",
  clientId: "0oa168p4r9QWpvKrY697",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
});

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={Protected} />
        <Route path="/login/callback" exact component={LoginCallback} />
        <SecureRoute path="/protected" component={Protected} />
      </Switch>
    </Security>
  );
};

export default App;
