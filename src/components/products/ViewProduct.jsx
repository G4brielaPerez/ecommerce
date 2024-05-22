import { useState } from "react"
import { FaShoppingBag, FaHeart, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import p9 from "../../assets/products/product9.jpg"
import p1 from "../../assets/products/product1.jpg"
import p8 from "../../assets/products/product8.jpg"
import p11 from "../../assets/products/product11.jpg"
import p12 from "../../assets/products/product12.jpg"
import Stars from "./Stars"
import SizeSelector from "../filter/SizeSelector"
import ColorSelector from "../filter/ColorSelector"
import Item from "./ItemProduct"
import Breadcrumb from "../breadcrumb/Breadcrumb"

const ViewProduct = () => {
  const [selectedSize, setSelectedSize] = useState("m");
  const [selectedColor, setSelectedColor] = useState("#FC3D57");
  const navigate = useNavigate();

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  }

  return (
    <div className="container px-14 pb-16">
      <Breadcrumb navigate={navigate} />

      <div className="grid grid-cols-2 gap-6">
        <div>
          <img src={p9} alt="product" className="w-full" />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src={p9}
              alt="product"
              className="w-full cursor-pointer border border-primary"
            />
            <img
              src={p1}
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src={p8}
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src={p12}
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src={p11}
              alt="product"
              className="w-full cursor-pointer border"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium mb-2">GUYER CHAIR</h2>

          <div className="flex items-center mb-4">
            <Stars />
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Avilability:</span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand:</span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category:</span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU:</span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>

          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-2xl text-primary font-semibold">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            exercitationem quaerat excepturi labore blanditiis
          </p>

          <h3 className="text-sm text-gray-800 mb-1 mt-4">SIZE</h3>
          <SizeSelector
            sizes={["xs", "s", "m", "l", "xl"]}
            selectedSize={selectedSize}
            onSelectSize={handleSizeChange}
          />

          <h3 className="text-sm text-gray-800 mb-1 mt-4">COLORS</h3>
          <ColorSelector
            colors={["#FC3D57", "white", "black"]}
            selectedColor={selectedColor}
            onSelectColor={handleColorChange}
          />

          <h3 className="text-sm text-gray-800 mb-1 mt-4">Quantity</h3>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-gray-200">
              -
            </div>
            <div className="h-8 w-8 text-base flex items-center justify-center select-none">
              4
            </div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-gray-200">
              +
            </div>
          </div>

          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <button className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
              <FaShoppingBag />
              ADD TO CART
            </button>
            <button className="border border-gray-300 text-gray-800 px-8 py-2 font-medium rounded flex items-center gap-2 hover:text-primary transition">
              <FaHeart />
              WISHLIST
            </button>
          </div>

          <div className="flex gap-3 mt-4">
            <div className="social-btn">
              <FaFacebookF />
            </div>
            <div className="social-btn">
              <FaTwitter />
            </div>
            <div className="social-btn">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium text-xl">
          PRODUCT DETAILS
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3">
            <p>
              Incredible graphics performance MacBook Air can take on more
              graphics-intensive projects than ever. For the first time, content
              creators can edit and seamlessly play back multiple streams of
              full-quality 4K video whithout dropping a frame.
            </p>
            <p>
              Incredible graphics performance MacBook Air can take on more
              graphics-intensive projects than ever. For the first time, content
              creators can edit and seamlessly play back multiple streams of
              full-quality 4K video without dropping a frame.
            </p>
            <p>
              Apps on MacBook Air can use machine learning (ML) to automatically
              retouch photos like a pro, make smart tools such as magic wands
              and audio filters more accurate at auto-detection, and so much
              more. That's not just brain power - that's the power of a full
              stack of ML technologies.
            </p>
          </div>

          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Color
                </th>
                <td className="py-2 px-4 border border-gray-300">
                  Black, Brown, Red
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Material
                </th>
                <td className="py-2 px-4 border border-gray-300">
                  Artificial Leather
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Weight
                </th>
                <td className="py-2 px-4 border border-gray-300">55kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-medium text-gray-800 pb-4 pt-8">
          RELATED PRODUCTS
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <Item title="GUYER CHAIR" src={p9} />
          <Item title="GUYER CHAIR" src={p1} />
          <Item title="GUYER CHAIR" src={p8} />
          <Item title="GUYER CHAIR" src={p12} />
        </div>
      </div>
    </div>
  )
}

export default ViewProduct
