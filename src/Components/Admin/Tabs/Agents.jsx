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
import Modal from './Modal';

const Agents = () => {
    const [agentData, setAgentData] = useState([]);
    const db = firebase.firestore();
    const [state, setState] = useState({ modal: false });
    const [agentInfo, setAgentInfo] = useState([]);
    const [value, setValue] = useState();

    const selectModal = (id) => {
        setState({ modal: !state.modal });
        setAgentInfo(agentData.filter((agent) => agent.id === id));
    };

    useEffect(() => {
        const agents = [];
        db.collection('agents')
            .get()
            .then((snapshot) => {
                snapshot.docs.forEach((agent) => {
                    const currentID = agent.id;
                    const appObj = { ...agent.data(), id: currentID };
                    agents.push(appObj);

                    // agents.push(agent.data());
                });
                setAgentData(agents);
            });
    }, [db]);

    const onUpdate = (id) => {
        db.collection('agents').doc(id).update({ status: 'active' });
    };

    const onRemove = (id) => {
        db.collection('agents').doc(id).delete();
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {agentData.map((data) => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.id}</td>
                            <td>{data.status}</td>
                            <td>
                                <div className="App">
                                    <button onClick={() => selectModal(data.id)}>View</button>
                                    <Modal
                                        displayModal={state.modal}
                                        closeModal={() => selectModal()}
                                        agentInfo={agentInfo}
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

export default Agents;
