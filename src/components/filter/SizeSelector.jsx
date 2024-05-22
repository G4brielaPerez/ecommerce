const SizeSelector = ({ sizes, selectedSize, onSelectSize }) => {
  const labelClass = "text-xs px-3 border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600";

  return (
    <div className="flex items-center gap-2">
      {sizes.map((size) => (
        <div key={size}>
          <input
            type="radio"
            id={size}
            className="hidden"
            checked={selectedSize === size}
            onChange={() => onSelectSize(size)}
          />
          <label
            htmlFor={size}
            className={`${labelClass} ${
              selectedSize === size && "bg-primary text-white"
            }`}
          >
            {size.toUpperCase()}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
