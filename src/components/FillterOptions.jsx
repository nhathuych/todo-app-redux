const FillterOptions = () => {
  return (
    <div className="flex items-center space-x-4">
      <select className="border border-gray-300 rounded-lg h-12 pl-6 pr-3">
        <option value="ALL">Default</option>
        <option value="COMPLETED">completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button className="bg-blue-900 text-white text-sm font-medium rounded-lg p-3">Mark All Completed</button>
    </div>
  )
}

export default FillterOptions
