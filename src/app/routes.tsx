import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layout.tsx";
import { SearchPage } from "../pages/SearchPage.tsx";

export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/search",
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
