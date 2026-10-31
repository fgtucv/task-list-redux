import { useDispatch } from "react-redux";

import { changeComplitedTaskAtion, deleteAtion } from "../../redux/actions.js";

import deletTask from "../../assets/deletTask.svg"

export const TaskItem = ({task}) => {
    const dispatch = useDispatch();
    
    const onToggle = (taskId) => {
        dispatch(changeComplitedTaskAtion(taskId))
    };

    const onDelete = (taskId) => {
        dispatch(deleteAtion(taskId))
    };

    return (
        <li
            id={task.id}
            className="flex items-center gap-3 border-b border-[#777] py-[22px] last:border-b-0"
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="h-[22px] w-[22px] shrink-0 cursor-pointer accent-[#1a73e8]"
            />

            <h3 className="flex-1 text-base font-normal text-[#222]">{task.text}</h3>

            <button
                type="button"
                onClick={() => onDelete(task.id)}
                className="shrink-0 cursor-pointer p-1 hover:opacity-70"
            >
                <img src={deletTask} alt="Видалити" className="h-4 w-4" />
            </button>
        </li>
    )
};