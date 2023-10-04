import { createSlice } from "@reduxjs/toolkit"


const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],    
  },
  reducers: {
    add_Task: (state, action) => {
      state.todoList.push(action.payload)
      console.log(action.payload);
    },
    updateTask:(state,action) => {
      const tasktoedit = state.todoList.filter((item) => item.id === action.payload.id)
      console.log(action.payload.id);
      console.log(tasktoedit,'vv');
      const updateItem = {...tasktoedit,id:action.payload.id,task:action.payload.task}
      console.log(updateItem,'item');
      state.todoList = state.todoList.map(item => {
          return item.id === action.payload.id ? updateItem : item
      })
    },
    removeTask: (state,action) => {
        const idtoremove = action.payload
        state.todoList = state.todoList.filter((item) => item.id !== idtoremove)
    },
    isComplete: (state,action) => {
      // console.log(action.payload);
      console.log(state.todoList);
        const todo = state.todoList.find((todo) => todo.id === action.payload.id)
        console.log(todo);
        if (todo.isComplete){
          todo.isComplete = false ;
        }else{
          todo.isComplete = true ;
      }
    }
  }
})

export const { add_Task,updateTask,removeTask,isComplete } = todoSlice.actions;


export default todoSlice.reducer;
