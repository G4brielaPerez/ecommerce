const Item = ({ text, onClick }) => {
  return (
    <div 
      className="text-gray-200 hover:text-white transition cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Item
