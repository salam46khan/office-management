import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const TimeSheetItems = () => {
    const [workTime, setWorkTime] = useState([])
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const openAction = (Id) => {
        setSelectedDepartment(Id);
    };
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    useEffect(() => {
        fetch('/timeSheetData.json')
            .then(res => res.json())
            .then(data => setWorkTime(data))
    }, [])
    // console.log(workTime);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Delete timesheet",
            text: "Are you sure want to delete?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                });
            }
        });
    }

    const handleEdit = (event) => {
        event.preventDefault()
        const form = event.target;
        const project = selectedOption;
        const deadline = form.deadline.value;
        const total = form.total.value;
        const remain = form.remain.value;
        const date = form.date.value;
        const hours = form.hours.value;
        const details = form.details.value;

        const updateWorkTime = {project, deadline, total, remain, date, hours, details}

        console.log(updateWorkTime);
    }
    return (
        <div className="pt-2">
            <div className="flex items-center gap-1">
                <p>shaw</p>
                <select className="border rounded-sm p-1">
                    <option defaultValue selected>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                <p>entries</p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-lg">
                        {/* head */}
                        <thead>
                            <tr className="font-bold text-lg">
                                <th>Name</th>
                                <th>Date</th>
                                <th>Project</th>
                                <th>Assigned Hours</th>
                                <th>Hours</th>
                                <th>Discription</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                workTime?.map(worktime => (
                                    <tr key={worktime.id}>
                                        <th className="flex items-center gap-2">
                                            <div>
                                                <img src={worktime?.avatar} className="h-8 w-8 rounded-full object-cover" alt="" />
                                            </div>
                                            <p className="font-normal ">{worktime?.name}</p>
                                        </th>
                                        <td>{worktime?.date}</td>
                                        <td>{worktime?.project}</td>
                                        <td>{worktime?.assigned_hours}</td>
                                        <td>{worktime?.hours}</td>
                                        <td>{worktime?.description.length > 50 ? worktime.description.slice(0, 50) + '..' : worktime.description}</td>

                                        <td className="relative flex items-end justify-end ">
                                            <button className="p-1 text-xl" onClick={() => openAction(worktime?.id)}><PiDotsThreeOutlineVerticalFill /></button>
                                            {selectedDepartment === worktime?.id && (
                                                <div className="dropdown-menu absolute z-10 top-2/3 right-0 rounded w-full max-w-32 -translate-x-1/3 bg-white flex flex-col items-start p-2">
                                                    <button className="flex items-center gap-2" onClick={() => document.getElementById('edit_department').showModal()}>
                                                        <FaRegEdit />
                                                        <span>Edit</span>
                                                        <div>
                                                            <dialog id="edit_department" className="modal">
                                                                <div className="modal-box w-full max-w-3xl">
                                                                    <form method="dialog">
                                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                    </form>
                                                                    <div>
                                                                        <p className="text-2xl font-semibold text-start">Edit Today Work details</p>

                                                                        <form onSubmit={handleEdit} className="py-3">
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
                                                                                        <input type="date" className="input input-bordered"  placeholder="Date" name="date" required />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="w-1/2">
                                                                                    <div className="form-control">
                                                                                        <label className="label flex">
                                                                                            <span className="label-text">Hours <span className="text-red-600 ml-1">*</span></span>
                                                                                        </label>
                                                                                        <input type="text" className="input input-bordered" defaultValue={worktime?.hours} placeholder="Hours" name="hours" required />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div className="form-control">
                                                                                    <label className="label flex">
                                                                                        <span className="label-text">Description <span className="text-red-600 ml-1">*</span></span>
                                                                                    </label>
                                                                                    <textarea defaultValue={worktime?.description} name="details" className="textarea textarea-bordered" required></textarea>
                                                                                </div>
                                                                            </div>

                                                                            <div className="mt-5 justify-center flex items-center">
                                                                                <input className="btn btn-primary rounded-full px-10 flex items-center text-lg" type="submit" value="Save" />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </dialog>
                                                        </div>
                                                    </button>
                                                    <button className="flex items-center gap-2" onClick={() => handleDelete(worktime.id)}>
                                                        <RiDeleteBin6Line />
                                                        <span>Delete</span>
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TimeSheetItems;