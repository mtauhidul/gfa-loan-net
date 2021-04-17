/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './SRPanel.css';

const SRPanel = () => (
    <Row className="container srPanel">
        <div className="sidebar">
            <div
                className="card h-100"
                style={{ height: '400px', marginTop: '10px', background: 'transparent' }}
            >
                <div className="card-body">
                    <div className="account-settings">
                        <div className="user-profile">
                            <div className="user-avatar">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    alt="Maxwell Admin"
                                />
                            </div>
                            <h2 className="user-name">Yuki Hayashi</h2>
                            <h4 className="user-email">yuki@Maxwell.com</h4>
                            <h4 className="mb-2 text-primary">ID: ABC123</h4>
                        </div>
                    </div>
                </div>
                <Button
                    style={{ width: '120px', height: '42px', fontSize: '20px' }}
                    variant="success"
                >
                    Logout
                </Button>
            </div>
        </div>

        <div className="content">
            <h2 className="mb-2 text-primary" style={{ position: 'sticky' }}>
                {' '}
                Clients List
            </h2>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="card h-100">
                <div className="card-body">
                    <Row>
                        <Col md={5}>
                            <strong>Name</strong>
                        </Col>
                        <Col md={5}>
                            <strong>Info</strong>
                        </Col>
                        <Col md={2}>
                            <strong>Status</strong>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </Row>
);

export default SRPanel;
