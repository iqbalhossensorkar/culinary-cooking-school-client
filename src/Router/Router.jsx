import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors";
import Classes from "../Pages/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/instructors',
            element: <Instructors />,
        },
        {
            path: '/classes',
            element: <Classes />,
        },
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        
    },
  ]);

  export default router;