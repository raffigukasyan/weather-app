import {createBrowserRouter, RouterProvider} from "react-router";
import {Layout} from "./layout.tsx";
import {Home} from "../pages/Home.tsx";

export default function AppRouter() {
    const routes = createBrowserRouter([
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                ]
            },
        ]
    )

    return <RouterProvider router={routes} />
}
