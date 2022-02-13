import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {checkAdmin, checkUser} from "./userHelper/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() =>
{
    const {users} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() =>
    {
        if (localStorage.getItem('token')){
            if (localStorage.getItem('role') === 'ADMIN'){
            checkAdmin().then(data =>
            {
                users.setIsAdmin(true)
            })}
            checkUser().then(data =>
            {
                users.setIsAuth(true)
            }).finally(() => setLoading(false))
        }
        else setLoading(false)
    }, [])

    if (loading)
    {
        return <Spinner animation={"border"}/>
    }

    return(
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;