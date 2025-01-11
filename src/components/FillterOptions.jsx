const FillterOptions = () => {
  return (
    <div className="space-x-4">
      <select className="border border-gray-300 rounded-lg h-12 pl-6 pr-3">
        <option value="0">Default</option>
        <option value="1">Completed</option>
        <option value="2">In progress</option>
      </select>
    </div>
  )
}

export default FillterOptions
