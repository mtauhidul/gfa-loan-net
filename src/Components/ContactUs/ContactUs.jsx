import React from 'react';

const ContactUs = () => {
    return (
        <section
            id="section-603048d947d7f"
            className="s123-module s123-module-contact layout-4 bg-primary"
            data-module-id="603048d947d7f"
            data-module-type-num={7}
            style={{ marginTop: '100px', marginBottom: '100px' }}
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
                        <li data-module-id="603048d947d7f" className="active">
                            Contact US
                        </li>
                    </ol>
                </div>
                <div style={{ marginTop: '50px' }} className="row">
                    <div className="container">
                        <div className="row modulesTitle">
                            <div className="col-xs-12 text-center">
                                <h1 id="section-603048d947d7f-title" className="s123-page-header">
                                    Contact US
                                </h1>
                                <hr className="small" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-5 preview-highlighter" style={{ textAlign: 'center' }}>
                        <ul className="list-unstyled contact-as-details-container">
                            <li>NY Office: 199 Water Street, 34th Floor, New York, NY 10038</li>
                            <li>DE Office: 651 N Broad St, STE 205 #4262, Middletown, DE 19709</li>
                        </ul>
                        <ul className="list-unstyled contact-as-details-container">
                            <li>
                                <a href="tel:(646)866-6966">
                                    <i
                                        className="svg-m s123-icon-converter "
                                        data-icon-name="phone"
                                        style={{
                                            mask:
                                                'url("https://static.s123-cdn.com/ready_uploads/svg/phone.svg?v=2")',
                                            WebkitMask:
                                                'url("https://static.s123-cdn.com/ready_uploads/svg/phone.svg?v=2")',
                                        }}
                                        data-ie11-classes
                                    >
                                        &nbsp;
                                    </i>
                                    <span dir="ltr">(646)866-6966</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@loan-acc.net">
                                    <i
                                        className="svg-m s123-icon-converter  fa-fw"
                                        data-icon-name="envelope-o"
                                        style={{
                                            mask:
                                                'url("https://static.s123-cdn.com/ready_uploads/svg/envelope-o.svg?v=2")',
                                            WebkitMask:
                                                'url("https://static.s123-cdn.com/ready_uploads/svg/envelope-o.svg?v=2")',
                                        }}
                                        data-ie11-classes=" fa-fw"
                                    >
                                        &nbsp;
                                    </i>
                                    info@loan-acc.net
                                </a>
                            </li>
                            <li className="open_hours_field">
                                <i
                                    className="svg-m s123-icon-converter fa-fw"
                                    data-icon-name="clock-o"
                                    style={{
                                        mask:
                                            'url("https://static.s123-cdn.com/ready_uploads/svg/clock-o.svg?v=2")',
                                        WebkitMask:
                                            'url("https://static.s123-cdn.com/ready_uploads/svg/clock-o.svg?v=2")',
                                    }}
                                    data-ie11-classes="fa-fw"
                                >
                                    &nbsp;
                                </i>
                                Mon-Fri - 10:30am - 5:00pm Fax: (888) 487-9997
                            </li>
                        </ul>
                    </div>
                    <form
                        className="breakable contactUsForm "
                        data-date-format="m/d/Y"
                        data-click-action="thankYouMessage"
                        noValidate="novalidate"
                    >
                        <div className="preview-highlighter col-md-6 col-md-offset-1">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="contact_name"
                                            placeholder="Name"
                                            className="form-control"
                                            required
                                            data-msg-required="This field is required."
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="contact_phone"
                                            placeholder="Phone"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="contact_email"
                                    placeholder="Email address"
                                    className="form-control s123-force-ltr"
                                    required
                                    data-msg-required="This field is required."
                                    data-rule-email="true"
                                    data-msg-email="Please enter a valid email."
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    name="contact_message"
                                    placeholder="Message"
                                    style={{ minHeight: 100 }}
                                    defaultValue=""
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Contact Us
                            </button>
                        </div>
                        <input type="hidden" name="w" defaultValue />
                        <input type="hidden" name="websiteID" defaultValue={4695099} />
                        <input type="hidden" name="moduleID" defaultValue="603048d947d7f" />
                        <input type="hidden" name="layout" defaultValue={4} />
                        <input type="hidden" name="recaptchaToken" defaultValue />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
