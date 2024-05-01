import { IoMdAdd } from "react-icons/io";
import ScheduleItems from "../components/ScheduleItems";

const Schedule = () => {
    return (
        <div className="bg-base-100 p-4 w-full h-full rounded-md">
            <div className="flex justify-between items-center py-2">
                <div>
                    <p className="text-3xl font-semibold">Daily Scheduling</p>
                    <p className="font-semibold">Dashboard / Shift Scheduling</p>
                </div>

            </div>
            <div>
                <ScheduleItems></ScheduleItems>
            </div>
        </div>
    );
};

export default Schedule;