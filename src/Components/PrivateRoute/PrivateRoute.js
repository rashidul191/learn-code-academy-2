import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
       loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
            //   pathname: "/login",
              pathname: "/sign_in",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;