export const TasksHeader = () => {
    return (
        <header>
            <div>
                <h2>Tasks</h2>
                <span>Active: </span>
                <span>Completed: </span>
            </div>
            <div>
                <h2>Filter by status</h2>
                <div>
                    <button type="button">All</button>
                    <button type="button">Active</button>
                    <button type="button">Completed</button>
                </div>
            </div>
        </header>
    )
};