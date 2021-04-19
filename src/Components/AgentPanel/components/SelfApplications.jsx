import React from 'react';
import { Datagrid, DeleteButton, EditButton, EmailField, List, TextField } from 'react-admin';

const SelfApplications = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <EditButton basePath="/Applications" />
                <DeleteButton basePath="/Applications" />
            </Datagrid>
        </List>
    );
};

export default SelfApplications;
