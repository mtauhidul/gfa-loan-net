/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import '../Admin.css';

const SbaModal = (props) => {
    const [sbaData, setSbaData] = useState();
    const divStyle = {
        display: props.displayModal ? 'block' : 'none',
    };

    const { AgentRefID } = props.applicationInfo || {};

    console.log(props.applicationInfo);

    function closeModal(e) {
        e.stopPropagation();
        props.closeModal();
    }
    return (
        <div className="modal" onClick={closeModal} style={divStyle}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <h5>
                        Agent Ref ID:{' '}
                        <span style={{ color: 'green', fontWeight: 'bold' }}>{AgentRefID}</span>
                    </h5>
                    <h5 styler={{ marginRight: '50px', fontWeight: '700' }}>
                        <strong>Status</strong>
                    </h5>
                </div>
                <p
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        width: '100%',
                        borderBottom: '1px dashed grey',
                        padding: '3px',
                        textAlign: 'center',
                        margin: '20px 0px',
                    }}
                >
                    Business Information
                </p>
                <small>Applying as: </small>
                <small>Purpose of loan: </small>
                <small>Business Legal Name: </small>
                <small>Email Address: </small>
                <small>Federal Tax ID: </small>
                <small>DBA: </small>
                <small>Business phone: </small>
                <small>Business start date: </small>
                <small>Business address: </small>
                <small>Address line 2: </small>
                <small>City: </small>
                <small>State: </small>
                <small>Zipcode: </small>
                <small>Monthly revenue: </small>
                <small>PP1 funded amount: </small>
                <small>PPP first SBA number: </small>
                <small>Any open loan or Merchant cash?: </small>
                <small>Any bankruptcy?:{} </small>
                <small>Defaulted or loss to govt?: </small>
                <small>Any other business?: </small>
                <small>AReceived SBA disaster loan ?: </small>
                <p
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        width: '100%',
                        borderBottom: '1px dashed grey',
                        padding: '3px',
                        textAlign: 'center',
                        margin: '20px 0px',
                    }}
                >
                    Merchant/ Owner Information
                </p>
                <small>Owner Name: </small>
                <small>Ownership%: </small>
                <small>SSN: </small>
                <small>FICO: </small>
                <small>Applicant birth date: </small>
                <small>Owner phone: </small>
                <p
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        width: '100%',
                        borderBottom: '1px dashed grey',
                        padding: '3px',
                        textAlign: 'center',
                        margin: '20px 0px',
                    }}
                >
                    Partner Information
                </p>
                <small>Partner Name: </small>
                <small>Ownership%: </small>
                <small>SSN: </small>
                <small>FICO: </small>
                <small>Partner phone: </small>
                <small>Partner birth date: </small>
                <small>Want to process with Loan-acc? : </small>
                <p
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        width: '100%',
                        borderBottom: '1px dashed grey',
                        padding: '3px',
                        textAlign: 'center',
                        margin: '20px 0px',
                    }}
                >
                    Last six months bank statements and photo ID below
                </p>
                <small>Promo code: </small>
                <small>How do you know us? : </small>
            </div>
        </div>
    );
};
export default SbaModal;
