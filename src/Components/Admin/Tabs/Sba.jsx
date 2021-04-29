/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import firebase from '../../../firebase';
import '../Admin.css';
import SbaModal from './SbaModal';

const Sba = () => {
    const [applicationData, setApplicationData] = useState([]);
    const db = firebase.firestore();
    const [state, setState] = useState({ modal: false });
    const [applicationInfo, setApplicationInfo] = useState([]);
    const [value, setValue] = useState();

    const selectModal = (id) => {
        setState({ modal: !state.modal });
        setApplicationInfo(applicationData.filter((app) => app.id === id));
    };

    useEffect(() => {
        const applications = [];
        db.collection('sba-applications')
            .get()
            .then((snapshot) => {
                snapshot.docs.forEach((apply) => {
                    const currentID = apply.id;
                    const currentStatus = apply.data().status;
                    const appObj = {
                        ...apply.data().formData,
                        ...apply.data().documents,
                        id: currentID,
                        status: currentStatus,
                    };
                    applications.push(appObj);
                });
                setApplicationData(applications);
            });
    }, [db]);

    const onUpdate = (id) => {
        db.collection('applications').doc(id).update({ status: 'active' });
    };

    const onRemove = (id) => {
        db.collection('applications').doc(id).delete();
    };

    return (
        <div>
            <Table
                striped
                bordered
                hover
                size="sm"
                style={{ horizontalScroll: 'scroll', overflow: 'hidden' }}
            >
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Applicant</th>

                        <th>Agent Ref</th>
                        <th>Status</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applicationData.map((data) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.Owner_First_Name}</td>
                            <td>{data.AgentRefID}</td>
                            <td>{data.status}</td>
                            <td>
                                <div className="App">
                                    <button onClick={() => selectModal(data.id)}>View</button>
                                    <SbaModal
                                        displayModal={state.modal}
                                        closeModal={() => selectModal()}
                                        applicationInfo={data}
                                    />
                                </div>
                            </td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Actions
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu
                                        style={{
                                            width: '100px',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Dropdown.Item
                                            style={{ display: 'block', marginBottom: '10px' }}
                                            href="#/action-1"
                                            onClick={(id) => onUpdate(data.id)}
                                        >
                                            <i className="fas fa-check-circle" /> Approve
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            style={{
                                                color: 'red',
                                                padding: '2px 5px',
                                            }}
                                            onClick={(id) => onRemove(data.id)}
                                            href="#/action-2"
                                        >
                                            <i className="far fa-times-circle" /> Reject
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Sba;
