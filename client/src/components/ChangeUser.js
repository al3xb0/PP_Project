import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {changeUser} from "../userHelper/userAPI";
import {observer} from "mobx-react-lite";
import {USER_ROUTE} from "../utils/consts";

const ChangeUser = observer(({show, onHide}) => {
    const [ids, setIds] = useState('')
    const [logins, setLogins] = useState('')
    const [passwords, setPasswords] = useState('')
    const [names, setNames] = useState('')
    const [surnames, setSurnames] = useState('')
    const [dateOfBirths, setDateOfBirths] = useState('')
    const [roles, setRoles] = useState('')

    const changeUserInfo = () => {
        const formData = new FormData();
        formData.append('id', ids)
        if (logins) {formData.append('login', logins)}
        if (passwords) {formData.append('password', passwords)}
        if (names) {formData.append('name', names)}
        if (surnames) {formData.append('surname', surnames)}
        if (dateOfBirths) {formData.append('dateOfBirth', dateOfBirths)}
        if (roles) {formData.append('role', roles)}
        changeUser(formData).then(data => onHide())
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
                    Change user information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={ids}
                        onChange={e => setIds(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Id"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={logins}
                        onChange={e => setLogins(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Login"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={passwords}
                        onChange={e => setPasswords(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Password"}
                        type={"password"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={names}
                        onChange={e => setNames(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Name"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={surnames}
                        onChange={e => setSurnames(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Surname"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={dateOfBirths}
                        onChange={e => setDateOfBirths(e.target.value)}
                        className={"mt-2"}
                        placeholder={"DateOfBirth"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={roles}
                        onChange={e => setRoles(e.target.value)}
                        className={"mt-2"}
                        placeholder={"Role"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant='dark'>Close</Button>
                <Button onClick={changeUserInfo} variant='dark' href={USER_ROUTE}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ChangeUser;