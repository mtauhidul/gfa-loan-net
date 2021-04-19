import React from 'react';
import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';

const AgentCreate = (props) => {
    return (
        <Create title="Create a Agent" {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <DateInput label="Published" source="publishedAt" />
            </SimpleForm>
        </Create>
    );
};

export default AgentCreate;
