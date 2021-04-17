import React from 'react';

const Footer = () => (
    <footer className="global_footer footer_2">
        <div className="part1">
            <div className="hidden-xs">
                <ul className="navPages nav navbar-nav">
                    <li className="moduleMenu active">
                        <a className="page-unique homepageMenu s123-fast-page-load" href="index">
                            <span className="txt-container">Home</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="5fe2922785581">
                        <a className="page-unique s123-fast-page-load" href="services">
                            <span className="txt-container">Services</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="602ca1383e7e0">
                        <a className="page-unique s123-fast-page-load" href="/2021-sba-loans">
                            <span className="txt-container">2021 SBA LOANS</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="5ffe239aeb0f6">
                        <a
                            className="page-unique s123-fast-page-load"
                            href="business-loan-application-1"
                        >
                            <span className="txt-container">BUSINESS LOAN APPLICATION</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="5ffe2544eb0f7">
                        <a
                            className="page-unique s123-fast-page-load"
                            href="home-mortgage-inquiries"
                        >
                            <span className="txt-container">HOME MORTGAGE INQUIRIES</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="5d0a0f53588b1">
                        <a className="page-unique s123-fast-page-load" href="programs">
                            <span className="txt-container">Programs</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="6007b33af4ea6">
                        <a className="page-unique s123-fast-page-load" href="internal-portal">
                            <span className="txt-container">Internal portal</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="5fe281218557f">
                        <a className="page-unique s123-fast-page-load" href="file-download">
                            <span className="txt-container">File Download</span>
                        </a>
                    </li>
                    <li className="moduleMenu" data-menu-module-id="603048d947d7f">
                        <a className="page-unique s123-fast-page-load" href="contact-us-1">
                            <span className="txt-container">Contact US</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                {' '}
                Copyright © 2021 All rights reserved -{' '}
                <span className="website-name-preview-helper">Loan-Acc</span>{' '}
            </div>
            <div style={{ margin: '5px 0' }}>
                <a href="terms" className>
                    Terms
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="privacy" className>
                    Privacy
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="clearfix upgrade-website-preview-helper" />
        </div>
    </footer>
);

export default Footer;
