import React from 'react';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

const AgentEdit = (props) => {
    return (
        <Edit title="Edit Agent" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <DateInput label="Published" source="publishedAt" />
            </SimpleForm>
        </Edit>
    );
};

export default AgentEdit;
