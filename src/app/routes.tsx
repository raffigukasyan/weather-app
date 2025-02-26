import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layout.tsx";
import { SearchPage } from "../pages/SearchPage.tsx";
import {WeatherView} from "../pages/Weather/WeatherView.tsx";
import {WeatherLoader} from "../pages/Weather/loader.tsx";

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
          loader: WeatherLoader
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
