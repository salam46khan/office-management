import { Outlet } from "react-router-dom";
import Logo from "../shared/Logo";
import Example from "../shared/Example";
import SideNav from "../shared/SideNav";

const Roots = () => {
    return (
        <div className="bg-base-200 h-screen w-full overflow-auto flex">
            <div className="w-[20%] bg-base-100 min-w-[200px] max-w-[300px] p-3 border-r">
                <div>
                    <Logo></Logo>
                    {/* <Example></Example> */}
                    <SideNav></SideNav>
                </div>
                <div>

                </div>
            </div>
            <div>
                <p>head</p>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Roots;