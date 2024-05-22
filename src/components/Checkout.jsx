import Breadcrumb from "./breadcrumb/Breadcrumb"
import OrderSummary from "./products/OrderSummary"

const Checkout = () => {
  return (
    <div className="container pb-14 gap-6 px-14 py-2">
      <Breadcrumb />

      <div className="grid grid-cols-12">
        <div className="col-span-8 space-y-5">
          <div className="bg-gray-200 font-semibold p-2">Billing Details</div>

          <div className="space-y-4 border border-gray-200 p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <Input title="First Name" />
              <Input title="Last Name" />
            </div>
            <Input title="Company Name" />
            <Input title="Country/Region" />
            <Input title="Street Address" />
            <Input title="Town/City" />
            <Input title="Zip Code" />
            <Input title="Phone Number" />
            <Input title="Email Address" />
          </div>
        </div>

        <div className="col-span-4 space-y-5">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

const Input = ({ title }) => {
  return (
    <div>
      <label htmlFor={title} className="text-gray-600 mb-2">
        {title}
        <span className="text-primary">*</span>
      </label>
      <input
        type="text"
        name={title}
        className="w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
      />
    </div>
  )
}

export default Checkout
