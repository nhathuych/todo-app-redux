const FillterOptions = (props) => {
  const { handleUpdateFilterStatus } = props

  const onFilterTodos = (e) => {
    const filter = e.target.value
    handleUpdateFilterStatus(filter)
  }

  return (
    <div className="space-x-4">
      <select
        onChange={(e) => { onFilterTodos(e) }}
        className="border border-gray-300 rounded-lg h-12 pl-6 pr-3"
      >
        <option value="ALL">Default</option>
        <option value="0">Completed</option>
        <option value="1">In progress</option>
      </select>
    </div>
  )
}

export default FillterOptions
