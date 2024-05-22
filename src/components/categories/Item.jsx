const Item = ({ text, src }) => {
  // inset-0
  // Establece tanto el valor top, right, bottom, como left de un elemento a 0 
  // El elemento estará posicionado de manera absoluta en relación con su contenedor y se extenderá por todo el contenedor

  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img src={src} alt="category" className="w-full" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-medium font-roboto group-hover:bg-opacity-50 transition cursor-pointer">
        {text}
      </div>
    </div>
  )
}

export default Item
