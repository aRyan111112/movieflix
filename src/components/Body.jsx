import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import MovieInfoPage from './MovieInfoPage';

const Body = () => {
    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/movieInfoPage/:id",
            element: <MovieInfoPage />
        }
    ]);


    return (
        <RouterProvider router={appRouter} />
    );
};

export default Body;

