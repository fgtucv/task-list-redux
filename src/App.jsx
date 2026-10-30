import { TasksHeader } from "./components/TasksHeader/TasksHeader.jsx";
import { AddTask } from "./components/AddTask/AddTask.jsx";
import { TaskList } from "./components/TasksList/TasksList.jsx";

function App() {
  return (
    <>
      <TasksHeader/>
      <AddTask/>
      <TaskList/>
    </>
  )
}

export default App