import { FaChevronRight, FaHome } from "react-icons/fa"
import { useLocation } from "react-router-dom"

const BCaccount = ({ navigate }) => {
  const location = useLocation()
  const wishlist = location.pathname === "/wishlist"
  const profileInfo = location.pathname === "/profileInfo"

  return (
    <div className="py-6 flex items-center gap-3">
      <div
        className="text-primary text-xl cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <FaHome />
      </div>

      <div className=" text-md text-gray-400">
        <FaChevronRight />
      </div>

      <p 
        className={`${location.pathname !== "/manageAccount" && "text-primary cursor-pointer"}`}
        onClick={() => navigate("/manageAccount")}
      >
        My Account
      </p>

      {wishlist && (
        <>
          <div className="text-md text-gray-400">
            <FaChevronRight />
          </div>
            
          <p>My Wishlist</p>
        </>
      )}

      {profileInfo && (
        <>
          <div className="text-md text-gray-400">
            <FaChevronRight />
          </div>
            
          <p>Profile Information</p>
        </>
      )}
    </div>
  )
}

export default BCaccount
