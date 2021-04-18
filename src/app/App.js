import { createContext, useState } from 'react';
import AppRouter from './appRouter';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <AppRouter />
        </UserContext.Provider>
    );
}

export default App;
