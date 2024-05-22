import { useNavigate } from "react-router-dom";
import Input from "./login/Input";
import LoginWith from "./login/LoginWith";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 overflow-hidden">
        <h2 className="text-2xl font-medium mb-1">LOGIN</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are a returing customer
        </p>

        <div className="space-y-4">
          <Input
            title="Email address"
            id="email"
            placeholder="example@email.com"
          />
          <Input 
            title="Password" 
            id="password" 
            placeholder="type password" 
          />

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="agreement"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <p className="text-primary cursor-pointer">Forgot password?</p>
          </div>

          <button className="mt-4 py-2 btn">LOGIN</button>
        </div>

        <LoginWith title={"OR LOGIN WITH"} />

        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/register")}
          >
            {" "}
            Register now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
