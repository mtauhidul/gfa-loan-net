/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AdminContext } from './App';

const AdminRoute = ({ children, ...rest }) => {
    const [adminLogged, setAdminLogged] = useContext(AdminContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                adminLogged.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/admin',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
