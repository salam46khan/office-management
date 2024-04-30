import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { HiMiniBars3 } from "react-icons/hi2";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="flex-1 gap-4">
                <div>
                    <button className="btn btn-ghost btn-circle">
                        <HiMiniBars3 className="text-3xl" />
                    </button>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="btn btn-ghost">
                        <p>Create New</p>
                        <IoIosArrowForward className="rotate-90" />
                    </button>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div>
                    <button className="btn btn-ghost btn-circle">
                        <div >
                            <MdOutlineDashboard className="text-3xl rounded-full" />
                        </div>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div>
                            <TbWorld className="text-3xl rounded-full" />
                        </div>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="relative">
                            <IoIosNotificationsOutline className="text-3xl rounded-full" />
                            <span className="absolute -top-1 -right-1 rounded-full flex justify-center items-center bg-red-500 text-white h-5 w-5 ">14</span>
                        </div>
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost flex items-center justify-center avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                        </div>
                        <p className="text-xl">Salam</p>
                        <div className="rotate-90">

                            <IoIosArrowForward />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link>Profile</Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>

                </div>
                <div>
                    <button className="btn btn-ghost btn-circle">
                        <IoSettingsOutline className="text-3xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;