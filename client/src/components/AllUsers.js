import React, {useContext, useState} from 'react';
import {Table} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AllUsers = observer(() =>
{
    const {users} = useContext(Context)
    const Deleted = async () => {
        try {

        } catch (e) {
            
        }
    }
    return (
        <Table striped bordered hover size="sm" variant='dark' className="m-md-2" >
            <thead>
            <tr>
                <th data-field="id">ID</th>
                <th data-field="login">Login</th>
                <th data-field="name">Name</th>
                <th data-field="surname">Surname</th>
                <th data-field="dateOfBirth">DateOfBirth</th>
                <th data-field="role">Role</th>
                <th data-field="isDeleted">IsDeleted</th>
            </tr>
            </thead>
            <tbody>
                {users.users.map(type =>
                    <tr
                        key={type.id}
                    >
                        <td> {type.id}</td>
                        <td> {type.login}</td>
                        <td> {type.name}</td>
                        <td> {type.surname}</td>
                        <td> {type.dateOfBirth}</td>
                        <td> {type.role}</td>
                        <td > {type.isDeleted}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
});

export default AllUsers;