import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { UserIcon, AlignLeft, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/AppContext";
import tutorFemale from "../../../assets/tutors/tutor-female.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MainHeader = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const toggleMenu = () => setMenuOpened((prev) => !prev);
  const { token, setToken } = useContext(AppContext);
  const isAuthenticated = !!token;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-deep text-white py-3 ">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-[24px] font-bold leading-[120%] flex items-center gap-x-1"
        >
          <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary rotate-[-31deg] rounded-full">
            T
          </span>
          utorFinder
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-1 justify-center">
          <Navbar containerStyles="flex gap-x-8" />
        </div>

        {/* Right Side (Login + Mobile Menu Button) */}
        <div className="flex items-center gap-x-4">
          {/* Mobile Menu Toggle */}
          <div className="xl:hidden">
            <AlignLeft
              size={28}
              strokeWidth={2.5}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>

          {/* Login or Profile Dropdown */}
          {!isAuthenticated ? (
            <Button variant="custom">
              <Link to="/login" className="flex items-center space-x-1">
                <span>Login</span>
                <UserIcon className="w-5 h-5" />
              </Link>
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full overflow-hidden w-12 h-12 border border-gray-300 cursor-pointer">
                  <img
                    src={tutorFemale}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/my-profile" className="cursor-pointer">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/my-sessions" className="cursor-pointer">
                    My Sessions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                  <Link
                    to="/logout"
                    className="flex items-center cursor-pointer gap-2 w-full text-red-500"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <Navbar
        menuOpened={menuOpened}
        toggleMenu={toggleMenu}
        containerStyles={`${
          menuOpened ? "flex" : "hidden"
        } xl:hidden absolute top-0 left-0 h-screen w-[230px] flex-col gap-y-6 px-6 pt-8 z-50 bg-white/10 backdrop-blur-md text-deep`}
      />
    </header>
  );
};

export default MainHeader;
