import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from './Root';
import HomePage from './Home';

const DetailPage = lazy(() => import('./Detail'));

const router = createBrowserRouter([
    {
        path: '/REST-Countries-API',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/REST-Countries-API/:countryName', element: <Suspense><DetailPage /></Suspense> }
        ]
    }
]);

const RoutsProvider = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default RoutsProvider;