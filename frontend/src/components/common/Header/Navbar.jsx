import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRightWindowClose } from "react-icons/fa";
const Navbar = () => {
const navItems = [
    { to: "/", label: "Home" },
    { to: "/tutors", label: "Tutuors" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }, ]


  return (
    <nav>

      {/* Close Button */}
      {menuOpened && (
        <FaRightWindowClose
          onClick={toggleMenu}
          className=" text-xl self-end cursor-pointer relative left-8"
        />
      )}

      {/* Logo */}
      <Link
        to={"/"}
        className="text-[24px] font-bold leading-[120%] flex-1 flex"
      >
        <span className="inline-flex">
          <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary rotate-[-31deg] rounded-full">
            T
          </span>
          utorFinder
        </span>
      </Link>

      {/* Navigation Links */}

      {navItems.map(({ to, label }) => (
        <div key={label} className="inline-flex">
          <NavLink>
            to={to}
            className={({ isActive }) =>
              isActive
                ? "text-secondary relative after:w-full after:h-0.5 after:rounded-full after:bg-secondary after:absolute after:bottom-2 after:left-0"
                : ""
            }
            <h5 className="text-[16px] font-medium">{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
