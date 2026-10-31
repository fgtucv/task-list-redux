import { useDispatch, useSelector } from "react-redux";

import { changeStatusAtion } from "../../redux/actions.js";

export const TasksHeader = () => {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks);

    const onStatus = (status) => {
        dispatch(changeStatusAtion(status))
    };

    return (
        <header className="flex items-start justify-between">
            <div className="text-base leading-5 text-[#222]">
                <h2 className="font-bold">Tasks</h2>
                <span className="block">Active: {tasks.filter((t) => !t.completed).length}</span>
                <span className="block">Completed: {tasks.filter((t) => t.completed).length}</span>
            </div>

            <div className="text-base leading-5 text-[#222]">
                <h2 className="font-bold">Filter by status</h2>
                <div className="mt-1 flex gap-[3px]">
                    <button
                        onClick={() => onStatus("all")}
                        type="button"
                        className="h-9 cursor-pointer rounded-[3px] bg-[#1a73d9] px-3 text-base text-white"
                    >
                        All
                    </button>
                    <button
                        onClick={() => onStatus("active")}
                        type="button"
                        className="h-9 cursor-pointer rounded-[3px] bg-[#e1e4e8] px-3 text-base text-[#333] hover:bg-[#d3d7dc]"
                    >
                        Active
                    </button>
                    <button
                        onClick={() => onStatus("completed")}
                        type="button"
                        className="h-9 cursor-pointer rounded-[3px] bg-[#e1e4e8] px-3 text-base text-[#333] hover:bg-[#d3d7dc]"
                    >
                        Completed
                    </button>
                </div>
            </div>
        </header>
    )
};