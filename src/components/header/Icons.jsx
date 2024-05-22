import { FaRegHeart, FaShoppingBag, FaRegUser } from "react-icons/fa";

const Icons = ({ navigate }) => {
  const spanClass = "absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
  const divClass = "text-center text-gray-700 hover:text-primary transition relative cursor-pointer"

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className={divClass} onClick={() => navigate("/wishlist")}>
        <div className="text-2xl">
          <FaRegHeart className="inline-block align-middle" />
        </div>
        <div className="text-xs leading-3">Wish List</div>
        <span className={spanClass}>5</span>
      </div>

      <div className={divClass} onClick={() => navigate("/cart")}>
        <div className="text-2xl">
          <FaShoppingBag className="inline-block align-middle" />
        </div>
        <div className="text-xs leading-3">Cart</div>
        <span className={spanClass}>3</span>
      </div>

      <div className={divClass} onClick={() => navigate("/manageAccount")}>
        <div className="text-2xl ">
          <FaRegUser className="inline-block align-middle" />
        </div>
        <div className="text-xs leading-3">Account</div>
      </div>
    </div>
  )
}

export default Icons
