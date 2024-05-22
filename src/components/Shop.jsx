import { useNavigate } from "react-router-dom"
import Breadcrumb from "./breadcrumb/Breadcrumb"
import SiteBar from "./filter/SiteBar"
import ViewSelector from "./products/ViewSelector"
import ShopProducts from "./products/ShopProducts"

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="container pb-14 px-14 items-start">
      <Breadcrumb navigate={navigate} />

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <SiteBar />
        </div>

        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <select className="w-44 text-sm text-gray-600 px-4 py-3 border border-gray-300 rounded focus:ring-primary focus:border-primary">
              <option value="default">Default Sorting</option>
              <option value="low-hight">Price low-hight</option>
              <option value="high-low">Price high-low</option>
              <option value="latest">Latest product</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <ViewSelector />
            </div>
          </div>
          <ShopProducts />
        </div>
      </div>
    </div>
  )
}

export default Shop
