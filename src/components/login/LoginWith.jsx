const LoginWith = ({ title }) => {
  return (
    <>
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 px-3 bg-white z-10 relative">
          {title}
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <div className="mt-4 flex gap-4">
        <div className="w-1/2 py-2 text-center text-white bg-blue-800 rounded font-roboto font-medium text-sm hover:bg-blue-700 cursor-pointer">
          FACEBOOK
        </div>
        <div className="w-1/2 py-2 text-center text-white bg-yellow-500 rounded font-roboto font-medium text-sm hover:bg-yellow-400 cursor-pointer">
          GOOGLE
        </div>
      </div>
    </>
  )
}

export default LoginWith
