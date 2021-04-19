/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ApplicationContext } from './App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInApplication, setLoggedInApplication] = useContext(ApplicationContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInApplication.email || loggedInApplication.ID ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
