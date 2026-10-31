import { useSelector } from "react-redux";

import { TaskItem } from "../TaskItem/TaskItem.jsx";

export const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <ul className="mt-4">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
};