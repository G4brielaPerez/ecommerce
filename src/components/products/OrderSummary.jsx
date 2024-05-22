const OrderSummary = () => {
  return (
    <>
      <div className="bg-gray-200 font-semibold p-2">Your order</div>
      <div className="border border-gray-200 p-4 rounded">
        <h3 className="text-gray-800 text-lg font-medium mb-4 border-b border-gray-200 py-3">
          PRODUCT
        </h3>

        <div className="flex justify-between">
          <div>
            <h5 className="text-gray-800 font-medium">GUYER CHAIR</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x3</p>
          <p className="text-gray-800 font-medium">$320</p>
        </div>

        <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
          <p>SUBTOTAL</p>
          <p>$320</p>
        </div>

        <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
          <p>SHIPPING</p>
          <p>FREE</p>
        </div>

        <div className="flex justify-between text-gray-800 font-medium py-3">
          <p className="font-semibold">TOTAL</p>
          <p>$320</p>
        </div>

        <div className="flex items-center mb-4 mt-2">
          <input
            id="agreement"
            type="checkbox"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
          />
          <label
            htmlFor="agreement"
            className="text-gray-600 ml-3 cursor-pointer text-sm"
          >
            Agree to our
            <span className="text-primary"> terms & conditions</span>
          </label>
        </div>

        <button className="btn py-2">PLACE ORDER</button>
      </div>
    </>
  );
};

export default OrderSummary;
