import { useNavigate } from "react-router-dom"
import CardProfile from "./CardProfile"
import SiteBar from "./Sitebar"
import p9 from "../../assets/products/product9.jpg"
import { FaTrashAlt } from "react-icons/fa"
import BCaccount from "../breadcrumb/BCaccount"

const Wishlist = () => {
  const navigate = useNavigate();

  return (
    <div className="container gap-6 px-14 pb-16">
      <BCaccount navigate={navigate} />

      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <CardProfile />
          <SiteBar navigate={navigate} initial="My Wishlist" />
        </div>
        <div className="col-span-9 space-y-4">
          <Item stock={true} />
          <Item stock={false} />
        </div>
      </div>
    </div>
  )
}

const Item = ({ stock }) => {
  return (
    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
        <div className="w-28 flex-shrink-0">
            <img src={p9} alt="product" className="w-full" />
        </div>

        <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium">GUYER CHAIR</h2>
            <p className="text-gray-500 text-sm">
                Availability: <span className={stock ? "text-green-600" : "text-red-600"}>{stock ? "In stock" : "Out of stock"}</span>
            </p>
        </div>

        <div className="text-primary text-lg font-medium">$320.00</div>
        <div className={`btn w-1/6 p-1 uppercase ${!stock && "cursor-not-allowed bg-red-400 border-red-400 hover:bg-red-400 hover:text-white"}`}>Add to cart</div>
        <div className="text-gray-600 cursor-pointer hover:text-primary">
            <FaTrashAlt />
        </div>
    </div>
  )
}

export default Wishlist
