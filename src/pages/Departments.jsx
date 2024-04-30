import { IoMdAdd } from "react-icons/io";
import DepartmentItems from "../components/DepartmentItems";

const Departments = () => {
    const handleAddDepartment = event => {
        event.preventDefault()
        console.log('add');
    }
    return (
        <div className="bg-base-100 p-4 w-full h-full rounded-md">
            <div className="flex justify-between items-center py-2">
                <div>
                    <p className="text-3xl font-semibold">Departments</p>
                    <p className="font-semibold">Dashboard / Departments</p>
                </div>
                <div>
                    <button onClick={() => document.getElementById('add_department').showModal()} className="btn btn-primary rounded-full flex items-center gap-2 text-lg">
                        <IoMdAdd />
                        <span>Add Departments</span>
                    </button>

                    <div>
                        <dialog id="add_department" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <p className="text-2xl font-semibold text-start">Add Department</p>
                                    <form onSubmit={handleAddDepartment} className="py-3">
                                        <div className="form-control">
                                            <label className="label flex">
                                                <span className="label-text">Department Name <span className="text-red-600 ml-1">*</span></span>

                                            </label>
                                            <input type="text" placeholder="department name" className="input input-bordered" name="name"  required />
                                        </div>
                                        <div className="mt-5 justify-center flex items-center">
                                            <input className="btn btn-primary rounded-full px-10 flex items-center text-lg" type="submit" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

            <div>
                <DepartmentItems></DepartmentItems>
            </div>
        </div>
    );
};

export default Departments;