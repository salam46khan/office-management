import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const DesignationItems = () => {
    const [designation, setDesignation] = useState([])
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const openAction = (Id) => {
        setSelectedDepartment(Id);
    };


    useEffect(() => {
        fetch('/public/designationData.json')
            .then(res => res.json())
            .then(data => setDesignation(data))
    }, [])
    console.log(designation);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Delete Department",
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
        const departmentName = event.target.name.value;
        console.log(departmentName, 'update');
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
                            <tr className="text-lg font-bold">
                                <th>#</th>
                                <th>Department</th>
                                <th>Designations</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                designation?.map((designation, index) => (
                                    <tr key={designation.id}>
                                        <th>{index + 1}</th>
                                        <td>{designation?.department}</td>
                                        <td>{designation?.designation}</td>


                                        <td className="relative flex items-end justify-end ">
                                            <button className="p-1 text-xl" onClick={() => openAction(designation.id)}><PiDotsThreeOutlineVerticalFill /></button>
                                            {selectedDepartment === designation.id && (
                                                <div className="dropdown-menu absolute z-10 top-2/3 right-0 rounded w-full max-w-32 -translate-x-1/3 bg-white flex flex-col items-start p-2">
                                                    <button className="flex items-center gap-2" onClick={() => document.getElementById('edit_designation').showModal()}>
                                                        <FaRegEdit />
                                                        <span>Edit</span>
                                                        <div>
                                                            <dialog id="edit_designation" className="modal">
                                                                <div className="modal-box">
                                                                    <form method="dialog">
                                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                    </form>
                                                                    <div>
                                                                        <p className="text-2xl font-semibold text-start">Edit Department</p>
                                                                        <form onSubmit={handleEdit} className="py-3">
                                                                            <div className="form-control">
                                                                                <label className="label flex">
                                                                                    <span className="label-text">Department Name <span className="text-red-600 ml-1">*</span></span>

                                                                                </label>
                                                                                <input type="text" defaultValue={designation?.department} placeholder="designation name" className="input input-bordered" name="name" required />
                                                                            </div>
                                                                            <div className="form-control">
                                                                                <label className="label flex">
                                                                                    <span className="label-text">Department Name <span className="text-red-600 ml-1">*</span></span>

                                                                                </label>
                                                                                <select name="designation" defaultValue={designation?.designation} className="select select-bordered w-full">
                                                                                    <option>Marketing</option>
                                                                                    <option>Web development</option>
                                                                                    <option>Web Design</option>
                                                                                    <option>IT Management</option>
                                                                                    <option>App development</option>
                                                                                </select>
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
                                                    <button className="flex items-center gap-2" onClick={() => handleDelete(designation.id)}>
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

export default DesignationItems;