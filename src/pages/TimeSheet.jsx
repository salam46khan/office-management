import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TimeSheetItems from "../components/TimeSheetItems";

const TimeSheet = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleAddWorkTime = event => {
        event.preventDefault()
        const form = event.target;
        const project = selectedOption;
        const deadline = form.deadline.value;
        const total = form.total.value;
        const remain = form.remain.value;
        const date = form.date.value;
        const hours = form.hours.value;
        const details = form.details.value;

        const timesheets = {deadline, total, remain, date, hours, details, project}

        console.log(timesheets);

    }

    console.log(selectedOption);
    return (
        <div className="bg-base-100 p-4 w-full h-full rounded-md">
            <div className="flex justify-between items-center py-2">
                <div>
                    <p className="text-3xl font-semibold">Time Sheet</p>
                    <p className="font-semibold">Dashboard / Time Sheet</p>
                </div>
                <div>
                    <button onClick={() => document.getElementById('add_timesheet').showModal()} className="btn btn-primary rounded-full flex items-center gap-2 text-lg">
                        <IoMdAdd />
                        <span>Add Today Work</span>
                    </button>

                    <div>
                        <dialog id="add_timesheet" className="modal">
                            <div className="modal-box w-full max-w-3xl">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <p className="text-2xl font-semibold text-start">Add Today work details</p>
                                    <form onSubmit={handleAddWorkTime} className="py-3">
                                        <div className="flex my-2 items-center gap-2 justify-center">
                                            <div className="form-control w-1/2">
                                                <label className="label flex">
                                                    <span className="label-text">Project <span className="text-red-600 ml-1">*</span></span>

                                                </label>
                                                <select name="project" value={selectedOption} onChange={handleSelectChange} className="select select-bordered w-full">
                                                    <option value='marketing'>Marketing</option>
                                                    <option value='webDevelopment'>Web development</option>
                                                    <option value='webDesign'>Web Design</option>
                                                    <option value='ITManagement'>IT Management</option>
                                                    <option value='appDevelopment'>App development</option>
                                                </select>
                                            </div>
                                            <div className="w-1/2"></div>
                                        </div>
                                        <div className="flex justify-center my-2 items-center gap-2">
                                            <div className="w-1/3">
                                                <div className="form-control">
                                                    <label className="label flex">
                                                        <span className="label-text">Deadline <span className="text-red-600 ml-1">*</span></span>
                                                    </label>
                                                    <input type="date" defaultValue={new Date().toISOString().substr(0, 10)} className="input input-bordered input-disabled" name="deadline" required />
                                                </div>
                                            </div>
                                            <div className="w-1/3">
                                                <div className="form-control">
                                                    <label className="label flex">
                                                        <span className="label-text">Total Hours <span className="text-red-600 ml-1">*</span></span>
                                                    </label>
                                                    <input type="text" defaultValue={'100'} className="input input-bordered input-disabled" name="total" required />
                                                </div>
                                            </div>
                                            <div className="w-1/3">
                                                <div className="form-control">
                                                    <label className="label flex">
                                                        <span className="label-text">Remaining Hours <span className="text-red-600 ml-1">*</span></span>
                                                    </label>
                                                    <input type="text" defaultValue={'60'} className="input input-bordered input-disabled" name="remain" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex my-2 items-center gap-2 justify-center">
                                            <div className="form-control w-1/2">
                                                <div className="form-control">
                                                    <label className="label flex">
                                                        <span className="label-text">Date <span className="text-red-600 ml-1">*</span></span>
                                                    </label>
                                                    <input type="date" className="input input-bordered" placeholder="Date" name="date" required />
                                                </div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="form-control">
                                                    <label className="label flex">
                                                        <span className="label-text">Hours <span className="text-red-600 ml-1">*</span></span>
                                                    </label>
                                                    <input type="text" className="input input-bordered" placeholder="Hours" name="hours" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-control">
                                                <label className="label flex">
                                                    <span className="label-text">Description <span className="text-red-600 ml-1">*</span></span>
                                                </label>
                                                <textarea name="details" className="textarea textarea-bordered" required></textarea>
                                            </div>
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
                <TimeSheetItems></TimeSheetItems>
            </div>
        </div>
    );
};

export default TimeSheet;