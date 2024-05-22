import { FaList, FaTh } from "react-icons/fa";

const ViewSelector = () => {
  return (
    <>
      <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
        <FaTh />
      </div>
      <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
        <FaList />
      </div>
    </>
  )
}

export default ViewSelector
