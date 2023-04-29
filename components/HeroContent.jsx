import Image from "next/image";
import React from "react";
import herobg from "../public/images/hero-bg.jpg";
import Title from "./ui/Title";

const Carousel = () => {

  return (
    <div className="h-screen w-full relative top-[-88px] z-[1] ">
      <div className="relative h-full w-full">
        <Image src={herobg} fill alt="hero-bg" objectFit="cover" />
      </div>

      <div className="max-w-[1240px] absolute top-[200px] ml-10 md:ml-[200px] flex flex-col items-start gap-y-4 container left-0 text-white">
        <div className="relative z-[2] -top-10">
          <Title addClass="text-6xl">Fast Food Restaurant</Title>
        </div>
        <p className=" w-[300px] sm:w-[550px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          doloribus. Doloribus odio porro esse ullam minus omnis praesentium
          voluptates. Inventore natus sit pariatur nostrum, asperiores maiores
          velit iste, odit delectus tempora dicta eum excepturi.
        </p>
        <button className="btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;
