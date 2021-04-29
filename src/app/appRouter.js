/* eslint-disable import/no-cycle */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from '../Components/Admin/Admin';
import AdminAuth from '../Components/AdminAuth';
import BusinessLoan from '../Components/BusinessLoan/BusinessLoan';
import ContactUs from '../Components/ContactUs/ContactUs';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Mortgage from '../Components/Mortgage/Mortgage';
import NavBar from '../Components/NavBar/NavBar';
import Programs from '../Components/Programs/Programs';
import SbaLoan from '../Components/SbaLoan/SbaLoan';
import Services from '../Components/Services/Services';
import BeAnAgentSection from '../pages/BeAnAgentSection';
import Signin from '../pages/Signin';

const AppRouter = () => {
    const routes = (
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
            <Route path="/be-an-agent">
                <BeAnAgentSection />
            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
            <Route path="/admin-login">
                <AdminAuth />
            </Route>
            <Route path="/contact">
                <ContactUs />
            </Route>
            <Route path="/programs">
                <Programs />
            </Route>
            <Route path="/mortgage">
                <Mortgage />
            </Route>
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    );
    return (
        <Router>
            <NavBar />
            {routes}
            <Footer />
        </Router>
    );
};

export default AppRouter;
