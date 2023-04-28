import React from "react";
import Logo from "../ui/Logo";
import { FaShoppingCart, FaUserAlt, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-4 pl-24">
            <li className="hover:text-primary duration-300">
              <a href="#">HOME</a>
            </li>
            <li className="hover:text-primary duration-300">
              <a href="#">MENU</a>
            </li>
            <li className="hover:text-primary duration-300">
              <a href="#">ABOUT</a>
            </li>
            <li className="hover:text-primary duration-300">
              <a href="#">BOOK TABLE</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-4">
            <a href="#" className="hover:opacity-70 duration-300">
                <FaUserAlt />
            </a>
            <a href="#" className="hover:opacity-70 duration-300">
                <FaShoppingCart />
            </a>
            <a href="#" className="hover:opacity-70 duration-300">
                <FaSearch />
            </a>
            <a href="#">
                <button className="btn-primary">Order Online</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
