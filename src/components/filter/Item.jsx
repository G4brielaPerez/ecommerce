const Item = ({ text, id, num }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" id={id} className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
      <label htmlFor={id} className="text-gray-600 ml-3 cursor-pointer">
        {text}
      </label>
      <div className="ml-auto text-gray-600 text-sm">({num})</div>
    </div>
  )
}

export default Item
