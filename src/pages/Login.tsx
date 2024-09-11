import { useState } from "react";
import Logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { LoginUser } from "../services/API/Login";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const users = await toast.promise(LoginUser(loginData), {
        loading: "Logging in...",
        success: "Login Success",
        error: () => "Wrong Email or Password",
      });

      if (users.length > 0) {
        const user = users[0];
        const accessToken = user.access_token;
        const userType = user.type;

        if (accessToken) {
          localStorage.setItem("access_token", accessToken);
          localStorage.setItem("userType", userType);

          if (userType === "Administrator") {
            navigate("/admin/dashboard");
          } else if (userType === "Teacher") {
            navigate("/teacher/*");
          } else if (userType === "Student") {
            navigate("/student/*");
          }
        } else {
          throw new Error("Login Failed: No token received");
        }
      } else {
        throw new Error("Login Failed: No user data received");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <nav className="w-full h-[72px] shadow-md flex justify-center items-center">
        <div className="container">
          <img src={Logo} alt="bimbel-one" />
          <p className="text-[#125B9A] text-[12px] font-bold tracking-wide">
            Dashboard
          </p>
        </div>
      </nav>

      <div className="flex justify-center items-center mt-[100px]">
        <div className="md:w-[489px] border-2 rounded-[10px] shadow-lg p-10">
          <div className="flex justify-center mb-5">
            <img src={Logo} alt="" />
          </div>

          <form onSubmit={handleSubmit}>
            <h1 className="capitalize text-[14px] mb-2">email</h1>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
            />
            <h1 className="capitalize text-[14px] mb-2">password</h1>
            <div className="relative">
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? "text" : "password"}
                className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                onClick={toggleShowPassword}
                className="absolute inset-y-3 md:inset-y-4 right-4 flex items-center text-gray-400 cursor-pointer"
              />
            </div>
            <button
              className="w-full h-[50px] bg-[#E85F10] rounded-[10px] shadow-md text-white font-bold tracking-wide mt-3 capitalize transition-all duration-300 ease-in-out border-[#E85F10] border-2 hover:bg-transparent hover:text-[#E85F10]"
              type="submit"
            >
              login
            </button>

            {/* <p className="text-[14px] mt-3">
            Don't have an account?{" "}
            <span className="font-bold text-[#0047FF]">
              <Link to="/signup">Signup</Link>
            </span>
          </p> */}
          </form>
          <Toaster />
        </div>
      </div>
    </>
  );
}
