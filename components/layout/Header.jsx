import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Search from "../ui/Search";
import Title from "../ui/Title";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [nav, setNav] = useState(false);
  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`h-[5.5rem] z-40 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      } `}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav className="sm:block hidden">
          <ul className="flex gap-x-4 pl-24">
            <li className="hover:text-primary duration-300">
              <Link href="/">HOME</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link href="/menu">MENU</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link href="/reservation">BOOK TABLE</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-4">
          <Link href="/auth/login" className="hover:text-primary duration-300">
            <FaUserAlt />
          </Link>
          <Link href="/cart" className="hover:text-primary duration-300">
            <span className="relative">
              <FaShoppingCart />
              <span className="w-4 h-4 text-xs grid place-content-center text-black font-bold p-2 rounded-full bg-primary absolute -top-2 -right-3"> {cart.products.length} </span>
            </span>
          </Link>
          <button
            onClick={() => setIsSearchModal(true)}
            className="hover:text-primary duration-300"
          >
            <FaSearch />
          </button>
          <Link href="/auth/login" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </Link>
          <button onClick={handleNav} className="sm:hidden">
            <RiMenu3Fill className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}

      {/* mobile design */}
      <div
        className={
          nav
            ? "sm:hidden fixed top-0 left-0 w-full h-screen bg-black/70 duration-300"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[75% sm:w-[60%] md:[45%] h-screen bg-primary p-10 ease-in duration-300 "
              : "fixed left-[-100%] top-0 p-10 duration-300 "
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Title addClass={`text-4xl`}>Feane</Title>
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-700 p-2 cursor-pointer ml-14"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-700 my-4"></div>
          <div className="">
            <ul className="flex flex-col gap-y-4">
              <li className="hover:text-secondary text-gray-700 hover:font-extrabold duration-300">
                <Link href="/">HOME</Link>
              </li>
              <li className="hover:text-secondary text-gray-700 hover:font-extrabold duration-300">
                <Link href="/menu">MENU</Link>
              </li>
              <li className="hover:text-secondary text-gray-700 hover:font-extrabold duration-300">
                <Link href="/about">ABOUT</Link>
              </li>
              <li className="hover:text-secondary text-gray-700 hover:font-extrabold duration-300">
                <Link href="/reservation">BOOK TABLE</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
