import logo from "../assets/logo.svg"
import methods from "../assets/methods.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <>
        <div className="bg-white py-12 border-t border-gray-100">
            <div className="container grid grid-cols-3">
                <div className="col-span-1 space-y-8 ml-2">
                    <img src={logo} alt="logo" className="w-30" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, porro.</p>
                    <div className="flex space-x-6">
                        <div className="social-media"><FaFacebook /></div>
                        <div className="social-media"><FaTwitter /></div>
                        <div className="social-media"><FaInstagram /></div>
                        <div className="social-media"><FaLinkedin /></div>
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-4 gap-8 px-4">
                    <Item title="SOLUTIONS" options={["Marketing", "Analytics", "Commerce", "Insights"]} />
                    <Item title="SUPPORT" options={["Pricing", "Documentation", "Guides", "API Status"]} />
                    <Item title="COMPANY" options={["About", "Blog", "Jobs", "Press"]} />
                    <Item title="LEGAL" options={["Claim", "Privacy", "Policy", "Terms"]} />
                </div>
            </div>
        </div>

        <div className="bg-gray-800 py-4">
            <div className="container flex items-center justify-between text-gray-400">
                <p className="text-white">&copy; RAFCART - All rights reserved.</p>
                <img src={methods} alt="methods" className="h-5" />
            </div>
        </div>
        </>
    )
}

const Item = ({ title, options }) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider">{title}</h3>
            <div className="mt-4 space-y-4">
                {options.map((option, index) => (
                    <p key={index} className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">{option}</p>
                ))}
            </div>
        </div>
    )
}

export default Footer