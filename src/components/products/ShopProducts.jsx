import Item from "./ItemProduct"
import p9 from "../../assets/products/product9.jpg"
import p1 from "../../assets/products/product1.jpg"
import p8 from "../../assets/products/product8.jpg"
import p4 from "../../assets/products/product4.jpg"
import p10 from "../../assets/products/product10.jpg"
import p11 from "../../assets/products/product11.jpg"

const ShopProducts = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <Item title="GUYER CHAIR" src={p4} />
            <Item title="GUYER CHAIR" src={p9} />
            <Item title="GUYER CHAIR" src={p1} />
            <Item title="GUYER CHAIR" src={p8} />
            <Item title="GUYER CHAIR" src={p10} />
            <Item title="GUYER CHAIR" src={p11} />
        </div>
    )
}

export default ShopProducts