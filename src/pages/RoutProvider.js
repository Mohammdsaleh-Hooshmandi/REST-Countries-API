import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from './Root';
import HomePage from './Home';

const DetailPage = lazy(() => import('./Detail'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/:countryName', element: <Suspense><DetailPage /></Suspense> }
        ]
    }
]);

const RoutsProvider = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default RoutsProvider;