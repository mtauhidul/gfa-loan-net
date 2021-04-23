/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { Container } from 'react-bootstrap';
import BusinessForm from '../BusinessForm/BusinessForm';
import './BusinessLoan.css';

const BusinessLoan = () => (
    <Container fluid style={{ marginTop: '150px' }}>
        <section
            id="section-5ffe239aeb0f6"
            className="s123-module s123-module-customIframePlugin layout-1 bg-primary"
            data-module-id="5ffe239aeb0f6"
            data-module-type-num={80}
        >
            <div className="container-fluid page_header_style page_header_style_">
                <div className="breadcrumb-wrap">
                    <ol className="breadcrumb container">
                        <li>
                            <a
                                className="homepageMenu s123-fast-page-load"
                                href="/"
                                data-pjax-state
                            >
                                <span className="txt-container">Home</span>
                            </a>
                        </li>
                        <li data-module-id="5ffe239aeb0f6" className="active">
                            BUSINESS LOAN APPLICATION
                        </li>
                    </ol>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row modulesTitle">
                            <div className="col-xs-12 text-center">
                                <h1 id="section-5ffe239aeb0f6-title" className="s123-page-header">
                                    BUSINESS LOAN APPLICATION
                                </h1>
                                <hr className="small" />
                                <h4
                                    id="section-5ffe239aeb0f6-slogan"
                                    className="s123-page-slogan"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-xs-12">
                        <div className="form-wrapper">
                            <BusinessForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
);

export default BusinessLoan;
