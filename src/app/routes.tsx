import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../pages/Home/home";
import { HomeLoader } from "../pages/Home/loader";

export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: HomeLoader,
      //children: [
      //  {
      //    path: "/search",
      //    element: <SearchPage />,
      //  },
      //  {
      //    path: "/weather/",
      //    element: <WeatherView />,
      //    loader: WeatherLoader
      //  },
      //],
    },
  ]);
  return <RouterProvider router={routes} />;
}
