import restProvider from 'ra-data-simple-rest';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Container } from 'react-bootstrap';
import AgentCreate from './components/AgentCreate';
import AgentEdit from './components/AgentEdit';
import AgentList from './components/AgentList';
import ApplicationCreate from './components/ApplicationCreate';
import ApplicationEdit from './components/ApplicationEdit';
import ApplicationList from './components/ApplicationList';

function AdminPanel() {
    return (
        <>
            <Container
                fluid
                style={{
                    width: '100%',
                    height: '200px',
                    background: 'skyblue',
                    display: 'flex',
                    WebkitFlexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ fontWeight: 'bold', fontSize: '52px', marginTop: '70px' }}>Admin</h1>
            </Container>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource name="Agents" list={AgentList} create={AgentCreate} edit={AgentEdit} />
                <Resource
                    name="Applications"
                    list={ApplicationList}
                    create={ApplicationCreate}
                    edit={ApplicationEdit}
                />
            </Admin>
        </>
    );
}

export default AdminPanel;
