import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../layout/Roots';
import ErrorPage from '../shared/ErrorPage';
import Departments from '../pages/Departments';
import Dasignation from '../pages/Dasignation';

const MainRouter = createBrowserRouter([

    {
        path: 'dashboard',
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'departments',
                element: <Departments></Departments>
            },
            {
                path: 'designations',
                element: <Dasignation></Dasignation>
            },
            {
                path: 'timesheets',
                element: <p>Timesheets</p>
            },
            {
                path: 'schedule',
                element: <p>Schedule</p>
            },
            {
                path: 'overtime',
                element: <p>Overtime</p>
            }
        ]
    }
])

export default MainRouter;