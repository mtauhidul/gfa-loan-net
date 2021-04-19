import { createContext, useState } from 'react';
import AppRouter from './AppRouter';

export const ApplicationContext = createContext();

function App() {
    const [loggedInApplication, setLoggedInApplication] = useState({});
    return (
        <ApplicationContext.Provider value={[loggedInApplication, setLoggedInApplication]}>
            <AppRouter />
        </ApplicationContext.Provider>
    );
}

export default App;
