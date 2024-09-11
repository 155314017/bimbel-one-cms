import { useState } from "react";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChartLine,
  faAddressCard,
  faChalkboardUser,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import SettingButton from "../../components/small/SettingButton";
import LogoutButton from "../../components/small/LogoutButton";
import RegistrationTable from "./registration/RegistrationTable";
import { Routes, Route, Link } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";
import StudentTable from "./student/StudentTable";
import DetailStudent from "./student/DetailStudent";
import TeacherPage from "../Admin/teacher/TeacherPage";
export default function AdminPage() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="flex">
      {/* sidebar */}
      <div
        className={`${
          isCollapsed ? "w-20" : "w-52"
        } bg-[#125B9A] h-screen p-5 pt-10 sticky top-0 duration-300`}
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
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Link to="/admin/dashboard">
              <span className="text-xl">
                <FontAwesomeIcon icon={faChartLine} />
              </span>
              {!isCollapsed && (
                <span className="text-base text-[14px] ">Dashboard</span>
              )}
            </Link>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Link to={"/admin/registration"}>
              <span className="text-xl">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              {!isCollapsed && (
                <span className="text-base text-[14px] ">Registration</span>
              )}
            </Link>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Link to={"/admin/student"}>
              <span className="text-xl">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              {!isCollapsed && (
                <span className="text-base text-[14px] ">Student</span>
              )}
            </Link>
          </li>
          <li
            className={`text-gray-300 mb-10 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-300 hover:shadow-md hover:text-[#125B9A] rounded-md mt-2 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Link to={"/admin/teacher"}>
              <span className="text-xl">
                <FontAwesomeIcon icon={faChalkboardUser} />
              </span>
              {!isCollapsed && (
                <span className="text-base text-[14px] ml-1">Teacher</span>
              )}
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="w-full h-16 bg-white text-white flex items-center px-6 shadow-md justify-between sticky top-0 z-30">
          <img src={Logo} alt="bimbel-one" />
          <div className="flex items-center gap-x-6">
            <SettingButton />
            <Link to={"/"}>
              <LogoutButton />
            </Link>
          </div>
        </div>

        {/* save area */}
        <div className="p-6">
          <Routes>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="registration" element={<RegistrationTable />} />
            <Route path="student" element={<StudentTable />} />
            <Route
              path="detail-student/:id/:name"
              element={<DetailStudent />}
            />

            <Route path="teacher" element={<TeacherPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
