const Input = ({ placeholder }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 rounded text-sm text-gray-600 shadow-sm"
      />
    )
}

export default Input