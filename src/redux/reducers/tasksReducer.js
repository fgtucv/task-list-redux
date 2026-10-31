import tasks from "../../data/tasks.json";

const initialState = {
    tasks: tasks,
    status: "all"
};

export const tasksReducer = (state = initialState, action) => {
    if (action.type === "change") {
        const newTasks = state.tasks.map((task) => {
            if (task.id === action.id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        });

        return {
            ...state,
            tasks: newTasks
        }
    } else if (action.type === "add") {
        const newTaskId = state.tasks.at(-1) ? state.tasks.at(-1).id + 1 : 1;

        return {
            ...state,
            tasks: [...state.tasks, { id: newTaskId, text: action.text, completed: false }],
        }
    } else if (action.type === "delete") {
        return { ...state, tasks: state.tasks.filter((t) => t.id !== action.id) }
    } else if (action.type === "status") {
        return { ...state, status: action.status }
    } else {
        return state;
    }
};