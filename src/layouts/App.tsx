import React from "react";


import { Outlet } from "react-router-dom";
import NavBar from "./Sidebar";


export default function App() {
    const [collapse, setCollapse] = React.useState(false);
    const [hideDrawer, setHideDrawer] = React.useState(false);

    const onCollapse = () => {
        setCollapse(!collapse);
    }

    return (
        <div className="w-full h-full">
            <NavBar/>
            <div className="">
                <div className="grow overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
