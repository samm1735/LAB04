import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { CheckCheck, Plus, Trash2, RotateCcw } from 'lucide-react'


/*- 1.- Add Tasks
  - 2.- Modify tasks (Not necessary)
  - 3.- Delete tasks
  - 4.- Mark as complete
*/

// Use lucide react for the todo app icons


function App() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    isCompleted: false,
  })

  const [taskList, setTaskList] = useState([])

  const  handleChnage = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const addTask = () =>{
    // Add task to my list
    // e.preventDefault()
    // setTaskList((prev)=> ({...prev, [e.target.name]:e.target.value}))
    const newTask = {id: uuidv4(), ...formData}
    setTaskList((prev)=>[...prev, newTask])
    setFormData({title: "", desc: "", isCompleted: false})
  }
  console.log(taskList)
  
  // eslint-disable-next-line no-unused-vars
  const updateTask = () =>{
    // Update my list
  }

  const deleteTask = (id) =>{
    const newTaskList = taskList.filter((t)=>t.id!==id)
    setTaskList(newTaskList)
  }

  const markAsCompleteTask = (id) =>{
    const newTaskList = taskList.map((t)=> t.id ===id ? {...t, isCompleted:  !t.isCompleted} : t )

    setTaskList(newTaskList)
  }



  return (
    <div className="app">

      <h1>SRI's TO-DO APP</h1>
   
      <form>
        <input type="text"
        name='title'
        onChange={handleChnage}
        value={formData.title}
        placeholder="Enter your task's title" />
        
        <input type="text"
        name='desc'
        onChange={handleChnage}
        value={formData.desc}
        placeholder="Enter your task's description" />
        
        <button type='button' onClick={addTask}>
          <Plus /> 
          Add Task

        </button>

      </form>


      <div className="todos">
        <h1>New Tasks</h1>
          <ul>
          {/* J'ai utilisé filter pour n'avoir que les taks non completed
          Les autres tasks seront dans l'autre liste
           */}
          {
            taskList
              .filter(task => !task.isCompleted) 
              .map((task, index) => (
                <li key={index}>
                  <p>Title: {task.title}</p>
                  <p>Description: {task.desc}</p>
                  <p>{task.isCompleted ? "Completed" : "Not Complete"}</p>
                  <button type="button" onClick={() => markAsCompleteTask(task.id)}>
                    <CheckCheck />
                  {task.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
                  </button>
                  <button type="button" onClick={() => deleteTask(task.id)}>
                  <Trash2 />
                  Delete
                  </button>
                </li>
              ))
          }
          </ul>
        </div>

          {/* J'ai utilisé filter pour n'avoir que les taks completed */}
        <div className="completed-tasks">
          <h1>Completed</h1>
          <ul>
          {
          taskList
              .filter(task => task.isCompleted)
              .map((task, index) => (
                <li key={index}>
                  <p>Title: {task.title}</p>
                  <p>Description: {task.desc}</p>
                  <p>{task.isCompleted ? "Completed" : "Not Complete"}</p>
                  <button type="button" onClick={() => markAsCompleteTask(task.id)}>
                  <RotateCcw />
                  {task.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
                  </button>
                  <button type="button" onClick={() => deleteTask(task.id)}>
                  <Trash2 />
                  Delete
                  </button>
                </li>
              ))
          }
          </ul>

        </div>
    </div>
  )
}

export default App
