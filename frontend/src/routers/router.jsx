import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/homepage/LandingPage'
import EnrollPage from '../pages/homepage/EnrollPage'
import IndividualLogin from '../components/IndividualLogin'
import AdminLogin from '../components/AdminLogin'
import UserFormLayout from '../pages/userpage/UserFormLayout'

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
    },
    {
        path: "/enroll/user-form",
        element: <UserFormLayout/>,
        children: [
            {
                path: '',
                element: <div>Application Data</div>
            },
            {
                path: 'contact-detail',
                element: <div>Contact Detail</div>
            },
            {
                path: 'family-detail',
                element: <div>Family Detail</div>
            },
            {
                path: 'appointment',
                element: <div>Appointment</div>
            },
            {
                path: 'preview',
                element: <div>Preview</div>
            }
        ]
    }
])

export default router