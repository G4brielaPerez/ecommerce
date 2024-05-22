import { useLocation } from "react-router-dom"

const Input = ({ title, id, placeholder, type }) => {
  const location = useLocation()
  const account = location.pathname !== "/account"

  return (
    <div>
      <label htmlFor={id} className="text-gray-600 mb-2">
        {title}
        {account && 
          <span className="text-primary">*</span>
        }
      </label>
      <input
        type={type || "text"}
        id={id}
        placeholder={placeholder}
        className="w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
        style={{ height: id === "message" && 80 }}
      />
    </div>
  )
}

export default Input
