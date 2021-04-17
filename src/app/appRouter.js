import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from '../Components/AdminLogin/AdminLogin';
import AdminPanel from '../Components/AdminPanel/AdminPanel';
import BusinessLoan from '../Components/BusinessLoan/BusinessLoan';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar';
import SbaLoan from '../Components/SbaLoan/SbaLoan';
import Services from '../Components/Services/Services';
import SRLogin from '../Components/SRLogin/SRLogin';
import SRPanel from '../Components/SRPanel/SRPanel';
import SRRegistration from '../Components/SRRegistration/SRRegistration';
import BeAnAgentSection from '../pages/BeAnAgentSection';

const AppRouter = () => (
    <>
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
                <Route path="/admin-login">
                    <AdminLogin />
                </Route>
                <Route path="/admin-panel">
                    <AdminPanel />
                </Route>
                <Route path="/sr-registration">
                    <SRRegistration />
                </Route>
                <Route path="/sr-login">
                    <SRLogin />
                </Route>
                <Route path="/sr-panel">
                    <SRPanel />
                </Route>
                <Route path="/be-an-agent">
                    <BeAnAgentSection />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </>
);

export default AppRouter;
