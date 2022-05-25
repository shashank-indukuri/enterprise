import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useOktaAuth } from "@okta/okta-react";
import Login from "./Login";
import Register from "./Register";
import Rating from "../Rating/MovieRating";
import StateContext from "../../store/Contexts";

/**
 * This Component is the container for the user authentication functionality
 */

function UserCard() {
  const Logout = React.lazy(() => import("./Logout"));
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect();
  const logout = () => oktaAuth.signOut();
  const { state } = useContext(StateContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showRating, setShowRating] = useState(false);

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <Button variant="dark" onClick={login}>
          Login
        </Button>
      </div>
    );
  } else {
    return (
      <div className="justify-content-end">
        <Button variant="dark" onClick={() => setShowRating(true)}>
          Rate
        </Button>
        <Rating show={showRating} handleClose={() => setShowRating(false)} />
        <Button variant="dark" onClick={logout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default UserCard;
