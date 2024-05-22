import p9 from "../../assets/products/product9.jpg"

const ItemOrder = ({ status }) => {
    return (
        <div className="p-6 border border-gray-200 space-y-6">
            <div className="flex justify-between">
                <div className="flex-1 flex space-x-4">
                    <img src={p9} alt="product" className="w-1/6" />
                    <img src={p9} alt="product" className="w-1/6" />
                </div>
                <div className="flex-1 flex items-center justify-end">
                    <button className="btn w-1/3 p-1">View Order</button>
                </div>
            </div>

            <div className="grid grid-cols-5">
                <div>
                    <p className="font-medium">Order Number</p>
                    <p>23E34RT3</p>
                </div>
                <div>
                    <p className="font-medium">Purchased</p>
                    <p>23E34RT3</p>
                </div>
                <div>
                    <p className="font-medium">Quantity</p>
                    <p>x2</p>
                </div>
                <div>
                    <p className="font-medium">Total</p>
                    <p>$120</p>
                </div>
                <div>
                    <p className="font-medium">Status</p>
                    <p className={`${status === "Delivered" ? "text-green-600" : "text-red-600"}`}>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemOrder