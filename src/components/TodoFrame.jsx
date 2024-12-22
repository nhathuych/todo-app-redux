import { useRef } from "react"
import FillterOptions from "./FillterOptions"
import TodoList from "./TodoList"

const TodoFrame = () => {
  const inputTodo = useRef() // mapping between input and this variable.
  const inputSearch = useRef() // mapping between input and this variable.

  return (
    <div className="max-w-4xl mx-auto bg-slate-100 rounded sm:mt-8 p-4">
      {/* title */}
      <h2 className="text-2xl font-semibold text-center uppercase mt-3 mb-6">Todo List</h2>

      {/* input area */}
      <div className='flex items-center bg-gray-200 rounded-full my-3'>
        <input
          type='text'
          ref={inputTodo}
          placeholder='Add a new task...'
          className='bg-transparent outline-none border-0 flex-1 placeholder:text-slate-600 h-12 pl-6 pr-2'
        />
        <button
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
            placeholder='Add a new task...'
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
      <TodoList/>
    </div>
  )
}

export default TodoFrame
