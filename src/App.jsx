import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'


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

  const addTask = (e) =>{
    // Add task to my list
    // e.preventDefault()
    // setTaskList((prev)=> ({...prev, [e.target.name]:e.target.value}))
    const newTask = {id: uuidv4}
    setTaskList((prev)=>[...prev, formData])
    setFormData({title: "", desc: "", isCompleted: false})
  }
  console.log(taskList)
  
  const updateTask = () =>{
    // Update my list
  }

  const deleteTask = (id) =>{
    const newTaskList = taskList.filter((t)=>t.id!==id)
    setTaskList(newTaskList)
  }

  const markAsCompleteTask = (id) =>{

  }



  return (
    <>
      <form >
        <input type="text"
        name='title'
        onChange={handleChnage}
        value={formData.title} />
        
        <input type="text"
        name='desc'
        onChange={handleChnage}
        value={formData.desc} />
        
        <button type='button' onClick={addTask}>Add Task</button>

      </form>


      <div className="todos">
          <ul>
          {
            taskList.map((task, index)=>(
              <li key={index}>
                <p>Title: {task.title}</p>
                <p>Description: {task.desc}</p>
                <p>{task.isCompleted ? "Completed" : "Not Done yet"}</p>
                <button type="button">MArk as complete</button>
                <button type="button" onClick={deleteTask}>Delet</button>
              </li>
            ))
          }
          </ul>
        </div>

        <div className="completed-tasks">
          <h1>Completed</h1>
        </div>
    </>
  )
}

export default App
