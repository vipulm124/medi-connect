import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Calendar,
  Users,
  CircleUserRoundIcon as CircleUser,
  LogOut,
  FlaskConical,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-[200px] h-screen bg-[#f4f4f4] fixed top-0 left-0 flex flex-col p-5 shadow-[2px_0_5px_rgba(0,0,0,0.1)] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0`}
      >
        <h1 className="font-bold text-right text-[24px] flex items-center">
          <FlaskConical className="w-8 h-8 text-[#2965eb] stroke-2 mr-[15px] relative bottom-0" />
          <p>MediClinic</p>
        </h1>

        <div className="h-px bg-[#ccc] my-2.5"></div>
        <ul className="list-none p-0 m-0">
          <li className="flex items-center my-[15px]">
            <LayoutGrid className="w-4 h-4 text-[#2965eb] stroke-2 mr-[15px] relative bottom-0" />
            <Link
              to="/"
              className="no-underline text-[rgb(82,82,82)] text-base font-normal leading-7 font-['Roboto',sans-serif] hover:text-[#007bff]"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center my-[15px]">
            <Calendar className="w-4 h-4 text-[#2965eb] stroke-2 mr-[15px] relative bottom-0" />
            <Link
              to="/appointments"
              className="no-underline text-[rgb(82,82,82)] text-base font-normal leading-7 font-['Roboto',sans-serif] hover:text-[#007bff]"
            >
              Appointments
            </Link>
          </li>

          <li className="flex items-center my-[15px]">
            <Users className="w-4 h-4 text-[#2965eb] stroke-2 mr-[15px] relative bottom-0" />
            <Link
              to="/patients"
              className="no-underline text-[rgb(82,82,82)] text-base font-normal leading-7 font-['Roboto',sans-serif] hover:text-[#007bff]"
            >
              Patients
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <div className="h-px bg-[#ccc] my-2.5"></div>
          <div className="grid grid-cols-[1fr_2fr_1fr] text-xs font-bold">
            <div>
              <CircleUser className="w-6 h-6 text-[#2965eb] stroke-2 relative bottom-0" />
            </div>
            <div>Dr. John S.</div>
            <div className="flex justify-end">
              <LogOut className="w-6 h-6 text-[#2965eb] stroke-2 relative bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;