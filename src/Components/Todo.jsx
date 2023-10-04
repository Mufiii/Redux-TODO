import { useRef } from "react"
import { useDispatch } from "react-redux"
import { add_Task } from "../utils/TodoSlice"
import './style.css'
import ListItem from "./ListItem"



const Todo = () => {

  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let task = inputRef.current.value
    if (task.trim().length !== 0) {
      let id = Math.floor(Math.random() * 1000000)
      dispatch(add_Task({task,id,isComplete:false}))
      inputRef.current.value = ''
    }
  }


  return (
    <div className="TodoWrapper">
      <form onSubmit={handleSubmit}>
      <h1 style={{color:"white"}}>Get Things Done</h1>
        <input className='todo-input' type="text" placeholder="What is Your Task Today ?" name="addtask" ref={inputRef} autoFocus />
        <button className='todo-btn' type="submit">ADD TASK</button>
      </form>
      <ListItem/>


    </div>
  )
}

export default Todo