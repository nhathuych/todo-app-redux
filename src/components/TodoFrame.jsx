import { useEffect, useRef } from "react"
import FillterOptions from "./FillterOptions"
import TodoItem from "./TodoItem"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, setTodoList } from "../reducers/todoReducer"
import NoDataImage from "../assets/images/empty.svg"

const TodoFrame = () => {
  const inputTodo = useRef() // mapping between input and this variable.
  const inputSearch = useRef() // mapping between input and this variable.

  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todos.todoList)

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

  const resetInput = () => {
    inputTodo.current.value = ''
    inputTodo.current.focus()
  }

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList))
    }
  }, [todoList])

  useEffect(() => {
    const todoListFromLocalStorage = JSON.parse(localStorage.getItem("todoList"))

    if (todoListFromLocalStorage) {
      dispatch(setTodoList(todoListFromLocalStorage))
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
      <div className="flex items-center justify-between">
        <FillterOptions/>

        <div className='flex items-center bg-gray-200 rounded-full my-3'>
          <input
            type='text'
            ref={inputSearch}
            placeholder='Search your tasks...'
            className='bg-transparent outline-none border-0 flex-1 placeholder:text-slate-600 h-12 pl-6 pr-2'
          />
          <button
            className='bg-blue-900 text-white text-lg font-medium rounded-full border-none cursor-pointer w-28 h-12'
          >
            Search
          </button>
        </div>
      </div>

      {/* todo list area */}
      {todoList.length === 0 && <img src={NoDataImage} className='w-full' /> }
      <ul>
        {todoList?.map((todo, index) => {
          return <TodoItem todo={todo} index={index} key={todo.id} />
        })}
      </ul>
    </div>
  )
}

export default TodoFrame
