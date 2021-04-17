import React from 'react';
import { Button, Col, Container, Jumbotron, ListGroup, Row } from 'react-bootstrap';
import './AdminPanel.css';

const AdminPanel = () => (
    <Container style={{ marginTop: '200px' }}>
        <div className="admin-wrapper">
            <Jumbotron
                style={{
                    background: 'lightgray',
                    padding: '20px',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h1>Admin Panel</h1>

                <Button
                    style={{ height: '50px', width: '120px', borderRadius: '6px' }}
                    variant="primary"
                >
                    Logout
                </Button>
            </Jumbotron>
            <Row>
                <Col md={6}>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item
                            style={{
                                background: 'lightgrey',
                                fontSize: '22px',
                                fontWeight: 'bold',
                            }}
                        >
                            Sales Persons
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            href="#link2"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <span>Name</span>
                            <span>ID</span>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            Person Name
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                            Person Name
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item
                            style={{
                                background: 'lightgrey',
                                fontSize: '22px',
                                fontWeight: 'bold',
                            }}
                        >
                            Loan Applications
                        </ListGroup.Item>
                        <ListGroup.Item
                            action
                            href="#link2"
                            disabled
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <span>Application ID</span>
                            <span>Loan Type</span>
                            <span>Status</span>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" disabled>
                            This one is a button
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    </Container>
);

export default AdminPanel;
