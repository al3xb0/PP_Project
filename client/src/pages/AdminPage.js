import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import PagesRouter from "../components/PagesRouter";
import CreateUser from "../components/CreateUser";
import DeleteUser from "../components/DeleteUser";
import ChangeUserInfo from "../components/ChangeUser";
import {observer} from "mobx-react-lite";

const AdminPage = observer(() =>
{
    const [addUserVisible, setAddUserVisible] = useState(false)
    const [deleteUserVisible, setDeleteUserVisible] = useState(false)
    const [changeUserInfoVisible, setChangeUserInfoVisible] = useState(false)
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center"
            style={{height: window.innerHeight-60}}
        >
            <PagesRouter />
            <Button className="m-md-2"
                    onClick={() => setAddUserVisible(true)}
                    variant='dark'>
                Add new user
            </Button>
            <Button className="m-md-2"
                    onClick={() => setDeleteUserVisible(true)}
                    variant='dark'>
                Delete user
            </Button>
            <Button className="m-md-2"
                    onClick={() => setChangeUserInfoVisible(true)}
                    variant='dark'>
                Change user information
            </Button>
            <CreateUser show={addUserVisible} onHide={() =>setAddUserVisible(false)}/>
            <DeleteUser show={deleteUserVisible} onHide={() =>setDeleteUserVisible(false)}/>
            <ChangeUserInfo show={changeUserInfoVisible} onHide={() =>setChangeUserInfoVisible(false)}/>
        </Container>
    );
});

export default AdminPage;