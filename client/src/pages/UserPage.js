import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import AllUsers from "../components/AllUsers";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchUser} from "../userHelper/userAPI";
import PagesRouter from "../components/PagesRouter";

const UserPage = observer(() =>
{
    const {users} = useContext(Context)

    useEffect(()=>
    {
        fetchUser().then(data => {
            users.setUsers(data.rows)
            users.setTotalCount(data.count)
        })
    },[])

    useEffect(() =>{
        fetchUser(users.page).then(data =>
        {
            users.setUsers(data.rows)
            users.setTotalCount(data.count)
        })
    },[users.page])

    return (
        <Container>
            <AllUsers />
            <PagesRouter />
        </Container>
    );
});

export default UserPage;
