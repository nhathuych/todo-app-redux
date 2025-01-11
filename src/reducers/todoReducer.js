import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todoList: [],
  filter: "ALL",
}

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload
    },
    addTodo: (state, action) => {
      state.todoList.push({
        id: action.payload.id,
        task: action.payload.task,
        isCompleted: true
      })
    },
    toggleCompleted: (state, action) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload.id)

      state.todoList[index].isCompleted = !state.todoList[index].isCompleted
    },
    removeTodo: (state, action) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload.id)

      state.todoList.splice(index, 1) // 2nd parameter means remove one item only.
    },
    updateFilterStatus: (state, action) => {
      state.filter = action.payload.filter
    },
  }
})

export const {
  setTodoList,
  addTodo,
  toggleCompleted,
  removeTodo,
  updateFilterStatus,
} = TodoSlice.actions

export default TodoSlice.reducer
