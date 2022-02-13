import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createUser} from "../userHelper/userAPI";
import {observer} from "mobx-react-lite";
import {USER_ROUTE} from "../utils/consts";

const CreateUser = observer(({show, onHide}) =>
{
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [role, setRole] = useState('')

    const addUser = () =>
    {
        const formData = new FormData();
        formData.append('login', login)
        formData.append('password', password)
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('dateOfBirth', dateOfBirth)
        formData.append('role', role)
        createUser(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new user
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Login"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Password"}
                        type={"password"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Name"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Surname"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={dateOfBirth}
                        onChange={e => setDateOfBirth(e.target.value)}
                        className={"mt-2"}
                        placeholder={"DateOfBirth"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={role}
                        onChange={e => setRole(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Role"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant='dark'>Close</Button>
                <Button onClick={addUser} variant='dark' href={USER_ROUTE}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateUser;