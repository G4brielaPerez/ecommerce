import { FaAddressCard, FaGift, FaRegCreditCard, FaRegHeart, FaSignOutAlt } from "react-icons/fa"
import { useLocation } from "react-router-dom"

const SiteBar = ({ navigate, initial }) => {
    return (
        <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            <div className="space-y-1 pl-8">
                <Title 
                    text="Manage Account"
                    selected={initial}
                    onClick={() => navigate("/manageAccount")}
                >
                    <FaAddressCard />
                </Title>
                <Link text="Profile Information" onClick={() => navigate("/profileInfo")} />
                <Link text="Manage Address" />
                <Link text="Change Password" />
            </div>

            <div className="space-y-1 pl-8 pt-4">
                <Title 
                    text="My Orders History"
                    //selected={initial}
                    //onClick={() => navigate("/ordersHistory")}
                >
                    <FaGift />
                </Title>
                <Link text="My Returns" />
                <Link text="My Cancellations" />
                <Link text="My Reviews" />
            </div>

            <div className="space-y-1 pl-8 pt-4">
                <Title 
                    text="Payment Methods"
                    //selected={initial}
                    //onClick={() => navigate("/paymentMethods")}
                >
                    <FaRegCreditCard />
                </Title>
                <Link text="Voucher" />
            </div>

            <div className="space-y-1 pl-8 pt-4">
                <Title 
                    text="My Wishlist"
                    selected={initial}
                    onClick={() => navigate("/wishlist")}
                >
                    <FaRegHeart />
                </Title>
            </div>

            <div className="space-y-1 pl-8 pt-4">
                <Title 
                    text="Logout"
                    //selected={initial}
                    //onClick={() => navigate("/logout")}
                >
                    <FaSignOutAlt />
                </Title>
            </div>
        </div>
    )
}

const Link = ({ text, onClick }) => {
    const location = useLocation()
    const profileInfo = location.pathname === "/profileInfo"
    const selected = text === "Profile Information" && profileInfo ? "text-primary font-medium cursor-pointer" : "hover:text-primary font-medium transition cursor-pointer"
    
    return (
        <div 
            className={selected}
            onClick={onClick}
        >
            {text}
        </div>
    )
}

const Title = ({ text, children, selected, onClick }) => {
    const selectedClass = selected === text ? "text-primary cursor-pointer" : "hover:text-primary transition cursor-pointer"

    return (
        <div className={`flex items-center space-x-2 font-medium ${selectedClass}`} onClick={onClick}>
            <span className=" text-base">
                {children}
            </span>
            <span>{text}</span>
        </div>
    )
}

export default SiteBar