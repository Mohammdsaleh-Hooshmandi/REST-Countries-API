import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Root';
import HomePage from './Home';
import DetailPage from './Detail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/:countryName', element: <DetailPage /> }
        ]
    }
]);

const RoutsProvider = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default RoutsProvider;