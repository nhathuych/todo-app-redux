import { FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa"

const TodoItem = (props) => {
  const { todo, index, handleRemoveTodo, handleToggleCompleted } = props

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <div className="text-gray-500 mr-3 w-6">{index + 1}</div>
        <div className={todo.isCompleted ? "" : "line-through"}>{todo.task}</div>
      </div>

      <div className="space-x-3 ml-6">
        <button
          onClick={() => handleToggleCompleted(todo.id)}
          className="bg-blue-600 text-white text-sm rounded sm:px-2 py-2 px-1 mr-1">
          {todo.isCompleted ? <FaToggleOn fontSize={18} /> : <FaToggleOff fontSize={18} />}
        </button>

        <button
          onClick={() => handleRemoveTodo(todo.id)}
          className="bg-red-600 text-white text-sm rounded sm:px-2 py-2 px-1 mr-1">
          <FaTrash fontSize={18} />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
