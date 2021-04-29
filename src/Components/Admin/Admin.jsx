import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './Admin.css';
import Agents from './Tabs/Agents';
import Business from './Tabs/Business';
import Sba from './Tabs/Sba';

const Admin = () => {
    const refresh = () => {
        window.location.reload(false);
    };
    return (
        <Router>
            <Container
                fluid
                style={{
                    background: '#eee',
                    marginTop: '100px',
                    border: '1px solid #eee',
                    padding: '20px 20px 20px 30px',
                }}
            >
                <Row style={{ height: '50px' }}>
                    <Col md={3} style={{ paddingLeft: '15px', border: '1px dashed grey' }}>
                        <h4 style={{ textAlign: 'left', fontWeight: '700', letterSpacing: '1px' }}>
                            Admin Dashboard
                        </h4>
                    </Col>
                    <Col
                        md={9}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <Switch>
                                <Route exact path="/admin/agents">
                                    <h4
                                        style={{
                                            textAlign: 'left',
                                            letterSpacing: '1px',
                                        }}
                                    >
                                        Agents
                                    </h4>
                                </Route>
                                <Route path="/admin/sba-applications">
                                    <h4
                                        style={{
                                            textAlign: 'left',
                                            letterSpacing: '1px',
                                        }}
                                    >
                                        SBA Applications
                                    </h4>
                                </Route>
                                <Route path="/admin/business-applications">
                                    <h4
                                        style={{
                                            textAlign: 'left',
                                            letterSpacing: '1px',
                                        }}
                                    >
                                        Business Applications
                                    </h4>
                                </Route>
                            </Switch>
                        </div>
                        <div>
                            <Button
                                onClick={() => refresh()}
                                style={{
                                    borderRadius: '4px',
                                    marginRight: '10px',
                                    background: 'grey',
                                    border: 'none',
                                    outline: 'none',
                                }}
                            >
                                <i className="fas fa-sync" />
                            </Button>
                            <Button style={{ borderRadius: '4px' }}>Sign Out</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col
                        md={3}
                        className="list-container sidenav"
                        style={{
                            height: '100vh',
                            background: 'lightgrey',
                        }}
                    >
                        <ul
                            style={{
                                listStyle: 'none',
                                width: '100%',
                                padding: '15px 0px',
                            }}
                        >
                            <li>
                                <Link className="list-group-item none-style" to="/admin/agents">
                                    Agents
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="list-group-item none-style"
                                    to="/admin/sba-applications"
                                >
                                    Sba Applications
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="list-group-item none-style"
                                    to="/admin/business-applications"
                                >
                                    Business Applications
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={9} style={{}} className="main-container">
                        <div
                            style={{
                                background: 'lightgrey',
                                height: '100vh',
                                width: '100%',
                            }}
                        >
                            <Switch>
                                <Route exact path="/admin/agents">
                                    <Agents />
                                </Route>
                                <Route path="/admin/sba-applications">
                                    <Sba />
                                </Route>
                                <Route path="/admin/business-applications">
                                    <Business />
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default Admin;
