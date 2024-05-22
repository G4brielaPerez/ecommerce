import logo from "../../assets/logo.svg"
import Searcher from "./Searcher"
import Icons from "./Icons"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="w-32 cursor-pointer" 
                    onClick={() => navigate("/home")} 
                />
                <Searcher />
                <Icons navigate={navigate} />
            </div>
        </div>
    )
}

export default Header