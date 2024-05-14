import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Scheduletab = () => {
    const [schedule, setSchedule] = useState([])
    useEffect(() => {
        fetch('scheduleData.json')
            .then(res => res.json())
            .then(data => setSchedule(data))
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        console.log('update btn is working');
    }

    return (
        <div className="mt-4">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Scheduled Shift</th>
                            <th>Sat</th>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schedule?.map(schedule => (
                                <tr key={schedule.id}>
                                    <td className="flex items-center gap-1">
                                        <div>
                                            <img src={schedule?.img} className="h-8 w-8 object-cover rounded-full" alt="" />
                                        </div>
                                        <p className="text-lg font-normal">{schedule?.name}</p>
                                    </td>
                                    <td>{schedule?.sat?.length > 1 ?
                                        <div className="border p-2 border-dashed border-success">
                                            <p>{schedule?.sat}</p>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={() => document.getElementById('my_sat').showModal()} className="border btn btn-ghost border-dashed p-3">
                                                <FaPlus />
                                            </button>
                                            <div>
                                                <dialog id="my_sat" className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div>
                                                            <p className="text-2xl font-bold">Add Schedule</p>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Employee</span>
                                                                    </label>
                                                                    <input type="text" placeholder="employee" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">From</span>
                                                                    </label>
                                                                    <input type="text" placeholder="from" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">To</span>
                                                                    </label>
                                                                    <input type="text" placeholder="to" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Total</span>
                                                                    </label>
                                                                    <input type="text" placeholder="total" className="input input-bordered" required />
                                                                </div>
                                                                <div className="mt-3 flex justify-center">
                                                                    <input className="btn btn-primary rounded-full" type="submit" value="Submit" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </div>
                                        </div>
                                    }</td>
                                    <td>{schedule?.sun?.length > 1 ?
                                        <div className="border p-2 border-dashed border-success">
                                            <p>{schedule?.sun}</p>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={() => document.getElementById('my_sun').showModal()} className="border btn btn-ghost border-dashed p-3">
                                                <FaPlus />
                                            </button>
                                            <div>
                                                <dialog id="my_sun" className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div>
                                                            <p className="text-2xl font-bold">Add Schedule</p>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Employee</span>
                                                                    </label>
                                                                    <input type="text" placeholder="employee" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">From</span>
                                                                    </label>
                                                                    <input type="text" placeholder="from" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">To</span>
                                                                    </label>
                                                                    <input type="text" placeholder="to" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Total</span>
                                                                    </label>
                                                                    <input type="text" placeholder="total" className="input input-bordered" required />
                                                                </div>
                                                                <div className="mt-3 flex justify-center">
                                                                    <input className="btn btn-primary rounded-full" type="submit" value="Submit" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </div>
                                        </div>
                                    }</td>
                                    <td>{schedule?.mon?.length > 1 ?
                                        <div className="border p-2 border-dashed border-success">
                                            <p>{schedule?.mon}</p>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={() => document.getElementById('my_mon').showModal()} className="border btn btn-ghost border-dashed p-3">
                                                <FaPlus />
                                            </button>
                                            <div>
                                                <dialog id="my_mon" className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div>
                                                            <p className="text-2xl font-bold">Add Schedule</p>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Employee</span>
                                                                    </label>
                                                                    <input type="text" placeholder="employee" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">From</span>
                                                                    </label>
                                                                    <input type="text" placeholder="from" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">To</span>
                                                                    </label>
                                                                    <input type="text" placeholder="to" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Total</span>
                                                                    </label>
                                                                    <input type="text" placeholder="total" className="input input-bordered" required />
                                                                </div>
                                                                <div className="mt-3 flex justify-center">
                                                                    <input className="btn btn-primary rounded-full" type="submit" value="Submit" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </div>
                                        </div>
                                    }</td>
                                    <td>{schedule?.tue?.length > 1 ?
                                        <div className="border p-2 border-dashed border-success">
                                            <p>{schedule?.tue}</p>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={() => document.getElementById('my_tue').showModal()} className="border btn btn-ghost border-dashed p-3">
                                                <FaPlus />
                                            </button>
                                            <div>
                                                <dialog id="my_tue" className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div>
                                                            <p className="text-2xl font-bold">Add Schedule</p>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Employee</span>
                                                                    </label>
                                                                    <input type="text" placeholder="employee" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">From</span>
                                                                    </label>
                                                                    <input type="text" placeholder="from" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">To</span>
                                                                    </label>
                                                                    <input type="text" placeholder="to" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Total</span>
                                                                    </label>
                                                                    <input type="text" placeholder="total" className="input input-bordered" required />
                                                                </div>
                                                                <div className="mt-3 flex justify-center">
                                                                    <input className="btn btn-primary rounded-full" type="submit" value="Submit" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </div>
                                        </div>
                                    }</td>
                                    <td>{schedule?.wed?.length > 1 ?
                                        <div className="border p-2 border-dashed border-success">
                                            <p>{schedule?.wed}</p>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={() => document.getElementById('my_wed').showModal()} className="border btn btn-ghost border-dashed p-3">
                                                <FaPlus />
                                            </button>
                                            <div>
                                                <dialog id="my_wed" className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div>
                                                            <p className="text-2xl font-bold">Add Schedule</p>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Employee</span>
                                                                    </label>
                                                                    <input type="text" placeholder="employee" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">From</span>
                                                                    </label>
                                                                    <input type="text" placeholder="from" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">To</span>
                                                                    </label>
                                                                    <input type="text" placeholder="to" className="input input-bordered" required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Total</span>
                                                                    </label>
                                                                    <input type="text" placeholder="total" className="input input-bordered" required />
                                                                </div>
                                                                <div className="mt-3 flex justify-center">
                                                                    <input className="btn btn-primary rounded-full" type="submit" value="Submit" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </div>
                                        </div>
                                    }</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Scheduletab;