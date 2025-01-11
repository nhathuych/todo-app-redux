import { useEffect, useRef } from "react"
import FillterOptions from "./FillterOptions"
import TodoItem from "./TodoItem"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, updateFilterStatus, removeTodo, setTodoList, toggleCompleted } from "../reducers/todoReducer"
import NoDataImage from "../assets/images/empty.svg"

const TodoFrame = () => {
  const TODO_LIST_LOCAL_STORAGE_KEY = "todoList"
  const inputTodo = useRef()

  const dispatch = useDispatch()
  const storedTodoList = JSON.parse(localStorage.getItem(TODO_LIST_LOCAL_STORAGE_KEY))

  // Get variables defined in initialState (in todoReducer.js).
  const todoList = useSelector((state) => state.todos.todoList) // get todo list from Redux store.
  const filter = useSelector((state) => state.todos.filter) // get filter from Redux store.

  const handleAddTodo = () => {
    const task = inputTodo.current.value.trim()

    if (task.length === 0) return alert("Please enter a new task.")

    dispatch(addTodo({
      task: task,
      id: Date.now(),
      isCompleted: false
    }))

    resetInput()
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }))
  }

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted({ id }))
  }

  const handleUpdateFilterStatus = (filter) => {
    dispatch(updateFilterStatus({ filter }))
  }

  const resetInput = () => {
    inputTodo.current.value = ''
    inputTodo.current.focus()
  }

  useEffect(() => {
    localStorage.setItem(TODO_LIST_LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList])

  useEffect(() => {
    if (storedTodoList) {
      dispatch(setTodoList(storedTodoList))
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto bg-slate-100 rounded sm:my-6 p-4">
      {/* title */}
      <h2 className="text-2xl font-semibold text-center uppercase mt-3 mb-6">Todo List using redux</h2>

      {/* input area */}
      <div className='flex items-center bg-gray-200 rounded-full my-3'>
        <input
          type='text'
          ref={inputTodo}
          onKeyDown={(e) => { if (e.key === 'Enter') handleAddTodo() }}
          placeholder='Add a new task...'
          className='bg-transparent outline-none border-0 flex-1 placeholder:text-slate-600 h-12 pl-6 pr-2'
        />
        <button
          onClick={handleAddTodo}
          className='bg-blue-900 text-white text-lg font-medium rounded-full border-none cursor-pointer w-28 h-12'
        >
          Add
        </button>
      </div>

      {/* filter area */}
      <div className="flex justify-center">
        <FillterOptions handleUpdateFilterStatus={handleUpdateFilterStatus} />
      </div>

      {/* todo list area */}
      {todoList.length === 0 && <img src={NoDataImage} className='w-full' /> }
      <ul>
        {todoList?.map((todo, index) => {
          if (filter == todo.isCompleted || filter == 'ALL') {
            return <TodoItem key={todo.id} todo={todo} index={index} handleRemoveTodo={handleRemoveTodo} handleToggleCompleted={handleToggleCompleted} />
          }
        })}
      </ul>
    </div>
  )
}

export default TodoFrame
