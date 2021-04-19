import restProvider from 'ra-data-simple-rest';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Container } from 'react-bootstrap';
import SelfApplications from './components/SelfApplications';

function AgentPanel() {
    return (
        <>
            <Container
                style={{
                    width: '100%',
                    height: '300px',
                    background: 'skyblue',
                    display: 'flex',
                    WebkitFlexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left',
                    alignItems: 'center',
                }}
                className="agent-info"
            >
                <h1
                    style={{
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginTop: '50px',
                    }}
                >
                    Agent Name
                </h1>
                <h3
                    style={{
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#fcf6f5ff',
                    }}
                >
                    Agent ID
                </h3>
            </Container>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource name="Applications" list={SelfApplications} />
            </Admin>
        </>
    );
}

export default AgentPanel;
