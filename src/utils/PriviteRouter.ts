import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthStore from "../store/auth";


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!AuthStore.currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};


export default PrivateRoute
