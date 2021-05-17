import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import AuthStore from "../store/auth";

type TProps = RouteProps & { component: React.ComponentType };

const PrivateRoute: FC<TProps> = observer(
  ({ component: RouteComponent, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(routeProps) =>
          !!AuthStore.currentUser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/"} />
          )
        }
      />
    );
  }
);

export default PrivateRoute;
