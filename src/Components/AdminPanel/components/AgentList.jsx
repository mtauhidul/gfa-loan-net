import React from 'react';
import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin';

const AgentList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="publishedAt" />
                <EditButton basePath="/Agents" />
                <DeleteButton basePath="/Agents" />
            </Datagrid>
        </List>
    );
};

export default AgentList;
