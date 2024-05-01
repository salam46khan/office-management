import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../layout/Roots';
import ErrorPage from '../shared/ErrorPage';
import Departments from '../pages/Departments';
import Dasignation from '../pages/Dasignation';
import TimeSheet from '../pages/TimeSheet';
import Overtime from '../pages/Overtime';
import Schedule from '../pages/Schedule';

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
                element: <TimeSheet></TimeSheet>
            },
            {
                path: 'schedule',
                element: <Schedule></Schedule>
            },
            {
                path: 'overtime',
                element: <Overtime></Overtime>
            }
        ]
    }
])

export default MainRouter;