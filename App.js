import { useContext } from "react";
import ToDoScreen from "./screens/ToDoScreen";
import AddTask from "./components/AddTask";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {TaskProvider} from "./context/TaskContext";

const ap=createBrowserRouter([
  {
    path:"/",
    element: <ToDoScreen />,
  },
  {
    path: "/add-task",
    element: <AddTask />
  }
])

const App=()=>{
  // const {tasklist, AddNewTask}= useContext(TaskContext)


  return (
    <TaskProvider>
  <RouterProvider router={ap}/>
  </TaskProvider>
  )
}

export default App;