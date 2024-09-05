import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChartLine,
  faAddressCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SettingButton from "../components/small/SettingButton";
import LogoutButton from "../components/small/LogoutButton";
import DashboardPage from "./dashboard/DashboardPage";
import RegistrationPage from "./registration/RegistrationPage";
import UserPage from "./user/UserPage";
import SettingPage from "./setting/SettingPage";
export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Router>
      <div className="flex z-50">
        {/* sidebar */}
        <div
          className={`${
            isCollapsed ? "w-20" : "w-52"
          } bg-[#125B9A] h-screen p-5 pt-10 relative duration-300`}
        >
          {/* collapse button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-6 right-5 text-white text-[14px] bg-transparent rounded-full w-9 h-9 flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronLeft}
            />
          </button>

          {/* sidebar content */}
          <ul className="pt-8">
            <Link to="/dashboard">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <span className="text-xl">
                  <FontAwesomeIcon icon={faChartLine} />
                </span>
                {!isCollapsed && (
                  <span className="text-base text-[14px] ">Dashboard</span>
                )}
              </li>
            </Link>

            <Link to="/registration">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <span className="text-xl">
                  <FontAwesomeIcon icon={faAddressCard} />
                </span>
                {!isCollapsed && (
                  <span className="text-base text-[14px] ">Registration</span>
                )}
              </li>
            </Link>
            <Link to="/users">
              <li
                className={`text-gray-300 mb-10 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <span className="text-xl">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                {!isCollapsed && (
                  <span className="text-base text-[14px] ml-1">User</span>
                )}
              </li>
            </Link>
            {/* <hr className="p-2" />
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <span className="text-xl">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            {!isCollapsed && (
              <span className="text-base text-[14px]">Logout</span>
            )}
          </li> */}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="w-full h-16 bg-white text-white flex items-center px-6 shadow-md justify-between">
            <img src={Logo} alt="bimbel-one" />

            <div className="flex items-center gap-x-6">
              <SettingButton />
              <LogoutButton />
            </div>
          </div>

          {/* save area */}
          <div className="p-6">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="/setting" element={<SettingPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
