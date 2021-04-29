/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../Admin.css';

const Modal = (props) => {
    const divStyle = {
        display: props.displayModal ? 'block' : 'none',
    };

    const { address, email, id, name, phoneNumber, state, zipcode } = props.agentInfo[0] || {};

    console.log(props);
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
                <h4>
                    Agent ID: <span style={{ color: 'green', fontWeight: 'bold' }}>{id}</span>
                </h4>
                <h4
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        width: '100%',
                        border: '1px dashed grey',
                        padding: '5px',
                        textAlign: 'center',
                        margin: '20px 0px',
                    }}
                >
                    Basic information
                </h4>
                <p>
                    Name: <strong>{name}</strong>
                </p>
                <p>
                    Email: <strong>{email}</strong>
                </p>
                <p>
                    {' '}
                    Phone: <strong>{phoneNumber}</strong>
                </p>
                <p>
                    Address: <strong>{address}</strong>
                </p>
                <p>
                    State: <strong>{state}</strong>
                </p>
                <p>
                    Zipcode: <strong>{zipcode}</strong>
                </p>
            </div>
        </div>
    );
};
export default Modal;
