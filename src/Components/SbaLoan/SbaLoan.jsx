/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { Container } from 'react-bootstrap';
import SBAForm from '../SBAForm';
import './SbaLoan.css';

const SbaLoan = () => (
    <Container fluid style={{ marginTop: '100px', marginBottom: '100px' }}>
        <section
            id="section-602ca1383e7e0"
            className="s123-module s123-module-customIframePlugin layout-1 bg-primary"
            data-module-id="602ca1383e7e0"
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
                        <li data-module-id="602ca1383e7e0" className="active">
                            2021 SBA LOANS
                        </li>
                    </ol>
                </div>
                <div style={{ marginTop: '100px', marginBottom: '50px' }} className="row">
                    <div className="container">
                        <div className="row modulesTitle">
                            <div className="col-xs-12 text-center">
                                <h1 id="section-602ca1383e7e0-title" className="s123-page-header">
                                    2021 SBA LOANS
                                </h1>
                                <hr className="small" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-xs-12">
                        <div className="formWrapper">
                            <SBAForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
);

export default SbaLoan;
