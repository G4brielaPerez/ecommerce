const ColorSelector = ({ colors, selectedColor, onSelectColor }) => {
  const labelClass = "border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"

  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => (
        <div key={color}>
          <input
            type="radio"
            name="color"
            className="hidden"
            id={color}
            checked={selectedColor === color}
            onChange={() => onSelectColor(color)}
          />
          <label
            htmlFor={color}
            className={`${labelClass} ${
              selectedColor === color && "ring-2 ring-primary"
            }`}
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
    </div>
  )
}

export default ColorSelector
