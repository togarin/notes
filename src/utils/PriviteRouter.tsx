import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import AuthStore from "../store/auth";

const PrivateRoute: FC<RouteProps> = ({ component: RouteComponent, ...rest }) => {
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
