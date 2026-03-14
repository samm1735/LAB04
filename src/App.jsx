import { useState } from 'react'
import './App.css'


// 1

function App() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    isCompleted: false,
  })

  const [taskList, setTaskList] = useState()

  const  handleChnage = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const addTask = () =>{
    // Add task to my list
    setTaskList((prev)=> ({...prev, [e.target.name]:e.target.value}))
  }
  console.log(taskList)
  
  const updateTask = () =>{
    // Update my list
  }



  return (
    <>
      <form >
        <input type="text"
        name='title'
        onChange={handleChnage}
        value={formData.value} />
        
        <input type="text"
        name='desc'
        onChange={handleChnage}
        value={formData.value} />

        <div className="todos">
          <ul>
          {
            taskList.map((task, index)=>{
              <li key={index}>
                Title: {task.title}
              </li>
            })
          }
          </ul>
        </div>

      </form>
    </>
  )
}

export default App
