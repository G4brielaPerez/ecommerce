import Banner from "./banner/Banner"
import Categories from "./categories/Categories"
import Features from "./features/Features"
import offer from "../assets/offer.jpg"
import Item from "./products/ItemProduct"
import p4 from "../assets/products/product4.jpg"
import p9 from "../assets/products/product9.jpg"
import p1 from "../assets/products/product1.jpg"
import p8 from "../assets/products/product8.jpg"
import p10 from "../assets/products/product10.jpg"
import p11 from "../assets/products/product11.jpg"
import p12 from "../assets/products/product12.jpg"
import p2 from "../assets/products/product2.jpg"
import p3 from "../assets/products/product3.jpg"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    
    return (
        <>
            <Banner navigate={navigate} />
            
            <div className="container py-16 px-14 space-y-16">
                <Features />
                <Categories />
                
                <div>
                    <h2 className="text-2xl font-medium text-gray-800 mb-6">TOP NEW ARRIVAL</h2>
                    <div className="grid grid-cols-4 gap-6">
                        <Item title="GUYER CHAIR" src={p9} />
                        <Item title="GUYER CHAIR" src={p1} />
                        <Item title="GUYER CHAIR" src={p8} />
                        <Item title="GUYER CHAIR" src={p12} />
                    </div>
                </div>

                <img src={offer} alt="offer" className="w-full" />

                <div>
                    <h2 className="text-2xl font-medium text-gray-800 mb-6">RECOMENDED FOR YOU</h2>
                    <div className="grid grid-cols-4 gap-6">
                        <Item title="GUYER CHAIR" src={p2} />
                        <Item title="GUYER CHAIR" src={p3} />
                        <Item title="GUYER CHAIR" src={p4} />
                        <Item title="GUYER CHAIR" src={p9} />
                        <Item title="GUYER CHAIR" src={p1} />
                        <Item title="GUYER CHAIR" src={p8} />
                        <Item title="GUYER CHAIR" src={p10} />
                        <Item title="GUYER CHAIR" src={p11} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home