import Input from "./login/Input";
import LoginWith from "./login/LoginWith";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 overflow-hidden">
        <h2 className="text-2xl font-medium mb-1">CREATE AN ACCOUNT</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Register here if you are a new customer.
        </p>

        <div className="space-y-4">
          <Input 
            title="Full Name" 
            id="name" 
            placeholder="enter your name" 
          />
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
          <Input
            title="Confirm Password"
            id="password2"
            placeholder="confirm your password"
          />

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
              I have read and agree to the
              <span className="text-primary"> terms & conditions</span>
            </label>
          </div>

          <button className="mt-4 py-2 btn">CREATE ACCOUNT</button>
        </div>

        <LoginWith title={"OR SINGUP IN WITH"}/>

        <p className="mt-4 text-gray-600 text-center">
          Already have an account?
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/login")}
          >
            {" "}
            Login now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
