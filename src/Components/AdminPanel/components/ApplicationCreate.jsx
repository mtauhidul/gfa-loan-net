import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const ApplicationCreate = (props) => {
    return (
        <Create title="Create a Application" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="email" />
            </SimpleForm>
        </Create>
    );
};

export default ApplicationCreate;
