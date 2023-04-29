import React, {useState} from "react";
import Title from "./Title";
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';

const Search = ({setIsSearchModal}) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/70 z-50">
      <div className="w-full h-full grid place-content-center">
        <div className="md:w-[600px] w-[370px] duration-300 bg-white border-2 p-10 relative rounded-3xl">
          <Title addClass="text-[40px] text-center">Title</Title>
          <input
            type="text"
            placeholder="Search..."
            className="border w-full my-10"
          />
          <div className="">
            <ul>
                <li className="flex items-center justify-between p-2 hover:bg-primary duration-300">
                    <div className="relative flex">
                        <Image src='/images/f1.png' alt="/" width={48} height={48} />
                    </div>
                    <span className="font-bold">Good Pizza</span>
                    <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary duration-300">
                    <div className="relative flex">
                        <Image src='/images/f1.png' alt="/" width={48} height={48} />
                    </div>
                    <span className="font-bold">Good Pizza</span>
                    <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary duration-300">
                    <div className="relative flex">
                        <Image src='/images/f1.png' alt="/" width={48} height={48} />
                    </div>
                    <span className="font-bold">Good Pizza</span>
                    <span className="font-bold">$10</span>
                </li>
            </ul>
            {/* close icon */}
            <button onClick={() => setIsSearchModal(false)} className="absolute top-5 right-5">
                <AiOutlineClose className="hover:text-primary duration-300" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
