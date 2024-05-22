import { FaBars } from "react-icons/fa"
import Dropdown from "./Dropdown"
import Item from "./Item"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white"><FaBars /></span>
          <span className="ml-2 text-white">All Categories</span>
          <Dropdown />
        </div>

        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6">
            <Item text="Home" onClick={() => navigate("/home")} />
            <Item text="Shop" onClick={() => navigate("/shop")} />
            <Item text="About Us" onClick={() => navigate("/about")} />
            <Item text="Contact Us" onClick={() => navigate("/contact")} />
          </div>
          <Item text="Login/Register" onClick={() => navigate("/login")} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
