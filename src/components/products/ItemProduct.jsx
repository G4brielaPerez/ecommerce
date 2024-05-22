import { FaSearch, FaRegHeart } from "react-icons/fa";
import Stars from "./Stars";
import { useNavigate } from "react-router-dom";

const Item = ({ title, src }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative cursor-pointer">
        <img src={src} alt="product" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <div className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
            <FaSearch />
          </div>
          <div className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
            <FaRegHeart />
          </div>
        </div>
      </div>

      <div className="pt-4 pb-3 px-4">
        <div>
          <h4 
            className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition cursor-pointer"
            onClick={() =>  navigate("/viewProduct")}
          >
            {title}
          </h4>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$50.00</p>
        </div>
        <div className="flex items-center">
          <Stars />
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <button className="btn p-1">
        Add to cart
      </button>
    </div>
  )
}

export default Item
