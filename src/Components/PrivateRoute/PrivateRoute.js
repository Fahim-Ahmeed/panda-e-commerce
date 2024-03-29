import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {UserContext} from '../../App';
const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser,setloggedInUser]=useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem("email") ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}


export default PrivateRoute;