import avatar from "../../assets/avatar.png";

const CardProfile = () => {
  return (
    <div className="px-4 py-3 shadow flex items-center gap-4">
      <div className="flex-shrink-0">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-14 h-14 border-gray-200 p-1 object-cover"
        />
      </div>

      <div className="flex-grow">
        <p className="text-gray-600">Hello,</p>
        <h4 className="text-gray-800 font-medium">Gabriela Pérez</h4>
      </div>
    </div>
  )
}

export default CardProfile
