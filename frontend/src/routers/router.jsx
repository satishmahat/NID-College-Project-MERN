import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/homepage/LandingPage'
import EnrollPage from '../pages/homepage/EnrollPage'
import IndividualLogin from '../pages/userpage/IndividualLogin'
import AdminLogin from '../pages/adminpage/AdminLogin'
import UserFormLayout from '../pages/userpage/UserFormLayout'
import PrivateUserRoute from './PrivateUserRoute'
import ApplicationData from '../pages/userpage/ApplicationData'
import ContactDetail from '../pages/userpage/ContactDetail'
import FamilyDetail from '../pages/userpage/FamilyDetail'
import Appointment from '../pages/userpage/Appointment'
import Preview from '../pages/userpage/Preview'
import AdminLayout from '../pages/adminpage/AdminLayout'
import PrivateAdminRoute from './PrivateAdminRoute'

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
        path: "/admindashboard",
        element: <PrivateAdminRoute><AdminLayout/></PrivateAdminRoute>
    },
    {
        path: "/enroll/user-form",
        element: <PrivateUserRoute><UserFormLayout/></PrivateUserRoute>,
        children: [
            {
                path: '',
                element: <ApplicationData/>
            },
            {
                path: 'contact-detail',
                element: <ContactDetail/>
            },
            {
                path: 'family-detail',
                element: <FamilyDetail/>
            },
            {
                path: 'appointment',
                element: <Appointment/>
            },
            {
                path: 'preview',
                element: <Preview/>
            }
        ]
    }
])

export default router