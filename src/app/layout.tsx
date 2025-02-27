import { JSX } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "../components /ui/sidebar.tsx";

export const Layout = (): JSX.Element => {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <Outlet />
    </main>
  );
};
