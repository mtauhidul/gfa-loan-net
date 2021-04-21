/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
    <Container fluid>
        <div id="websiteHeader">
            <nav id="mainNav" className="hidden-xs navbar-default navbar-fixed-top  opacity-full">
                <div className="site_container">
                    <div className="navbar-header">
                        {' '}
                        <Link
                            to="/"
                            className="logo_name navbar-brand s123-w-l-s page-unique s123-fast-page-load logoStyle_19"
                        >
                            <span className="website-name">GFA </span>{' '}
                            <span style={{ marginLeft: '10px' }}> Loan-Acc</span>
                        </Link>{' '}
                    </div>
                    <div id="top-menu">
                        <ul className="navPages nav navbar-nav">
                            <li className="moduleMenu active">
                                <NavLink
                                    className="page-unique homepageMenu s123-fast-page-load"
                                    to="/"
                                >
                                    <span className="txt-container">Home</span>
                                </NavLink>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="5fe2922785581">
                                <NavLink to="/services" className="page-unique s123-fast-page-load">
                                    <span className="txt-container">Services</span>
                                </NavLink>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="602ca1383e7e0">
                                <NavLink
                                    to="/2021-sba-loans"
                                    className="page-unique s123-fast-page-load"
                                >
                                    <span className="txt-container">2021 SBA LOANS</span>
                                </NavLink>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="5ffe239aeb0f6">
                                <NavLink
                                    className="page-unique s123-fast-page-load"
                                    to="/business-loan-application-1"
                                >
                                    <span className="txt-container">BUSINESS LOAN</span>
                                </NavLink>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="5ffe239aeb0f6">
                                <NavLink
                                    className="page-unique s123-fast-page-load"
                                    to="/be-an-agent"
                                >
                                    <span className="txt-container">BE AN AGENT</span>
                                </NavLink>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="5ffe239aeb0f6">
                                <NavLink
                                    className="page-unique s123-fast-page-load"
                                    to="/agent-dashboard"
                                >
                                    <span className="txt-container">Agent</span>
                                </NavLink>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="5ffe239aeb0f6">
                                <NavLink
                                    className="page-unique s123-fast-page-load"
                                    to="/admin-panel"
                                >
                                    <span className="txt-container">Admin</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>{' '}
            {/* Sticky Menu */}{' '}
            <input type="hidden" id="stickyMenu" name="stickyMenu" defaultValue="on" />
        </div>
        <nav id="mainNavMobile" className="navbar-fixed-top">
            <div className="navPagesLeft">
                <div className="header-menu-wrapper">
                    <a
                        data-close-location="left"
                        data-menu-color
                        data-menu-type={0}
                        data-menu-align="center"
                        data-is-mobile="true"
                        className="mobile-menu-btn actionButton"
                        role="button"
                        data-container="body"
                        data-toggle="menuCallActionIcons"
                    >
                        <i
                            className="svg-m s123-icon-converter "
                            data-icon-name="bars"
                            style={{
                                mask:
                                    'url("https://static.s123-cdn.com/ready_uploads/svg/bars.svg?v=2")',
                                WebkitMask:
                                    'url("https://static.s123-cdn.com/ready_uploads/svg/bars.svg?v=2")',
                            }}
                            data-ie11-classes
                        >
                            &nbsp;
                        </i>
                    </a>
                </div>
            </div>
            <div className="navbar-header">
                {' '}
                <a
                    href="index"
                    className="logo_name navbar-brand s123-w-l-s page-unique s123-fast-page-load logoStyle_19"
                >
                    <span className="website-name">Loan-Acc</span>
                </a>{' '}
            </div>
            <div className="navPagesRight">
                <ul className="navActions nav navbar-nav">
                    {/* Show header phone */}
                    <li className="header-phone-wrapper">
                        {' '}
                        <a
                            data-close-location="right"
                            className="actionButton"
                            role="button"
                            data-container="body"
                            data-toggle="phone_menuCallActionIcons"
                        >
                            {' '}
                            <i
                                className="svg-m s123-icon-converter fa fa-phone"
                                data-icon-name="phone"
                                style={{
                                    mask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/phone.svg?v=2")',
                                    WebkitMask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/phone.svg?v=2")',
                                }}
                                data-ie11-classes="fa fa-phone"
                            >
                                &nbsp;
                            </i>{' '}
                        </a>{' '}
                    </li>{' '}
                    {/* Show header email */}
                    <li className="header-email-wrapper">
                        <a
                            data-close-location="right"
                            className="actionButton"
                            role="button"
                            data-container="body"
                            data-toggle="email_menuCallActionIcons"
                        >
                            <i
                                className="svg-m s123-icon-converter "
                                data-icon-name="envelope"
                                style={{
                                    mask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/envelope.svg?v=2")',
                                    WebkitMask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/envelope.svg?v=2")',
                                }}
                                data-ie11-classes
                            >
                                &nbsp;
                            </i>
                        </a>
                    </li>{' '}
                    {/* Cart */}
                    <li className="header-cart-wrapper orderOpenCart ">
                        <a className="actionButton btn-primary-action-button-4" role="button">
                            <i
                                className="svg-m s123-icon-converter "
                                data-icon-name="shopping-cart"
                                style={{
                                    mask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/shopping-cart.svg?v=2")',
                                    WebkitMask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/shopping-cart.svg?v=2")',
                                }}
                                data-ie11-classes
                            >
                                &nbsp;
                            </i>
                            <span className="count" />
                        </a>
                    </li>{' '}
                    {/* Login to client zone */}
                    <li className="header-client-zone-wrapper">
                        <a
                            className="client-zone-link"
                            data-close-location="right"
                            href="index4cd7?clientZone=1"
                        >
                            <i
                                className="svg-m s123-icon-converter "
                                data-icon-name="user"
                                style={{
                                    mask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/user.svg?v=2")',
                                    WebkitMask:
                                        'url("https://static.s123-cdn.com/ready_uploads/svg/user.svg?v=2")',
                                }}
                                data-ie11-classes
                            >
                                &nbsp;
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="top-menu-mobile" style={{ display: 'none' }}>
            <ul>
                <li className="moduleMenu active">
                    <a className="page-unique homepageMenu" href="index">
                        <span className="txt-container">Home</span>
                    </a>
                </li>
                <li className="moduleMenu" data-menu-module-id="5fe2922785581">
                    <a className="page-unique" href="services">
                        <span className="txt-container">Services</span>
                    </a>
                </li>
                <li className="moduleMenu" data-menu-module-id="602ca1383e7e0">
                    <a className="page-unique" href="2021-sba-loans">
                        <span className="txt-container">2021 SBA LOANS</span>
                    </a>
                </li>
                <li className="moduleMenu" data-menu-module-id="5ffe239aeb0f6">
                    <a className="page-unique" href="business-loan-application-1">
                        <span className="txt-container">BUSINESS LOAN APPLICATION</span>
                    </a>
                </li>
                <li className="moduleMenu" data-menu-module-id="5ffe2544eb0f7">
                    <a className="page-unique" href="home-mortgage-inquiries">
                        <span className="txt-container">HOME MORTGAGE INQUIRIES</span>
                    </a>
                </li>
                <li className="moduleMenu" data-menu-module-id="5d0a0f53588b1">
                    <a className="page-unique" href="programs">
                        <span className="txt-container">Programs</span>
                    </a>
                </li>
                <li className="moduleMenu" data-menu-module-id="603048d947d7f">
                    <a className="page-unique" href="contact-us-1">
                        <span className="txt-container">Contact US</span>
                    </a>
                </li>
                <li className="moduleMenu separate">__</li>
                <li className="moduleMenu" data-menu-module-id="6007b33af4ea6">
                    <a className="page-unique" href="internal-portal">
                        <span className="txt-container">Internal portal</span>
                    </a>
                </li>
                <li className="moduleMenu" data-menu-module-id="5fe281218557f">
                    <a className="page-unique" href="file-download">
                        <span className="txt-container">File Download</span>
                    </a>
                </li>
            </ul>
        </div>
    </Container>
);

export default NavBar;
