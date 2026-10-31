import { useSelector } from "react-redux";

import { TaskItem } from "../TaskItem/TaskItem.jsx";

export const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const status = useSelector((state) => state.status);

    const getRenderedtask = (status) => {
        switch (status) {
            case "all":
                return tasks;
            case "active":
                return tasks.filter((t) => !t.completed);
            case "completed":
                return tasks.filter((t) => t.completed);
        }
    };

    const renderdTasks = getRenderedtask(status);

    return (
        <ul className="mt-4">
            {renderdTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
};