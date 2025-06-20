import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import{TbArrowarroudRight} from "react-icons/tb"
 import {UserIcon,AlignLeft} from "lucide-react";




const MainHeader = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);}


  return (
    <header className="mx-auto max-w-[1440px] px-6 lg:px-12 w-full absolute top-0 left-0 right-0 z-50 bg-deep text-white py-3">
      <div className="flex items-center justify-between; ">
        {/* Logos */}
        <Link to={"/"} className="text-[24px] font-bold leading-[120%] flex-1 flex">
          <span className="inline-flex" >
            <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary rotate-[-31deg] rounded-full" >T</span>
            utorFinder
          </span>
        </Link>

        {/* NavBar */}
        <div className="flex-1 ">
          <Navbar menuOpened= {menuOpened} toggleMenu = {toggleMenu} />
        </div>

        
        {/* Right Side */}
        <div>
          {!menuOpened && (
           <AlignLeft size={28} strokeWidth={2.5}  onclick={toggleMenu}/> 
          )}
        </div>
        <button className="flex items-center justify-center gap-x-2 text-[18px] font-normal bg-white text-tertiary px-5 py-3 rounded-full border-none">Login <UserIcon/> </button>
      </div>
    </header>
  );
};

export default MainHeader;
