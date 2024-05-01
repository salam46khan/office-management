import { IoMdAdd } from "react-icons/io";
import OvertimeItems from "../components/OvertimeItems";
import { useState } from "react";

const Overtime = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const handleAddOvertime = event => {
        event.preventDefault()
        const form = event.target;
        const employee = selectedOption;
        const date = form.overtime.value;
        const hour = form.hour.value;
        const description = form.description.value;

        const overtimeData = {employee, date, hour, description}
        console.log(overtimeData);
    }

    return (
        <div className="bg-base-100 p-4 w-full h-full rounded-md">
            <div className="flex justify-between items-center py-2">
                <div>
                    <p className="text-3xl font-semibold">Overtimes</p>
                    <p className="font-semibold">Dashboard / overtimes</p>
                </div>
                <div>
                    <button onClick={() => document.getElementById('add_overtime').showModal()} className="btn btn-primary rounded-full flex items-center gap-2 text-lg">
                        <IoMdAdd />
                        <span>Add Overtime</span>
                    </button>
                    <div>
                        <dialog id="add_overtime" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <p className="text-2xl font-bold">Add Overtime</p>
                                    <form onSubmit={handleAddOvertime}>
                                        <div className="form-control">
                                            <label className="label flex">
                                                <span className="label-text">Select Employee <span className="text-red-600 ml-1">*</span></span>

                                            </label>
                                            <select name="name" value={selectedOption} onChange={handleSelectChange} className="select select-bordered w-full">
                                                <option value='doe'>John Doe</option>
                                                <option value='feroz'>Feroz Mahmud</option>
                                                <option value='taimoor'>Dinash Taimoor</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label flex">
                                                <span className="label-text">Overtime Date <span className="text-red-600 ml-1">*</span></span>
                                            </label>
                                            <input type="date" className="input input-bordered" name="overtime" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label flex">
                                                <span className="label-text">Overtime Hours <span className="text-red-600 ml-1">*</span></span>
                                            </label>
                                            <input type="text" className="input input-bordered" name="hour" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label flex">
                                                <span className="label-text">Description <span className="text-red-600 ml-1">*</span></span>
                                            </label>
                                            <textarea name="description" className="textarea textarea-bordered"></textarea>
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
            <div className="flex justify-center items-center w-full gap-5 my-3">
                <div className="w-1/4  p-2 border">
                    <p className="text-center text-xl">Overtime Employee</p>
                    <div className="flex items-end justify-center gap-1">
                        <p className="text-3xl font-semibold">12</p>
                        <p>this month</p>
                    </div>
                </div>
                <div className="w-1/4 p-2 border">
                    <p className="text-center text-xl">Overtime Hours</p>
                    <div className="flex items-end justify-center gap-1">
                        <p className="text-3xl font-semibold">118</p>
                        <p>this month</p>
                    </div>
                </div>
                <div className="w-1/4 p-2 border">
                    <p className="text-center text-xl">Pending Request</p>
                    <div className="flex items-end justify-center gap-1">
                        <p className="text-3xl font-semibold">23</p>
                    </div>
                </div>
                <div className="w-1/4 p-2 border">
                    <p className="text-center text-xl">Rejected</p>
                    <div className="flex items-end justify-center gap-1">
                        <p className="text-3xl font-semibold">5</p>
                    </div>
                </div>

            </div>
            <div>
                <OvertimeItems></OvertimeItems>
            </div>
        </div>
    );
};

export default Overtime;