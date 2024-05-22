import p8 from "../assets/products/product8.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container grid grid-cols-12 items-start gap-10 py-6 px-14">
      <div className="col-span-8 space-y-5">
        <div className="bg-gray-200 font-semibold p-2 grid grid-cols-5 text-center">
          <p className="col-span-3">Product</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>

        <div className="space-y-4">
          <Item />
          <Item />
          <Item />
        </div>
      </div>

      <div className="col-span-4 space-y-5">
        <OrderSummary />
      </div>
    </div>
  )
}

const Item = () => {
  return (
    <div className="grid grid-cols-5 p-4 border border-gray-200 rounded">
      <div className="col-span-3 flex">
        <div className="w-28 flex-shrink-0 mr-5">
          <img src={p8} alt="product" className="w-full" />
        </div>

        <div>
          <p className="text-gray-800 font-semibold mb-2">GUYER CHAIR</p>
          <p className="text-primary text-sm font-semibold">$45.00</p>
          <p className="text-gray-600 text-sm">Size: M</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 ¿">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-gray-200">
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center select-none">
            1
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-gray-200">
            +
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-1 text-center">
          <p className="text-primary font-semibold">$45.00</p>
        </div>

        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <FaTrashAlt />
        </div>
      </div>
    </div>
  )
}

const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 p-4 rounded">
      <h3 className="text-gray-800 text-lg font-medium mb-4 border-b border-gray-200 py-2">
        ORDER SUMMARY
      </h3>

      <div className="flex justify-between text-gray-800 font-medium py-1">
        <p>Subtotal</p>
        <p>$320</p>
      </div>

      <div className="flex justify-between text-gray-800 py-1">
        <p>Delivery</p>
        <p>FREE</p>
      </div>

      <div className="flex justify-between text-gray-800 py-1 border-b border-gray-200">
        <p>Tax</p>
        <p>FREE</p>
      </div>

      <div className="flex justify-between text-gray-800 font-semibold py-3">
        <p>TOTAL</p>
        <p>$320</p>
      </div>

      <div className="w-full flex mb-6 mt-3">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="w-full border border-primary border-r-0 p-2 rounded-l-md focus:outline-none"
        />
        <button className="btn w-1/3">APPLY</button>
      </div>

      <button className="btn py-2" onClick={() => navigate("/checkout")}>
        PROCCEES CHECKOUT
      </button>
    </div>
  )
}

export default Cart
