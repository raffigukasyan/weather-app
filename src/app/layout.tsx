import {JSX} from "react";
import {Outlet} from "react-router";

export const Layout = ():JSX.Element => {
    return (
            <main>
                <Outlet />
            </main>
    )
}