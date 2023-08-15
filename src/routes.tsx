import React from 'react';

import AuthLayout from "./layouts/Auth";
import Page404 from "./pages/Page404";
import LandingPage from "./pages/Landing";
import HealthcheckPage from "./pages/Healthcheck";

const routes = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "",
                element: <LandingPage/>,
            },
            {
                path: "login",
                element: <>Login page</>,
            },
            {
                path: "register",
                element: <>Register page</>,
            },
            {
                path: "reset",
                element: <>Reset Password page</>,
            },
            {
                path: "healthcheck",
                element: <HealthcheckPage/>,
            },
        ],
    },
    {
        path: "app",
        element: (
            <div>app</div>
        ),
        children: [
            {
                path: "",
                element: <>Protected page</>,
            },
        ],
    },
    {
        path: "*",
        element: <AuthLayout />,
        children: [
            {
                path: "*",
                element: <Page404 />,
            },
        ],
    },
];

export default routes;