/* eslint-disable import/no-cycle */
import React, { createContext, useState } from 'react';
import AppRouter from './AppRouter';

export const ApplicationContext = createContext();
export const AdminContext = createContext();

function App() {
    const [loggedInApplication, setLoggedInApplication] = useState({});
    const [adminLogged, setAdminLogged] = useState({});
    return (
        <>
            <ApplicationContext.Provider value={[loggedInApplication, setLoggedInApplication]}>
                <AdminContext.Provider value={[adminLogged, setAdminLogged]}>
                    <AppRouter />
                </AdminContext.Provider>
            </ApplicationContext.Provider>
        </>
    );
}

export default App;
