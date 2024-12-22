import { FaCheck, FaTrash } from "react-icons/fa"

const TodoItem = () => {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="text-gray-500 mr-3">1</span>
        <span>Learn redux</span>
      </div>

      <div className="space-x-3 ml-6">
        <button className="bg-blue-600 text-white text-sm rounded sm:px-2 py-2 px-1 mr-1">
          <FaCheck/>
        </button>

        <button className="bg-red-600 text-white text-sm rounded sm:px-2 py-2 px-1 mr-1">
          <FaTrash/>
        </button>
      </div>
    </li>
  )
}

export default TodoItem
