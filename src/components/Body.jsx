import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import MovieInfoPage from './MovieInfoPage';
import MoviesByActor from './MoviesByActors';

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
        },
        {
            path: "/castmovie/:id/:name",
            element: <MoviesByActor />,
        }
    ]);

    return (
        <>
        <RouterProvider router={appRouter} />
        </>
    );
};

export default Body;

