import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, USER_ROUTE} from "./utils/consts";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: USER_ROUTE,
        Component: UserPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
]