import { FaChevronRight, FaHome } from "react-icons/fa"
import { useLocation } from "react-router-dom"

const Breadcrumb = ({ navigate }) => {
  const location = useLocation()
  const viewProduct = location.pathname === "/viewProduct"
  const checkout = location.pathname === "/checkout"

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
        className={`${location.pathname !== "/shop" && "text-primary cursor-pointer"}`}
        onClick={() => navigate("/shop")}
      >
        Shop
      </p>

      {viewProduct && (
        <>
          <div className="text-md text-gray-400">
            <FaChevronRight />
          </div>
            
          <p>GUYER CHAIR</p>
        </>
      )}

      {checkout && (
        <>
          <div className="text-md text-gray-400">
            <FaChevronRight />
          </div>
            
          <p>Checkout</p>
        </>
      )}
    </div>
  )
}

export default Breadcrumb
