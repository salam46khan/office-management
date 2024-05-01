import Scheduletab from "./Scheduletab";

const ScheduleItems = () => {
    return (
        <div className="pt-4">
            <div className="flex w-full items-center gap-3">
                <div className="w-1/2 flex items-center gap-3">
                    <div className="w-1/2 ">
                        <input type="text" placeholder="Empolyee" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Department</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center gap-3">
                    <div className="w-1/3">
                        <div className="border px-3 rounded-md border-gray-300  focus:outline">
                            <label className="label leading-none p-1">
                                <span className="label-text leading-none">From</span>
                            </label>
                            <input type="date" className="focus:border-none leading-none focus:outline-none w-full" name="overtime" required />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="border px-3 rounded-md border-gray-300  focus:outline">
                            <label className="label leading-none p-1">
                                <span className="label-text leading-none">To</span>
                            </label>
                            <input type="date" className="focus:border-none leading-none focus:outline-none w-full" name="overtime" required />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <button className="w-full btn btn-success text-white text-lg">Search</button>
                    </div>
                    
                </div>
            </div>
            <div>
                <Scheduletab></Scheduletab>
            </div>
        </div>
    );
};

export default ScheduleItems;