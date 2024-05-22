import Input from "../login/Input"
import CardProfile from "./CardProfile"
import SiteBar from "./Sitebar"
import { useNavigate } from "react-router-dom"
import BCaccount from "../breadcrumb/BCaccount"

const ProfileInfo = () => {
  const navigate = useNavigate()

  return (
    <div className="container px-14 pb-16">
      <BCaccount navigate={navigate} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <CardProfile />
          <SiteBar navigate={navigate} />
        </div>
        <div className="col-span-9">
          <Card />
        </div>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className="shadow rounded px-6 pt-5 pb-7">
      <h3 className="text-lg text-gray-800 mb-4 font-medium">
        Profile Information
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input title="First Name" placeholder="First Name" />
          <Input title="Last Name" placeholder="Last Name" />
          <Input title="Bhirthday" placeholder="DD/MM/YYYY" type="date" />
          <div>
            <label className="text-gray-600 mb-2">Gender</label>
            <select className="w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <Input title="Email Address" placeholder="Email" type="email" />
          <Input title="Phone Number" placeholder="Phone Number" type="tel" />
          <button className="btn p-2 w-1/2">SAVE CHANGES</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
