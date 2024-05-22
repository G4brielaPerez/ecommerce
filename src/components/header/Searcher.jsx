import { FaSearch } from "react-icons/fa"

const Searcher = () => {
  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-4 text-lg text-gray-400">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
      />
      <button className="btn w-1/3">
        Search
      </button>
    </div>
  )
}

export default Searcher
