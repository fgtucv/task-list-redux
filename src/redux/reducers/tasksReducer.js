import tasks from "../../data/tasks.json";

const initialState = {
    tasks: tasks,
    tasksQuality: tasks.length,
    complitedTasksQuelity: tasks.filter((t) => t.completed).length
};

export const tasksReducer = (state = initialState) => {
    return state;
};