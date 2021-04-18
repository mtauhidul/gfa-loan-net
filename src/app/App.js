import { createContext, useState } from 'react';
import AppRouter from './appRouter';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext value={[loggedInUser, setLoggedInUser]}>
            <AppRouter />
        </UserContext>
    );
}

export default App;
