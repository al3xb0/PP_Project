import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const {users} = useContext(Context)

    const logOut = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        users.setIsAuth(false)
        users.setIsAdmin(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>My project</Navbar.Brand>
                <Nav className="ml-auto">
                    <NavLink href="/">Users</NavLink>
                    {!users.isAuth ?
                        <NavLink href={LOGIN_ROUTE}>
                            Log In
                        </NavLink>
                        :
                        <NavLink onClick={() => logOut()} href={LOGIN_ROUTE}>
                            Log Out
                        </NavLink>
                    }

                    {!users.isAuth ?
                        <NavLink href={REGISTER_ROUTE}>
                            Register
                        </NavLink>
                        :
                        <div>
                        </div>
                    }
                    {users.isAdmin ?
                        <NavLink href={ADMIN_ROUTE}>
                            AdminPanel
                        </NavLink>
                        :
                        <div>
                        </div>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;