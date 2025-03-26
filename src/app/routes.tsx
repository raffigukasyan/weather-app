import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../pages/home";
import { HomeLoader } from "../pages/loader";

export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: HomeLoader,
      fallbackElement: <div>dsadasd</div>,
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
