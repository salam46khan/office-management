import { Outlet } from "react-router-dom";
import Logo from "../shared/Logo";
import SideNav from "../shared/SideNav";
import Navbar from "../shared/Navbar";

const Roots = () => {
    return (
        <div className="bg-base-200 h-screen w-full overflow-auto flex">
            <div className="w-[20%] bg-base-100 min-w-[200px] max-w-[300px] p-3 border-r">
                <div>
                    <Logo></Logo>
                    <SideNav></SideNav>
                </div>
                <div>

                </div>
            </div>
            <div className="border flex-1">
                <div className="">
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Roots;