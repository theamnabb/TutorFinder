import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { UserIcon, AlignLeft } from "lucide-react";

const MainHeader = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const toggleMenu = () => setMenuOpened((prev) => !prev);

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
            <AlignLeft size={28} strokeWidth={2.5} onClick={toggleMenu} className="cursor-pointer" />
          </div>

          {/* Login Button */}
          <button className="flex items-center gap-x-2 text-[18px] font-normal bg-white text-tertiary px-5 py-3 rounded-full">
            Login <UserIcon />
          </button>
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
