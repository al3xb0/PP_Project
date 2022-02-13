import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {loginUser, registerUser} from "../userHelper/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router";


const RegisterPage = observer(() =>
{
    const {users} = useContext(Context)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const navigate = useNavigate()

    const registerHandler = async () => {
        try {
            let user = await registerUser(login, password, name, surname, dateOfBirth)
            users.setData(user)
            navigate('/login')
        } catch (e) {
            alert(e)
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-100}}
        >
            <Card style={{width: 600}} className="p-4">
                <h1 className="m-auto">
                    Registration
                </h1>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Surname"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Date of Birth"
                        value={dateOfBirth}
                        onChange={e => setDateOfBirth(e.target.value)}
                    >
                    </Form.Control>
                    <Button
                        onClick={registerHandler}
                        className="mt-3 btn grey darken-2"
                        variant='dark'>
                        Register
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default RegisterPage;