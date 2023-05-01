import React, { useState } from "react";
import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";
import { BiExit } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";
import { CgMenuGridO } from 'react-icons/cg';
import { BsLayoutTextWindowReverse } from 'react-icons/bs';
import Order from "@/components/admin/Order";
import Product from "@/components/admin/Products";
import Category from "@/components/admin/Category";
import Footer from "@/components/admin/Footer";

const Index = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-20 py-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col ">
      {/* left side start */}
      <div className="border border-gray-200 lg:w-80 w-full flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5">
          <Image
            src="/images/admin.png"
            width={100}
            height={100}
            className="rounded-full"
            alt="/"
          />
          <b className="text-[24px] mt-1 ">ADMİN</b>
        </div>
        {/* button start */}
        <ul className="font-semibold">
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 0 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(0)}
          >
            <MdRestaurantMenu />
            <button className="">Products</button>
          </li>
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 1 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(1)}
          >
            <RiEBike2Fill />
            <button className="">Orders</button>
          </li>
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 2 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(2)}
          >
            <CgMenuGridO/>
            <button className="">Categories</button>
          </li>
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 3 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(3)}
          >
            <BsLayoutTextWindowReverse />
            <button className="">Footer</button>
          </li>

          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 4 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(4)}
          >
            <BiExit />
            <button className="">Exit</button>
          </li>
        </ul>
        {/* button end */}
      </div>
      {/* left side end */}

      {/* right side start */}
      {tabs === 0 && <Product />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
      {/* right side end */}
    </div>
  );
};

export default Index;
