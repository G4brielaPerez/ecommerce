import BCaccount from "../breadcrumb/BCaccount"
import CardProfile from "./CardProfile"
import SiteBar from "./Sitebar"
import CardSecondary from "./CardSecondary"
import ItemOrder from "./ItemOrder"
import { useNavigate } from "react-router-dom"

const ManageAccount = () => {
  const navigate = useNavigate()

  return (
    <div className="container px-14 pb-16">
      <BCaccount navigate={navigate} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <CardProfile />
          <SiteBar navigate={navigate} initial="Manage Account" />
        </div>
        <div className="col-span-9 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <CardSecondary
              title="Profile Information"
              name="Gabriela Pérez"
              info="email@example.com"
              phone="123-456-7890"
            />
            <CardSecondary
              title="Shipping Address"
              name="Gabriela Pérez"
              info="Calle #1, Ciudad, Estado"
              phone="123-456-7890"
            />
            <CardSecondary
              title="Billing Address"
              name="Gabriela Pérez"
              info="Calle #1, Ciudad, Estado"
              phone="123-456-7890"
            />
          </div>

          <div className="shadow rounded space-y-4 bg-white p-6">
            <h3 className="font-medium text-gray-800 text-lg">Recent Orders</h3>
            <ItemOrder status="Delivered" />
            <ItemOrder status="Cancelled" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageAccount
