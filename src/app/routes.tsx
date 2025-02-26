import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layout.tsx";
import { SearchPage } from "../pages/SearchPage.tsx";
import { WeatherView } from "../pages/WeatherView.tsx";

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
        {
          path: "/weather/",
          element: <WeatherView />,
          loader: ({ request }) => {
            console.log(request, "params");
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
