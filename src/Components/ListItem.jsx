import { useRef,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { updateTask,removeTask,isComplete } from '../utils/TodoSlice'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'                           



const ListItem = () => {

  const addedTasks = useSelector(state=> state.todo.todoList)
  // console.log('OOOO',addedTasks);
  const dispatch = useDispatch()
  const [idEdit,setIdEdit] = useState(-1)
  const editRef = useRef(null)
  // console.log(idEdit);

  const editHandler = (e) => {
    // console.log("e",e);
      setIdEdit(-1)

      const updation = editRef.current.value
      console.log(updation);

          dispatch(updateTask({id:e,task:updation,isComplete:false}))
      
  }

  const deleteHandler = (e) => {
      dispatch(removeTask(e))
  }

  const Complete = (e) => {
    console.log(e);
      dispatch(isComplete(e))
  }
  
  const reversedTasks = addedTasks.slice().reverse()
  console.log(reversedTasks,'ooo');

  return (
            <div>
            {addedTasks.map((item,index)=>(
            <div key={index} className='Todo'>
            {idEdit === item.id ? 
              <div key={item.id} >
                  <input name='task' defaultValue={item.task} className='todo-input' autoFocus placeholder='update your task' ref={editRef} required />
                  <button className='todo-btn-submit' onClick={()=>editHandler(item.id)}>Submit</button>
                </div>
              :<div key={item.id} className='loo '>
                {console.log('cccvccc',item.isComplete)}
                {item.isComplete ?

                  <p >{item.task}</p>:
                    <p className='complet' onClick={()=> Complete(item.id)}>{item.task}</p>
                }
              <div className='fonts'>
                  <button className='todo-btn' onClick={()=>setIdEdit(item.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                  <button className='todo-btn'  onClick={()=>deleteHandler(item.id)}><FontAwesomeIcon icon={faTrash}/></button>
              </div>
              </div>}
            </div>
        ))}
        </div>

  )
}

export default ListItem