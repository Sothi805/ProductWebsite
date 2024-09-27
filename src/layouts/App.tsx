

import { Outlet } from "react-router-dom";
import NavBar from "./Sidebar";


export default function App() {
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
