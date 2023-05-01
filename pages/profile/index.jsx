import React, { useState } from "react";
import Image from "next/image";
import { AiFillHome, AiOutlineKey } from "react-icons/ai";
import { RiEBike2Fill } from "react-icons/ri";
import { BiExit } from "react-icons/bi";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-20 py-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col ">
      {/* left side start */}
      <div className="border border-gray-200 lg:w-80 w-full flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5">
          <Image
            src="/images/client2.jpg"
            width={100}
            height={100}
            className="rounded-full"
            alt="/"
          />
          <b className="text-[24px] mt-1 ">Emre Uçar</b>
        </div>
        {/* button start */}
        <ul className="font-semibold">
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 0 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(0)}
          >
            <AiFillHome />
            <button className="">Account</button>
          </li>
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 1 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(1)}
          >
            <AiOutlineKey />
            <button className="">Password</button>
          </li>
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 2 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(2)}
          >
            <RiEBike2Fill />
            <button className="">Orders</button>
          </li>
          <li
            className={`border w-full p-3 flex items-center gap-x-2 hover:bg-primary duration-300 cursor-pointer hover:text-white ${
              tabs === 3 ? "bg-primary text-white" : ""
            }`}
            onClick={() => setTabs(3)}
          >
            <BiExit />
            <button className="">Exit</button>
          </li>
        </ul>
        {/* button end */}
      </div>
      {/* left side end */}

      {/* right side start */}
        {tabs === 0 && <Account />}
        {tabs === 1 && <Password />}
        {tabs === 2 && <Order />}
      {/* right side end */}
    </div>
  );
};

export default Profile;
