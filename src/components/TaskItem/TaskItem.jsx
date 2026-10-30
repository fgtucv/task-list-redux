import deletTask from "../../assets/deletTask.svg"

export const TaskItem = () => {
    return (
        <li>
            <input type="checkbox" />
            <h3></h3>
            <button type="button">{deletTask}</button>
        </li>
    )
};