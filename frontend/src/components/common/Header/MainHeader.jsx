import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { UserIcon, AlignLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/AppContext";

const MainHeader = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const toggleMenu = () => setMenuOpened((prev) => !prev);
  const { token, setToken } = useContext(AppContext);

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
          {/* Login Button */}
          <Button variant="custom">
            <Link to="/login" className="flex items-center space-x-1">
              <span>Login</span>
              <UserIcon className="w-5 h-5" />
            </Link>
          </Button>
          (token && (
            <>
            {/* DropDown for menu */}
            </>
          ))
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <Navbar
        menuOpened={menuOpened}
        toggleMenu={toggleMenu}
        containerStyles={`${
          menuOpened ? "flex" : "hidden"
        } xl:hidden absolute top-0 left-0 h-screen w-[230px] flex-col gap-y-6 px-6 pt-8 z-50 bg-white/10 backdrop-blur-md text-deep
        
`}
      />
    </header>
  );
};

export default MainHeader;
