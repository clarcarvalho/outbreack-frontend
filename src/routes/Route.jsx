import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

function Route({ isPrivate = false, component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "feed",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default Route;
