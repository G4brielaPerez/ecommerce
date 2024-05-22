const CardSecondary = ({ title, name, info, phone }) => {
    return (
      <div className="shadow rounded bg-white px-4 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-800 text-lg">{title}</h3>
          <div className="text-primary cursor-pointer">Edit</div>
        </div>
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">{name}</h4>
          <p className="text-gray-800">{info}</p>
          <p className="text-gray-800">{phone}</p>
        </div>
      </div>
    )
}

  export default CardSecondary