import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessLoan from './Components/BusinessLoan/BusinessLoan';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import SbaLoan from './Components/SbaLoan/SbaLoan';
import Services from './Components/Services/Services';

const App = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/2021-sba-loans">
                <SbaLoan />
            </Route>
            <Route path="/business-loan-application-1">
                <BusinessLoan />
            </Route>
            <Route path="/services">
                <Services />
            </Route>
        </Switch>
        <Footer />
    </Router>
);

export default App;
