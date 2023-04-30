import React from "react";
import Image from "next/image";

const CustomerItem = ({ imgSrc, name, job }) => {

  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px] ">
        <p className="opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempora
          eligendi labore officia, explicabo et a, tenetur recusandae numquam
          repudiandae, voluptatem voluptates? Molestias voluptate excepturi
          blanditiis, culpa pariatur debitis recusandae.
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold"> {name} </span>
          <span className="text-[15px] "> {job} </span>
        </div>
      </div>
      <div className="relative h-[115px] w-[115px] border-4 rounded-full border-primary mt-8 before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5  ">
        <Image
          src={imgSrc}
          alt="/"
          fill
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
