import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const ApplicationEdit = (props) => {
    return (
        <Edit title="Edit Application" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
            </SimpleForm>
        </Edit>
    );
};

export default ApplicationEdit;
