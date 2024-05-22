const Item = ({ text, description, src }) => {
  return (
    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
      <img src={src} alt="delivery" className="w-12 h-12 object-contain" />
      <div>
        <h4 className="font-medium text-lg">{text}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default Item
