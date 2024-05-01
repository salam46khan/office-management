import { IoMdAdd } from "react-icons/io";
import DesignationItems from "../components/DesignationItems";

const Dasignation = () => {
    const handleAddDesignation = event => {
        event.preventDefault()
        const form = event.target;
        const depertment = form.name.value;
        const designation = form.designation.value;

        console.log(designation, depertment);
    }
    return (
        <div className="bg-base-100 p-4 w-full h-full rounded-md">
            <div className="flex justify-between items-center py-2">
                <div>
                    <p className="text-3xl font-semibold">Designations</p>
                    <p className="font-semibold">Dashboard / Designations</p>
                </div>
                <div>
                    <button onClick={() => document.getElementById('add_designation').showModal()} className="btn btn-primary rounded-full flex items-center gap-2 text-lg">
                        <IoMdAdd />
                        <span>Add Designation</span>
                    </button>

                    <div>
                        <dialog id="add_designation" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <p className="text-2xl font-semibold text-start">Add Department</p>
                                    <form onSubmit={handleAddDesignation} className="py-3">
                                        <div className="form-control">
                                            <label className="label flex">
                                                <span className="label-text">Department Name <span className="text-red-600 ml-1">*</span></span>

                                            </label>
                                            <input type="text" placeholder="designation name" className="input input-bordered" name="name" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label flex">
                                                <span className="label-text">Department Name <span className="text-red-600 ml-1">*</span></span>

                                            </label>
                                            <select name="designation" className="select select-bordered w-full">
                                                <option selected>Marketing</option>
                                                <option>Web development</option>
                                                <option>Web Design</option>
                                                <option>IT Management</option>
                                                <option>App development</option>
                                            </select>
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
                <DesignationItems></DesignationItems>
            </div>
        </div>
    );
};

export default Dasignation;