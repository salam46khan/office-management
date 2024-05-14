import { useEffect, useState } from "react";
import { FaRegDotCircle, FaRegEdit } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const OvertimeItems = () => {
    const [overtime, setOvertime] = useState([])
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const openAction = (Id) => {
        setSelectedDepartment(Id);
    };
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        fetch('/overtimeData.json')
            .then(res => res.json())
            .then(data => setOvertime(data))
    }, [])

    console.log(selectedOption);

    const handleUpdateOvertime = event => {
        event.preventDefault()
        console.log('ok');
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Delete Overtime",
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
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>OT Date</th>
                                <th>OT Hours</th>
                                <th>OT Type</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Approved By</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                overtime?.map(overtime => (
                                    <tr key={overtime.id}>
                                        <td className="flex items-center gap-1">
                                            <div>
                                                <img src={overtime?.avatar} className="h-8 w-8 object-cover rounded-full" alt="" />
                                            </div>
                                            <p className="text-lg font-normal">{overtime?.name}</p>
                                        </td>
                                        <td>{overtime?.OT_date}</td>
                                        <td>{overtime?.OT_hour}</td>
                                        <td>{overtime?.OT_type}</td>
                                        <td>{overtime?.description}</td>
                                        <td>
                                            <button className="border rounded-full py-2 px-3 flex justify-center items-center gap-2">
                                                <FaRegDotCircle className="text-primary text-xl" />
                                                <span>{overtime?.status}</span>
                                            </button>
                                        </td>
                                        <td className="flex items-center gap-1 ">
                                            <div>
                                                <img src={overtime?.approve_img} className="h-8 w-8 object-cover rounded-full" alt="" />
                                            </div>
                                            <p className="text-lg font-normal">{overtime?.approve_name}</p>
                                        </td>

                                        <td>
                                            <div className="relative flex items-end justify-end h-full w-full ">
                                                <button className="p-1 text-xl" onClick={() => openAction(overtime.id)}><PiDotsThreeOutlineVerticalFill /></button>

                                                {selectedDepartment === overtime.id && (
                                                    <div className="dropdown-menu absolute z-10 top-2/3 right-0 rounded w-full max-w-32 -translate-x-1/3 bg-white flex flex-col items-start p-2">
                                                        <button className="flex items-center gap-2" onClick={() => document.getElementById('edit_overtime').showModal()}>
                                                            <FaRegEdit />
                                                            <span>Edit</span>
                                                            <div>
                                                                <dialog id="edit_overtime" className="modal">
                                                                    <div className="modal-box">
                                                                        <form method="dialog">
                                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                        </form>
                                                                        <div>
                                                                            <p className="text-2xl font-semibold text-start">Edit Overtime</p>

                                                                            <form onSubmit={handleUpdateOvertime}>
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
                                                                                    <input type="text" defaultValue={overtime?.OT_hour} className="input input-bordered" name="hour" required />
                                                                                </div>
                                                                                <div className="form-control">
                                                                                    <label className="label flex">
                                                                                        <span className="label-text">Description <span className="text-red-600 ml-1">*</span></span>
                                                                                    </label>
                                                                                    <textarea defaultValue={overtime?.description} name="description" className="textarea textarea-bordered"></textarea>
                                                                                </div>
                                                                                <div className="mt-5 justify-center flex items-center">
                                                                                    <input className="btn btn-primary rounded-full px-10 flex items-center text-lg" type="submit" value="Submit" />
                                                                                </div>
                                                                            </form>


                                                                        </div>
                                                                    </div>
                                                                </dialog>
                                                            </div>
                                                        </button>
                                                        <button className="flex items-center gap-2" onClick={() => handleDelete(overtime.id)}>
                                                            <RiDeleteBin6Line />
                                                            <span>Delete</span>
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>

                                        {/* <td className="relative flex items-end justify-end bg-red-200">
                                            <button className="p-1 text-xl" onClick={() => openAction(overtime.id)}><PiDotsThreeOutlineVerticalFill /></button>
                                            {selectedDepartment === overtime.id && (
                                                <div className="dropdown-menu absolute z-10 top-2/3 right-0 rounded w-full max-w-32 -translate-x-1/3 bg-white flex flex-col items-start p-2">
                                                    <button className="flex items-center gap-2" onClick={() => document.getElementById('edit_overtime').showModal()}>
                                                        <FaRegEdit />
                                                        <span>Edit</span>
                                                        <div>
                                                            <dialog id="edit_overtime" className="modal">
                                                                <div className="modal-box">
                                                                    <form method="dialog">
                                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                    </form>
                                                                    <div>
                                                                        <p className="text-2xl font-semibold text-start">Edit Department</p>

                                                                    </div>
                                                                </div>
                                                            </dialog>
                                                        </div>
                                                    </button>
                                                    <button className="flex items-center gap-2" onClick={() => handleDelete(overtime.id)}>
                                                        <RiDeleteBin6Line />
                                                        <span>Delete</span>
                                                    </button>
                                                </div>
                                            )}
                                        </td> */}


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

export default OvertimeItems;