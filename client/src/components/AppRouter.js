import React, {useContext} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() =>
{
    const {users} = useContext(Context)

    return (
        <Routes>
            {users.isAuth && users.isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
});

export default AppRouter;