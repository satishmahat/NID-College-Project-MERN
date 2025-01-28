import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/homepage/LandingPage'
import EnrollPage from '../pages/homepage/EnrollPage'
import IndividualLogin from '../components/IndividualLogin'
import AdminLogin from '../components/AdminLogin'

const router = createBrowserRouter([

    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/enroll",
        element: <EnrollPage/>,
    },
    {
        path: "/enroll/login",
        element: <IndividualLogin/>
    },
    {
        path: "/enroll/admin",
        element: <AdminLogin/>
    }
])

export default router