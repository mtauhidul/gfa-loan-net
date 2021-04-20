/* eslint-disable import/no-cycle */
import { Route, Switch } from 'react-router-dom';
import AdminAuth from '../Components/AdminAuth';
import AdminPanel from '../Components/AdminPanel/AdminPanel';
import AgentPanel from '../Components/AgentPanel/AgentPanel';
import BusinessLoan from '../Components/BusinessLoan/BusinessLoan';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar';
import SbaLoan from '../Components/SbaLoan/SbaLoan';
import Services from '../Components/Services/Services';
import BeAnAgentSection from '../pages/BeAnAgentSection';
import Signin from '../pages/Signin';

const AppRouter = () => (
    <>
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
            <Route path="/admin-panel">
                <AdminPanel />
            </Route>
            <Route path="/agent-dashboard">
                <AgentPanel />
            </Route>
            <Route path="/be-an-agent">
                <BeAnAgentSection />
            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
            <Route path="/admin">
                <AdminAuth />
            </Route>
        </Switch>
        <Footer />
    </>
);

export default AppRouter;
