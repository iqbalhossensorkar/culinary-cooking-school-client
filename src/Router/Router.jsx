import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors";
import Classes from "../Pages/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage";
import Signup from "../Pages/Login-signup/Signup";
import Login from "../Pages/Login-signup/Login";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/Dashboard/TeacherDashboard/AddClass";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home />, },
            { path: '/instructors', element: <Instructors />, },
            { path: '/classes', element: <Classes />, },
        ]
    },
    { path: '/signup', element: <Signup />, },
    { path: '/login', element: <Login />, },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            { path: '/dashboard/add-classes', element: <AddClass /> },
            { path: '/dashboard/manage-users', element: <AllUsers /> },
            { path: '/dashboard/manage-classes', element: <ManageClasses /> },
        ]
    },
]);

export default router;