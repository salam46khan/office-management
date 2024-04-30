import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LiaUserSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";



const SideNav = () => {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <div className="h-full w-full p-4">
                <ul className="space-y-2">
                    <li>
                        <NavLink to={''}>
                            <div className="flex gap-2 justify-start items-center">
                                <MdOutlineDashboard className="text-xl" />
                                <p>Dashboard</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <div onClick={() => setOpen(!open)} className="flex justify-between items-center cursor-pointer">
                            <div className="flex gap-2 justify-start items-center">
                                <LiaUserSolid className="text-xl" />
                                <p>Employees</p>
                            </div>
                            <div>
                                <div className={`${open ? 'rotate-90' : 'rotate-0'} text-md duration-200`}>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                        {
                            open ? (
                                <ul className="pl-4 pt-1 space-y-1">
                                    <li>
                                        <NavLink to={'departments'} className='flex items-center space-x-1'>
                                            <IoIosArrowForward />
                                            <p>Departments</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'designations'} className='flex items-center space-x-1'>
                                            <IoIosArrowForward />
                                            <p>Designations</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'timesheets'} className='flex items-center space-x-1'>
                                            <IoIosArrowForward />
                                            <p>Timesheets</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'schedule'} className='flex items-center space-x-1'>
                                            <IoIosArrowForward />
                                            <p>Shift & Schedule</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'overtime'} className='flex items-center space-x-1'>
                                            <IoIosArrowForward />
                                            <p>Overtime</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            ) :
                                ''
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;