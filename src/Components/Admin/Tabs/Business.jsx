/* eslint-disable react/button-has-type */
import React from 'react';
import { Table } from 'react-bootstrap';

const Business = () => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                        <td>test@testmail.com</td>
                        <td>test1234</td>
                        <td>
                            <button>status</button>
                        </td>
                        <td>
                            <button>view</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>test@testmail.com</td>
                        <td>test1234</td>
                        <td>
                            <button>status</button>
                        </td>
                        <td>
                            <button>view</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Test</td>
                        <td>test@testmail.com</td>
                        <td>test1234</td>
                        <td>
                            <button>status</button>
                        </td>
                        <td>
                            <button>view</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Business;
