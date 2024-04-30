import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../layout/Roots';

const MainRouter = createBrowserRouter([
    {
        path: 'dashboard',
        element: <Roots></Roots>,
        errorElement: <p>error</p>,
        children: [
            {
                path: 'profile',
                element: <p>profile</p>
            },
            {
                path: '',
                element: <p>dashboard</p>
            }
        ]
    }
])

export default MainRouter;